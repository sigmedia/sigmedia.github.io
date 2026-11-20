export const socialIcons: Record<string, string> = {
  twitter: 'sig-icon sig-icon-brand sig-icon-twitter',
  linkedin: 'sig-icon sig-icon-brand sig-icon-linkedin',
  github: 'sig-icon sig-icon-brand sig-icon-github',
  website: 'sig-icon sig-icon-solid sig-icon-website',
  email: 'sig-icon sig-icon-solid sig-icon-email',
  'google-scholar': 'sig-icon sig-icon-solid sig-icon-google-scholar',
  orcid: 'sig-icon sig-icon-brand sig-icon-orcid',
  'research-gate': 'sig-icon sig-icon-brand sig-icon-research-gate',
  wikipedia: 'sig-icon sig-icon-brand sig-icon-wikipedia',
};

export function normalizeTeamSocial(social?: Record<string, string | undefined>) {
  if (!social) return undefined;
  return {
    ...social,
    orcid: social.orcid || social.orchid,
  };
}
