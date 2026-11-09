const fs = require('node:fs');
const { stargazers_count } = require('./github-stars.json');
if (!Number.isSafeInteger(stargazers_count) || stargazers_count <= 0) {
  throw new Error('Invalid public GitHub stars snapshot');
}
const file = 'apps/v4/components/github-link.tsx';
const code = fs.readFileSync(file, 'utf8');
const original = /  const data = await fetch\("https:\/\/api\.github\.com\/repos\/shadcn-ui\/ui", \{\r?\n    next: \{ revalidate: 86400 \},\r?\n  \}\)\r?\n  const json = await data\.json\(\)/g;
if ([...code.matchAll(original)].length !== 1) throw new Error('Unexpected stars request source');
fs.writeFileSync(file, code.replace(original, '  const json = { stargazers_count: ' + stargazers_count + ' }'));
