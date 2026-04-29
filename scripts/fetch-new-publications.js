import fs from 'fs';
import path from 'path';
import bibtexParse from 'bibtex-parse-js';
import yaml from 'js-yaml';

const TEAM_DIR = 'src/content/team';
const BIB_DIR = 'src/data/publis';
const MIN_YEAR = 2024; // Only look for papers from 2024 onwards

// Helper for sleep/delay
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Normalize titles for comparison
function normalizeTitle(title) {
  return title.toLowerCase().replace(/[^a-z0-9]/g, '');
}

async function getActiveMembers() {
  const files = fs.readdirSync(TEAM_DIR).filter(f => f.endsWith('.md'));
  const members = [];

  for (const file of files) {
    const content = fs.readFileSync(path.join(TEAM_DIR, file), 'utf8');
    const match = content.match(/^---([\s\S]*?)---/);
    if (!match) continue;

    try {
      const frontmatter = yaml.load(match[1]);
      
      // Filter for active members only
      if (frontmatter.category === 'alumni') continue;
      
      // Focus on Academics and Postdocs (plus staff/PIs)
      const isPriorityMember = frontmatter.category && (
        frontmatter.category.toLowerCase().includes('academic') || 
        frontmatter.category.toLowerCase().includes('postdoc') ||
        frontmatter.category.toLowerCase().includes('professor') ||
        frontmatter.category.toLowerCase().includes('staff')
      );
      
      if (!isPriorityMember) continue;

      const scholarUrl = frontmatter.social?.['google-scholar'];
      let scholarId = null;
      if (scholarUrl && typeof scholarUrl === 'string') {
        const idMatch = scholarUrl.match(/user=([^&]+)/);
        if (idMatch) scholarId = idMatch[1];
      }

      if (scholarId) {
        // Parse join date
        let joinDate = null;
        if (frontmatter.date) {
          joinDate = new Date(frontmatter.date);
        } else {
          joinDate = new Date(0);
        }

        members.push({
          name: frontmatter.title,
          category: frontmatter.category,
          scholarId,
          joinDate: joinDate,
          joinYear: joinDate.getFullYear(),
        });
      }
    } catch (e) {
      console.error(`Error parsing ${file}:`, e.message);
    }
  }
  return members;
}

function getExistingTitles() {
  const files = fs.readdirSync(BIB_DIR).filter(f => f.endsWith('.bib'));
  const titles = new Set();

  for (const file of files) {
    const content = fs.readFileSync(path.join(BIB_DIR, file), 'utf8');
    try {
      const entries = bibtexParse.toJSON(content);
      entries.forEach(entry => {
        if (entry.entryTags && entry.entryTags.title) {
          titles.add(normalizeTitle(entry.entryTags.title));
        }
      });
    } catch (e) {
      console.error(`Error parsing bib file ${file}:`, e.message);
    }
  }
  return titles;
}

async function fetchScholarPapers(scholarId) {
  const url = `https://scholar.google.com/citations?user=${scholarId}&hl=en&cstart=0&pagesize=100`;
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept-Language': 'en-US,en;q=0.9',
      'Referer': 'https://scholar.google.com/'
    }
  });
  if (!response.ok) {
    console.error(`Failed to fetch Scholar profile for ${scholarId}: ${response.status}`);
    return [];
  }
  const html = await response.text();

  const papers = [];
  const titleRegex = /class="gsc_a_at">([^<]+)<\/a>/g;
  const yearRegex = /class="gsc_a_h gsc_a_hc gs_ibl">([^<]+)<\/span>/g;

  let titleMatch;
  while ((titleMatch = titleRegex.exec(html)) !== null) {
    papers.push({ title: titleMatch[1].replace(/&amp;/g, '&'), year: null });
  }

  let yearMatch;
  let i = 0;
  while ((yearMatch = yearRegex.exec(html)) !== null) {
    if (papers[i]) {
      papers[i].year = parseInt(yearMatch[1]) || null;
    }
    i++;
  }

  return papers;
}

