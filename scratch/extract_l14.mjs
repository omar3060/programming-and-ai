import { readFileSync, writeFileSync } from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { PDFParse } = require('pdf-parse');

const buf = readFileSync('../theProject/منهج البرمجة 2ث انجليزي جزء أول.pdf');
const pdf = new PDFParse(buf);
const pages = await pdf.getAllPages();
// Lesson 1-4 is on pages 27-33 (0-indexed 26-32)
let text = '';
for (let i = 26; i <= 33 && i < pages.length; i++) {
  text += `=== PAGE ${i+1} ===\n${pages[i].text}\n\n`;
}
writeFileSync('l1_4_en.txt', text, 'utf8');
console.log(`Extracted ${pages.length} total pages, wrote lesson 1-4 pages 27-34`);
