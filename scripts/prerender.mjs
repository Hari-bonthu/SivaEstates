import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('Error: dist directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const routes = [
  '/',
  '/properties',
  '/about',
  '/gallery',
  '/offices',
  '/contact',
  '/venture/jetty-mayfair',
  '/venture/sreenivasam-lake-view',
  '/venture/sree-harivasam',
  '/venture/sreenivasam',
  '/venture/sree-venkatesam',
  '/venture/seshadri-heights'
];

function createServer() {
  const initialIndexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

  return http.createServer((req, res) => {
    try {
      const url = new URL(req.url, `http://${req.headers.host}`);
      let filePath = path.join(distDir, decodeURIComponent(url.pathname));

      if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      }

      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        const content = fs.readFileSync(filePath);
        res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
        res.end(content);
      } else {
        // SPA fallback
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(initialIndexHtml);
      }
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(`Internal Server Error: ${err.message}`);
    }
  });
}

function safeWriteFileSync(targetPath, content) {
  let retries = 5;
  while (retries > 0) {
    try {
      fs.writeFileSync(targetPath, content, 'utf-8');
      return;
    } catch (err) {
      retries--;
      if (retries === 0) throw err;
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 100); // 100ms sync sleep
    }
  }
}

async function runPrerender() {
  console.log('🚀 Starting Siva Telugu Estates Pre-Rendering Engine (BDS Parity)...');
  const server = createServer();

  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  console.log(`🌐 Local preview server listening on port ${port}`);

  let browser;
  try {
    browser = await chromium.launch({ channel: 'chrome', headless: true });
  } catch {
    try {
      browser = await chromium.launch({ headless: true });
    } catch (launchErr) {
      console.warn('⚠️ Warning: Chromium could not be launched for pre-rendering:', launchErr.message);
      server.close();
      return;
    }
  }

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (compatible; SivaTeluguEstatesPrerenderBot/1.0; +https://www.sivateluguestates.com)'
  });

  const page = await context.newPage();
  const renderedOutputs = [];

  for (const route of routes) {
    const targetUrl = `http://127.0.0.1:${port}${route}`;
    try {
      await page.goto(targetUrl, { waitUntil: 'networkidle', timeout: 15000 });
      await page.waitForSelector('#root > div', { timeout: 5000 });
      // Short delay for React title/meta useEffect to settle
      await page.waitForTimeout(300);

      const html = await page.content();
      const pageTitle = await page.title();

      let targetPath;
      if (route === '/') {
        targetPath = path.join(distDir, 'index.html');
      } else {
        const outDir = path.join(distDir, route.replace(/^\//, ''));
        fs.mkdirSync(outDir, { recursive: true });
        targetPath = path.join(outDir, 'index.html');
      }

      renderedOutputs.push({ route, targetPath, html, pageTitle });
      console.log(`  ✓ Rendered [${route}] in browser ("${pageTitle.slice(0, 45)}...")`);
    } catch (err) {
      console.error(`  ✗ Failed to render route ${route}:`, err.message);
    }
  }

  await browser.close();
  server.close();

  // Write all files now that server and browser have closed their handles
  console.log('💾 Writing static HTML files to dist...');
  for (const { route, targetPath, html } of renderedOutputs) {
    safeWriteFileSync(targetPath, html);
    console.log(`  ✓ Saved [${route}] -> ${path.relative(distDir, targetPath)}`);
  }

  // Generate / Preserve 404.html for GitHub Pages fallback
  const public404Path = path.resolve(__dirname, '../public/404.html');
  if (fs.existsSync(public404Path)) {
    const custom404Html = fs.readFileSync(public404Path, 'utf-8');
    safeWriteFileSync(path.join(distDir, '404.html'), custom404Html);
    console.log('  ✓ Preserved branded public/404.html -> dist/404.html');
  } else {
    const rootHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
    safeWriteFileSync(path.join(distDir, '404.html'), rootHtml);
    console.log('  ✓ Generated dist/404.html from index.html');
  }

  console.log('✅ Siva Telugu Estates Pre-Rendering completed successfully!\n');
}

runPrerender().catch((err) => {
  console.error('Fatal pre-render error:', err);
  process.exit(1);
});
