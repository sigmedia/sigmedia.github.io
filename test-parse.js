import fs from 'node:fs';
import bibtexParse from 'bibtex-parse-js';

const content = fs.readFileSync('./src/data/publis/2022.bib', 'utf8');
const entries = bibtexParse.toJSON(content);
const entry = entries.find(e => e.citationKey === 'vibhoothi_2022_1');
console.log(JSON.stringify(entry, null, 2));