async function fetchBibtexAndDateFromCrossref(title, expectedYear) {
  try {
    const searchUrl = `https://api.crossref.org/works?query.title=${encodeURIComponent(title)}&rows=5`;
    const response = await fetch(searchUrl);
    if (!response.ok) return null;
    const data = await response.json();

    if (data.status === 'ok' && data.message.items.length > 0) {
      // Find the best match by year
      const item = data.message.items.find(i => {
        const year = i.published?.['date-parts']?.[0]?.[0] || i.created?.['date-parts']?.[0]?.[0];
        return Math.abs(year - expectedYear) <= 1;
      }) || data.message.items[0];

      const pubYear = item.published?.['date-parts']?.[0]?.[0] || item.created?.['date-parts']?.[0]?.[0];
      const pubMonth = item.published?.['date-parts']?.[0]?.[1] || item.created?.['date-parts']?.[0]?.[1] || 1;
      const pubDay = item.published?.['date-parts']?.[0]?.[2] || item.created?.['date-parts']?.[0]?.[2] || 1;
      
      if (Math.abs(pubYear - expectedYear) > 1) {
        return null;
      }

      const pubDate = new Date(pubYear, pubMonth - 1, pubDay);
      const doi = item.DOI;
      
      // Get BibTeX
      const bibResponse = await fetch(`https://api.crossref.org/works/${doi}/transform/application/x-bibtex`);
      if (bibResponse.ok) {
        return {
          bibtex: await bibResponse.text(),
          pubDate: pubDate
        };
      }
    }
  } catch (e) {
    // console.error(`Error fetching BibTeX for "${title}":`, e.message);
  }
  return null;
}

async function main() {
  console.log('Fetching active priority members (Academics/Postdocs) and existing publications...');
  const members = await getActiveMembers();
  const existingTitles = getExistingTitles();
  const foundInThisRun = new Set();
  const newPapers = [];

  console.log(`Found ${members.length} priority members with Google Scholar IDs.`);
  console.log(`Filtering for papers from ${MIN_YEAR} onwards and after member join date.\n`);

  for (let i = 0; i < members.length; i++) {
    const member = members[i];
    
    // Rate limiting delay between member fetches (except the first one)
    if (i > 0) {
      const waitTime = Math.floor(Math.random() * 4000) + 3000; // 3-7 seconds delay
      console.log(`Waiting ${waitTime/1000}s to prevent rate limiting...`);
      await sleep(waitTime);
    }

    console.log(`Checking publications for ${member.name} [${member.category}] (Joined: ${member.joinDate.toISOString().split('T')[0]})...`);
    const papers = await fetchScholarPapers(member.scholarId);
    
    let count = 0;
    for (const paper of papers) {
      if (paper.year && paper.year >= member.joinYear && paper.year >= MIN_YEAR) {
        const normTitle = normalizeTitle(paper.title);
        if (!existingTitles.has(normTitle) && !foundInThisRun.has(normTitle)) {
          newPapers.push({ ...paper, member });
          foundInThisRun.add(normTitle);
          count++;
        }
      }
    }
    if (count === 0) console.log('  No new potential papers found.');
    else console.log(`  Found ${count} potential new papers.`);
  }

  if (newPapers.length === 0) {
    console.log('\nNo missing publications found from 2024 onwards.');
    return;
  }

  console.log(`\nVerifying ${newPapers.length} publications and fetching BibTeX entries...\n`);

  let bibOutput = '';
  for (const paper of newPapers) {
    const result = await fetchBibtexAndDateFromCrossref(paper.title, paper.year);
    if (result) {
      if (result.pubDate >= paper.member.joinDate) {
        console.log(`[VALID] ${paper.title} (${result.pubDate.toISOString().split('T')[0]})`);
        bibOutput += result.bibtex.trim() + '\n\n';
      } else {
        console.log(`[EXCLUDED] ${paper.title} (Published ${result.pubDate.toISOString().split('T')[0]} < Joined ${paper.member.joinDate.toISOString().split('T')[0]})`);
      }
    } else {
      console.log(`[MISSING METADATA] ${paper.title} (${paper.year})`);
      bibOutput += `% Could not fetch official BibTeX for: ${paper.title}\n`;
      bibOutput += `@misc{pending_${normalizeTitle(paper.title).substring(0,20)}, title={${paper.title}}, year={${paper.year}}, note={CHECK METADATA}}\n\n`;
    }
  }

  if (bibOutput) {
    fs.writeFileSync('new_papers.bib', bibOutput);
    console.log('\nSuccess! New BibTeX entries written to: new_papers.bib');
    console.log('Next step: Manually move entries from new_papers.bib to the correct year-based .bib files in src/data/publis/');
  }
}

main().catch(console.error);
