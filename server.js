const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

let PORT = 8080;
const root = fs.existsSync(path.join(__dirname, 'out')) 
  ? path.join(__dirname, 'out') 
  : __dirname;

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8'
};

function startServer(port) {
  const server = http.createServer((req, res) => {
    let reqUrl = decodeURIComponent(req.url.split('?')[0]);
    if (reqUrl === '/') reqUrl = '/index.html';

    let filePath = path.join(root, reqUrl);

    fs.stat(filePath, (err, stats) => {
      if (err || stats.isDirectory()) {
        filePath = path.join(root, 'index.html');
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = mimeTypes[ext] || 'application/octet-stream';

      fs.readFile(filePath, (readErr, data) => {
        if (readErr) {
          res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('404 File Not Found');
        } else {
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(data);
        }
      });
    });
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is in use, trying ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });

  server.listen(port, () => {
    const url = `http://localhost:${port}`;
    console.log(`=======================================================`);
    console.log(`  منصة البرمجة والذكاء الاصطناعي — تشغيل أوفلاين  `);
    console.log(`  الخادم يعمل الآن بنجاح على العنوان: ${url}`);
    console.log(`  (يرجى عدم إغلاق هذه النافذة أثناء استخدام المنصة)`);
    console.log(`=======================================================`);

    const startCmd = process.platform === 'win32' ? `start ${url}` : `open ${url}`;
    exec(startCmd);
  });
}

startServer(PORT);
