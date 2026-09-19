import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const ROUTES = [
  '/',
  '/properties/',
  '/about/',
  '/gallery/',
  '/offices/',
  '/contact/',
  '/venture/jetty-mayfair/',
  '/venture/sreenivasam-lake-view/',
  '/venture/sree-harivasam/',
  '/venture/sreenivasam/',
  '/venture/sree-venkatesam/',
  '/venture/seshadri-heights/'
];

async function inspectHtmlAndDom() {
  console.log('=== HTML & DOM HIERARCHY DEEP DIVE ===\n');

  let browser;
  try {
    browser = await chromium.launch({ channel: 'chrome', headless: true });
  } catch {
    browser = await chromium.launch({ headless: true });
  }

  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  for (const route of ROUTES) {
    const filePath = route === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route.replace(/^\//, '').replace(/\/$/, ''), 'index.html');

    if (!fs.existsSync(filePath)) {
      console.log(`[FILE MISSING] ${filePath}`);
      continue;
    }

    const rawHtml = fs.readFileSync(filePath, 'utf-8');

    // Inspect static raw HTML
    const hasDoctype = /<!doctype html>/i.test(rawHtml);
    const langMatch = rawHtml.match(/<html[^>]*lang=["']([^"']*)["']/i);
    const lang = langMatch ? langMatch[1] : 'MISSING';
    const charsetMatch = rawHtml.match(/<meta[^>]*charset=["']([^"']*)["']/i);
    const charset = charsetMatch ? charsetMatch[1] : 'MISSING';
    const viewportMatch = rawHtml.match(/<meta[^>]*name=["']viewport["'][^>]*content=["']([^"']*)["']/i);
    const viewport = viewportMatch ? viewportMatch[1] : 'MISSING';

    // Headings in raw HTML
    const rawH1 = [...rawHtml.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
    const rawH2 = [...rawHtml.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
    const rawH3 = [...rawHtml.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
    const rawH4 = [...rawHtml.matchAll(/<h4[^>]*>([\s\S]*?)<\/h4>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());

    // Playwright DOM inspection
    await page.setContent(rawHtml, { waitUntil: 'domcontentloaded' });
    
    const domMetrics = await page.evaluate(() => {
      // Calculate max DOM depth
      function getMaxDepth(element) {
        let max = 0;
        for (const child of element.children) {
          max = Math.max(max, getMaxDepth(child));
        }
        return max + 1;
      }

      const totalElements = document.querySelectorAll('*').length;
      const maxDepth = getMaxDepth(document.documentElement);

      const h1Nodes = Array.from(document.querySelectorAll('h1')).map(el => el.textContent.trim().replace(/\s+/g, ' '));
      const h2Nodes = Array.from(document.querySelectorAll('h2')).map(el => el.textContent.trim().replace(/\s+/g, ' '));
      const h3Nodes = Array.from(document.querySelectorAll('h3')).map(el => el.textContent.trim().replace(/\s+/g, ' '));
      const h4Nodes = Array.from(document.querySelectorAll('h4')).map(el => el.textContent.trim().replace(/\s+/g, ' '));

      // Image audit: dimensions & alt
      const imgs = Array.from(document.querySelectorAll('img')).map(img => ({
        src: img.getAttribute('src'),
        alt: img.getAttribute('alt'),
        width: img.getAttribute('width'),
        height: img.getAttribute('height'),
        hasExplicitDimensions: !!(img.getAttribute('width') && img.getAttribute('height')),
        hasAlt: img.hasAttribute('alt') && img.getAttribute('alt').trim().length > 0
      }));

      // Link audit: hrefs
      const links = Array.from(document.querySelectorAll('a')).map(a => ({
        href: a.getAttribute('href'),
        target: a.getAttribute('target'),
        rel: a.getAttribute('rel'),
        text: a.textContent.trim()
      }));

      return {
        totalElements,
        maxDepth,
        h1Nodes,
        h2Nodes,
        h3Nodes,
        h4Nodes,
        imgs,
        links
      };
    });

    console.log(`\n======================================================`);
    console.log(`Route: ${route}`);
    console.log(`  Doctype: ${hasDoctype ? 'Valid' : 'MISSING'} | Lang: ${lang} | Charset: ${charset} | Viewport: ${viewport}`);
    console.log(`  DOM Nodes: ${domMetrics.totalElements} | Max Depth: ${domMetrics.maxDepth} (Target < 32)`);
    console.log(`  H1 Count: ${domMetrics.h1Nodes.length} -> [${domMetrics.h1Nodes.join(' | ')}]`);
    console.log(`  H2 Count: ${domMetrics.h2Nodes.length} | H3 Count: ${domMetrics.h3Nodes.length} | H4 Count: ${domMetrics.h4Nodes.length}`);
    console.log(`  Total Images: ${domMetrics.imgs.length} | Missing Alt: ${domMetrics.imgs.filter(i => !i.hasAlt).length} | Explicit W/H: ${domMetrics.imgs.filter(i => i.hasExplicitDimensions).length}`);
    console.log(`  Total Links: ${domMetrics.links.length}`);
    
    // Check links without trailing slashes
    const nonTrailingInternalLinks = domMetrics.links.filter(l => l.href && l.href.startsWith('/') && !l.href.endsWith('/') && !l.href.includes('.') && !l.href.includes('#'));
    if (nonTrailingInternalLinks.length > 0) {
      console.log(`  ⚠️ Non-trailing internal links detected (${nonTrailingInternalLinks.length}): ${[...new Set(nonTrailingInternalLinks.map(l => l.href))].join(', ')}`);
    }
  }

  await browser.close();
}

inspectHtmlAndDom().catch(console.error);
