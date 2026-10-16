import { readFileSync, writeFileSync } from 'fs';

const raw = readFileSync('arabic_textbook_extracted.txt', 'utf8');
const lines = raw.split(/\r?\n/);

const ranges = {
  '31': [55, 62],
  '32': [63, 68],
  '33': [69, 75],
};

for (const [key, range] of Object.entries(ranges)) {
  const start = range[0];
  const end = range[1];
  let out = '';
  let capturing = false;
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^=== PAGE (\d+) ===$/);
    if (m) {
      const n = parseInt(m[1], 10);
      capturing = n >= start && n <= end;
    }
    if (capturing) out += lines[i] + '\n';
  }
  writeFileSync('scratch/unit3_' + key + '_ar.txt', out, 'utf8');
  console.log('unit3_' + key + '_ar.txt', out.length);
}