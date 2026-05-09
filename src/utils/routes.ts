export function stripSlashes(value: string) {
  return value.replace(/^\/+|\/+$/g, '');
}

export function slugify(value: string) {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getLegacyTeamSlug(data: { permalink?: string }) {
  const permalink = data.permalink ? stripSlashes(data.permalink) : '';

  if (permalink.startsWith('team/')) {
    return stripSlashes(permalink.slice('team/'.length));
  }

  return '';
}

export function getTeamSlug(data: { title: string }, fallbackId: string) {
  return slugify(data.title) || slugify(fallbackId.replace(/_/g, '-'));
}

export function getTeamAliases(data: { title: string; permalink?: string }, id: string) {
  const canonicalSlug = getTeamSlug(data, id);
  const aliases = new Set<string>();

  if (id && id !== canonicalSlug) {
    aliases.add(id);
  }

  const legacySlug = getLegacyTeamSlug(data);
  if (legacySlug && legacySlug !== canonicalSlug) {
    aliases.add(legacySlug);
  }

  return [...aliases];
}

export function getBlogSlug(id: string) {
  return id.toLowerCase();
}

export function getLegacyBlogParams(id: string, categories?: string) {
  const match = id.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)$/);

  if (!match) {
    return [];
  }

  const [, year, month, day, sourceSlug] = match;
  const slugVariants = [...new Set([sourceSlug, sourceSlug.toLowerCase()])];
  const categoryList = categories
    ? [...new Set(categories.split(/\s+/).map(stripSlashes).filter(Boolean))]
    : [];

  const paramsList = [];

  for (const slug of slugVariants) {
    paramsList.push({ year, month, day, slug });

    for (const category of categoryList) {
      paramsList.push({ category, year, month, day, slug });
    }
  }

  return paramsList;
}
