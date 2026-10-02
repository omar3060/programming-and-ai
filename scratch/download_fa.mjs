import fs from 'fs';
import path from 'path';
import https from 'https';

const baseDir = path.join(process.cwd(), 'public', 'fontawesome');
const cssDir = path.join(baseDir, 'css');
const fontsDir = path.join(baseDir, 'webfonts');

if (!fs.existsSync(cssDir)) fs.mkdirSync(cssDir, { recursive: true });
if (!fs.existsSync(fontsDir)) fs.mkdirSync(fontsDir, { recursive: true });

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function setupFontAwesome() {
  console.log('Downloading FontAwesome CSS...');
  const cssUrl = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
  const cssPath = path.join(cssDir, 'all.min.css');
  await downloadFile(cssUrl, cssPath);

  // Read CSS and update webfont paths to point to ../webfonts/
  let cssContent = fs.readFileSync(cssPath, 'utf8');
  cssContent = cssContent.replace(/url\(\.\.\/webfonts\//g, 'url(/fontawesome/webfonts/');
  fs.writeFileSync(cssPath, cssContent);

  const fonts = [
    'fa-solid-900.woff2',
    'fa-solid-900.ttf',
    'fa-brands-400.woff2',
    'fa-brands-400.ttf',
    'fa-regular-400.woff2',
    'fa-regular-400.ttf'
  ];

  for (const font of fonts) {
    const fontUrl = `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/webfonts/${font}`;
    const fontPath = path.join(fontsDir, font);
    console.log(`Downloading ${font}...`);
    try {
      await downloadFile(fontUrl, fontPath);
    } catch (e) {
      console.warn(`Could not download ${font}:`, e.message);
    }
  }

  console.log('FontAwesome offline assets downloaded successfully!');
}

setupFontAwesome();
