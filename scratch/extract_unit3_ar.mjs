import { readFileSync, writeFileSync } from 'fs';

const raw = readFileSync('arabic_textbook_extracted.txt', 'utf8');
const lines = raw.split(/\r?\n/);

let out = '';
let capturing = false;
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].match(/^=== PAGE (\d+) ===$/);
  if (m) {
    const n = parseInt(m[1], 10);
    capturing = n >= 55 && n <= 75;
  }
  if (capturing) out += lines[i] + '\n';
}
writeFileSync('scratch/unit3_ar_raw.txt', out, 'utf8');
console.log('Wrote', out.length, 'chars');