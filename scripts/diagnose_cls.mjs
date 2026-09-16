import http from 'http';
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

const distDir = 'c:/Users/DELL/Desktop/Siva_realestate/dist';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
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

function createStaticServer() {
  return http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    let decodedPath = decodeURIComponent(url.pathname);
    let filePath = path.join(distDir, decodedPath);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
      res.end(fs.readFileSync(filePath));
    } else {
      const fallback404 = path.join(distDir, '404.html');
      if (fs.existsSync(fallback404)) {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(fs.readFileSync(fallback404));
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
      }
    }
  });
}

async function diagnoseCLS() {
  const server = createStaticServer();
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  const port = server.address().port;
  console.log(`📡 Diagnostic Preview server running at http://127.0.0.1:${port}\n`);

  let browser;
  try {
    browser = await chromium.launch({ channel: 'chrome', headless: true });
  } catch {
    browser = await chromium.launch({ headless: true });
  }
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  const routes = ['/', '/properties', '/about', '/venture/jetty-mayfair'];

  for (const route of routes) {
    console.log(`================================================================`);
    console.log(`🔍 DIAGNOSING ROUTE: ${route}`);
    console.log(`================================================================`);

    await page.goto('about:blank');

    await page.addInitScript(() => {
      window.__clsShifts = [];
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              const shiftInfo = {
                value: entry.value,
                startTime: entry.startTime,
                sources: []
              };
              if (entry.sources) {
                for (const source of entry.sources) {
                  const node = source.node;
                  let selector = '';
                  let tag = '';
                  let className = '';
                  let text = '';
                  if (node) {
                    tag = node.tagName ? node.tagName.toLowerCase() : '';
                    className = node.className || '';
                    selector = tag + (node.id ? '#' + node.id : '') + (node.className ? '.' + String(node.className).trim().split(/\s+/).slice(0, 3).join('.') : '');
                    text = (node.innerText || node.textContent || '').slice(0, 50).trim();
                  }
                  shiftInfo.sources.push({
                    selector,
                    tag,
                    className: String(className).slice(0, 50),
                    text,
                    previousRect: source.previousRect,
                    currentRect: source.currentRect
                  });
                }
              }
              window.__clsShifts.push(shiftInfo);
            }
          }
        });
        observer.observe({ type: 'layout-shift', buffered: true });
      } catch (e) {
        console.error(e);
      }
    });

    await page.goto(`http://127.0.0.1:${port}${route}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000); // Allow all hydration, fonts, images to settle

    const shifts = await page.evaluate(() => window.__clsShifts);
    let totalCLS = 0;

    shifts.forEach((shift, index) => {
      totalCLS += shift.value;
      console.log(`\n  Shift #${index + 1} at ${Math.round(shift.startTime)}ms | Score: ${shift.value.toFixed(4)}`);
      if (shift.sources.length === 0) {
        console.log(`    (No direct source node identified by browser)`);
      }
      for (const src of shift.sources) {
        console.log(`    Node: <${src.tag}> ${src.selector}`);
        if (src.text) console.log(`    Text: "${src.text}"`);
        if (src.previousRect && src.currentRect) {
          console.log(`    Prev Rect: top=${Math.round(src.previousRect.top)}, height=${Math.round(src.previousRect.height)}, width=${Math.round(src.previousRect.width)}`);
          console.log(`    Curr Rect: top=${Math.round(src.currentRect.top)}, height=${Math.round(src.currentRect.height)}, width=${Math.round(src.currentRect.width)}`);
          const deltaTop = src.currentRect.top - src.previousRect.top;
          const deltaHeight = src.currentRect.height - src.previousRect.height;
          console.log(`    Movement: deltaTop=${Math.round(deltaTop)}px, deltaHeight=${Math.round(deltaHeight)}px`);
        }
      }
    });

    console.log(`\n  👉 Total Measured CLS for ${route}: ${totalCLS.toFixed(4)}`);
  }

  await browser.close();
  server.close();
}

diagnoseCLS().catch(err => {
  console.error(err);
  process.exit(1);
});
