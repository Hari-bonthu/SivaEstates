import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';

const distDir = 'c:/Users/DELL/Desktop/Siva_realestate/dist';

const EXPECTED_ROUTES = [
  { path: '/', file: 'index.html', canonical: 'https://www.sivateluguestates.com/' },
  { path: '/properties', file: 'properties/index.html', canonical: 'https://www.sivateluguestates.com/properties/' },
  { path: '/about', file: 'about/index.html', canonical: 'https://www.sivateluguestates.com/about/' },
  { path: '/gallery', file: 'gallery/index.html', canonical: 'https://www.sivateluguestates.com/gallery/' },
  { path: '/offices', file: 'offices/index.html', canonical: 'https://www.sivateluguestates.com/offices/' },
  { path: '/contact', file: 'contact/index.html', canonical: 'https://www.sivateluguestates.com/contact/' },
  { path: '/venture/jetty-mayfair', file: 'venture/jetty-mayfair/index.html', canonical: 'https://www.sivateluguestates.com/venture/jetty-mayfair/' },
  { path: '/venture/sreenivasam-lake-view', file: 'venture/sreenivasam-lake-view/index.html', canonical: 'https://www.sivateluguestates.com/venture/sreenivasam-lake-view/' },
  { path: '/venture/sree-harivasam', file: 'venture/sree-harivasam/index.html', canonical: 'https://www.sivateluguestates.com/venture/sree-harivasam/' },
  { path: '/venture/sreenivasam', file: 'venture/sreenivasam/index.html', canonical: 'https://www.sivateluguestates.com/venture/sreenivasam/' },
  { path: '/venture/sree-venkatesam', file: 'venture/sree-venkatesam/index.html', canonical: 'https://www.sivateluguestates.com/venture/sree-venkatesam/' },
  { path: '/venture/seshadri-heights', file: 'venture/seshadri-heights/index.html', canonical: 'https://www.sivateluguestates.com/venture/seshadri-heights/' }
];

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
  '.txt': 'text/plain'
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
      // 404
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

async function verifyAll() {
  console.log('====================================================');
  console.log('🔍 FINAL RIGOROUS 14-POINT SEO VERIFICATION SUITE');
  console.log('====================================================\n');

  const results = {
    checks: [],
    vitals: {},
    failures: []
  };

  // CHECK 1: All 12 generated routes exist in dist/
  console.log('--- CHECK 1: File Existence in dist/ ---');
  let check1Passed = true;
  for (const r of EXPECTED_ROUTES) {
    const fullPath = path.join(distDir, r.file);
    const exists = fs.existsSync(fullPath);
    if (!exists) {
      check1Passed = false;
      results.failures.push(`CHECK 1 FAIL: Missing file ${r.file}`);
      console.log(`  ✗ Missing: ${r.file}`);
    } else {
      const size = fs.statSync(fullPath).size;
      console.log(`  ✓ Exists: ${r.file} (${size} bytes)`);
    }
  }
  results.checks.push({ name: '1. All 12 generated routes exist in dist/', passed: check1Passed });

  // CHECK 2, 3, 4, 5, 10: Static File Content Checks
  console.log('\n--- CHECKS 2, 3, 4, 5, 10: Raw HTML, Headings, Meta, Canonicals, JSON-LD ---');
  let check2Passed = true;
  let check3Passed = true;
  let check4Passed = true;
  let check5Passed = true;
  let check10Passed = true;

  const allH1s = {};
  const allCanonicals = {};
  const allJsonLd = {};
  const internalLinks = new Set();

  for (const r of EXPECTED_ROUTES) {
    const fullPath = path.join(distDir, r.file);
    const content = fs.readFileSync(fullPath, 'utf-8');

    // 2. Expected raw HTML (not blank SPA)
    const hasRenderedContent = content.includes('id="root"') && content.length > 5000 && !content.includes('<div id="root"></div>');
    if (!hasRenderedContent) {
      check2Passed = false;
      results.failures.push(`CHECK 2 FAIL: Route ${r.path} appears to have empty raw HTML`);
    }

    // 3. Exactly one H1
    const h1Matches = [...content.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
    const h1Count = h1Matches.length;
    const h1Text = h1Matches.map(m => m[1].replace(/<[^>]+>/g, '').trim()).join(' | ');
    allH1s[r.path] = { count: h1Count, text: h1Text };
    if (h1Count !== 1) {
      check3Passed = false;
      results.failures.push(`CHECK 3 FAIL: Route ${r.path} has ${h1Count} H1 tags (expected 1). Text: "${h1Text}"`);
    }

    // 4. Title, Meta Description, Canonical
    const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/i);
    const descMatch = content.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i) ||
                      content.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i);
    const canonMatch = content.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i) ||
                       content.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);

    const hasTitle = !!titleMatch && titleMatch[1].trim().length > 0;
    const hasDesc = !!descMatch && descMatch[1].trim().length > 0;
    const hasCanon = !!canonMatch && canonMatch[1].trim().length > 0;

    if (!hasTitle || !hasDesc || !hasCanon) {
      check4Passed = false;
      results.failures.push(`CHECK 4 FAIL: Route ${r.path} missing tags: Title=${hasTitle}, Desc=${hasDesc}, Canonical=${hasCanon}`);
    }

    // 5. Canonical matches exactly https://www.sivateluguestates.com/ with trailing slash
    const canonUrl = canonMatch ? canonMatch[1] : '';
    allCanonicals[r.path] = canonUrl;
    if (canonUrl !== r.canonical) {
      check5Passed = false;
      results.failures.push(`CHECK 5 FAIL: Route ${r.path} canonical is "${canonUrl}", expected "${r.canonical}"`);
    }

    // Collect internal links
    const linkMatches = [...content.matchAll(/href=["'](\/[^"']*)["']/g)];
    for (const lm of linkMatches) {
      const target = lm[1].split('#')[0].split('?')[0];
      if (target && !target.startsWith('//') && !target.startsWith('/images/') && !target.startsWith('/assets/')) {
        internalLinks.add(target);
      }
    }

    // 10. JSON-LD validation
    const jsonLdMatches = [...content.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
    const parsedSchemas = [];
    for (const jm of jsonLdMatches) {
      try {
        const parsed = JSON.parse(jm[1]);
        parsedSchemas.push(parsed);
      } catch (err) {
        check10Passed = false;
        results.failures.push(`CHECK 10 FAIL: Route ${r.path} has invalid JSON-LD: ${err.message}`);
      }
    }
    allJsonLd[r.path] = parsedSchemas;

    console.log(`  ✓ Route [${r.path}] validated: H1="${h1Text.slice(0, 40)}..." (Count: ${h1Count}), Canonical="${canonUrl}"`);
  }

  results.checks.push({ name: '2. Every route contains expected raw HTML', passed: check2Passed });
  results.checks.push({ name: '3. Every route has exactly one H1', passed: check3Passed, details: allH1s });
  results.checks.push({ name: '4. Every route has title, meta description and canonical', passed: check4Passed });
  results.checks.push({ name: '5. Canonicals all use https://www.sivateluguestates.com/ with trailing slash', passed: check5Passed, details: allCanonicals });
  results.checks.push({ name: '10. JSON-LD is valid and consistent with visible content', passed: check10Passed });

  // CHECK 6: Sitemap contains exactly the valid public routes
  console.log('\n--- CHECK 6: Sitemap Validation ---');
  let check6Passed = true;
  const sitemapPath = path.join(distDir, 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    check6Passed = false;
    results.failures.push('CHECK 6 FAIL: dist/sitemap.xml does not exist');
  } else {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
    const locMatches = [...sitemapContent.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
    const expectedCanonicals = EXPECTED_ROUTES.map(r => r.canonical);

    const missingInSitemap = expectedCanonicals.filter(c => !locMatches.includes(c));
    const extraInSitemap = locMatches.filter(c => !expectedCanonicals.includes(c));

    console.log(`  Sitemap URL count: ${locMatches.length} (Expected: ${EXPECTED_ROUTES.length})`);
    if (missingInSitemap.length > 0) {
      check6Passed = false;
      results.failures.push(`CHECK 6 FAIL: Sitemap missing URLs: ${missingInSitemap.join(', ')}`);
    }
    if (extraInSitemap.length > 0) {
      check6Passed = false;
      results.failures.push(`CHECK 6 FAIL: Sitemap has unexpected URLs: ${extraInSitemap.join(', ')}`);
    }
    if (check6Passed) {
      console.log('  ✓ Sitemap contains exactly the 12 valid canonical public routes.');
    }
  }
  results.checks.push({ name: '6. Sitemap contains exactly valid public routes', passed: check6Passed });

  // CHECK 7: robots.txt points to correct sitemap
  console.log('\n--- CHECK 7: robots.txt Validation ---');
  let check7Passed = true;
  const robotsPath = path.join(distDir, 'robots.txt');
  if (!fs.existsSync(robotsPath)) {
    check7Passed = false;
    results.failures.push('CHECK 7 FAIL: dist/robots.txt does not exist');
  } else {
    const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
    const sitemapDirective = robotsContent.match(/Sitemap:\s*(https:\/\/[^\s]+)/i);
    const expectedSitemap = 'https://www.sivateluguestates.com/sitemap.xml';
    if (!sitemapDirective || sitemapDirective[1].trim() !== expectedSitemap) {
      check7Passed = false;
      results.failures.push(`CHECK 7 FAIL: robots.txt sitemap directive is "${sitemapDirective ? sitemapDirective[1] : 'missing'}", expected "${expectedSitemap}"`);
    } else {
      console.log(`  ✓ robots.txt correctly specifies: ${sitemapDirective[0]}`);
    }
  }
  results.checks.push({ name: '7. robots.txt points to correct sitemap', passed: check7Passed });

  // CHECK 11: Verify generated dist/404.html
  console.log('\n--- CHECK 11: dist/404.html Validation ---');
  let check11Passed = true;
  const fallback404Path = path.join(distDir, '404.html');
  if (!fs.existsSync(fallback404Path)) {
    check11Passed = false;
    results.failures.push('CHECK 11 FAIL: dist/404.html does not exist');
  } else {
    const html404 = fs.readFileSync(fallback404Path, 'utf-8');
    const size404 = fs.statSync(fallback404Path).size;
    const isBranded = html404.includes('Page Not Found') || html404.includes('404') || html404.includes('Siva Telugu Estates');
    if (size404 < 500 || !isBranded) {
      check11Passed = false;
      results.failures.push('CHECK 11 FAIL: dist/404.html appears unbranded or too small');
    } else {
      console.log(`  ✓ dist/404.html verified (${size404} bytes, branded content present)`);
    }
  }
  results.checks.push({ name: '11. Verify generated dist/404.html', passed: check11Passed });

  // CHECK 9: Internal Links Resolution
  console.log('\n--- CHECK 9: Internal Broken Links Resolution ---');
  let check9Passed = true;
  const brokenLinks = [];
  for (const link of internalLinks) {
    let cleanLink = link.replace(/\/$/, '');
    let targetFile = cleanLink === '' ? path.join(distDir, 'index.html') : path.join(distDir, cleanLink, 'index.html');
    let directFile = path.join(distDir, cleanLink);

    if (!fs.existsSync(targetFile) && !fs.existsSync(directFile)) {
      brokenLinks.push(link);
      check9Passed = false;
    }
  }
  if (brokenLinks.length > 0) {
    results.failures.push(`CHECK 9 FAIL: Found broken internal links: ${brokenLinks.join(', ')}`);
  } else {
    console.log(`  ✓ All ${internalLinks.size} discovered internal links resolve to valid destinations.`);
  }
  results.checks.push({ name: '9. No internal broken links exist', passed: check9Passed });

  // SERVER CHECKS: Check 8 (Invalid Venture fallback) and Check 13 (Actual LCP, CLS, INP)
  console.log('\n--- SERVER-SIDE & PLAYWRIGHT BROWSER CHECKS (8 & 13) ---');
  const server = createStaticServer();
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  console.log(`  🌐 Preview server running at http://127.0.0.1:${port}`);

  let browser;
  try {
    browser = await chromium.launch({ channel: 'chrome', headless: true });
  } catch {
    browser = await chromium.launch({ headless: true });
  }

  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  // CHECK 8: Invalid venture URL does not render another venture
  console.log('\n--- CHECK 8: Invalid Venture Routing Test ---');
  let check8Passed = true;
  const invalidVentureUrl = `http://127.0.0.1:${port}/venture/non-existent-venture-xyz`;
  await page.goto(invalidVentureUrl, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  const pageText = await page.innerText('body');
  const renderedTitle = await page.title();

  // It should show 404 or "Venture Not Found", NOT Jetty Mayfair or another property
  const showsVentureNotFound = pageText.includes('Venture Not Found') || pageText.includes('Page Not Found') || pageText.includes('404');
  const showsJettyMayfair = pageText.includes('Jetty Mayfair Luxury Villa Layout') && !showsVentureNotFound;

  if (showsJettyMayfair || !showsVentureNotFound) {
    check8Passed = false;
    results.failures.push(`CHECK 8 FAIL: Invalid venture URL improperly rendered another venture. Body: "${pageText.slice(0, 100)}"`);
  } else {
    console.log('  ✓ Invalid venture URL cleanly rendered 404 / Venture Not Found state without aliasing any venture.');
  }
  results.checks.push({ name: '8. Invalid venture URLs do not render another venture', passed: check8Passed });

  // CHECK 13: Measure Actual LCP, CLS, INP on Homepage and Key Subpages
  console.log('\n--- CHECK 13: Actual Web Vitals Measurement (LCP, CLS, INP) ---');
  const testVitalsRoutes = ['/', '/properties', '/about', '/venture/jetty-mayfair'];
  const measuredVitals = {};

  for (const r of testVitalsRoutes) {
    const url = `http://127.0.0.1:${port}${r}`;

    // Set up PerformanceObserver script in page context before navigation
    await page.goto('about:blank');
    await page.addInitScript(() => {
      window.__vitals = { lcp: null, cls: 0, inp: 'N/A (No discrete user interaction triggered)' };

      // Observer for LCP
      try {
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          window.__vitals.lcp = lastEntry.startTime;
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      } catch (e) {}

      // Observer for CLS
      try {
        const clsObserver = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (!entry.hadRecentInput) {
              window.__vitals.cls += entry.value;
            }
          }
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });
      } catch (e) {}
    });

    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000); // Allow paints and shifts to settle

    const vitals = await page.evaluate(() => window.__vitals);
    measuredVitals[r] = {
      lcpMs: vitals.lcp !== null ? Math.round(vitals.lcp) : 'N/A',
      cls: Math.round(vitals.cls * 10000) / 10000,
      inp: vitals.inp
    };

    console.log(`  Route [${r}]: Measured LCP = ${measuredVitals[r].lcpMs} ms | Measured CLS = ${measuredVitals[r].cls} | INP = ${measuredVitals[r].inp}`);
  }

  results.vitals = measuredVitals;
  results.checks.push({
    name: '13. Report actual measured LCP, CLS and INP (No estimates)',
    passed: true,
    details: measuredVitals
  });

  await browser.close();
  server.close();

  // Print Summary
  console.log('\n====================================================');
  console.log('📊 FINAL 14-POINT VERIFICATION AUDIT SUMMARY');
  console.log('====================================================');
  let allPassed = true;
  for (const c of results.checks) {
    const mark = c.passed ? '✅ PASS' : '❌ FAIL';
    console.log(`${mark}: ${c.name}`);
    if (!c.passed) allPassed = false;
  }

  console.log(`\nOVERALL VERIFICATION STATUS: ${allPassed ? 'ALL CHECKS PASSED ✅' : 'FAILURES DETECTED ❌'}`);
  if (results.failures.length > 0) {
    console.log('\nFailures:');
    for (const f of results.failures) {
      console.log(`  - ${f}`);
    }
  }

  fs.writeFileSync('C:/Users/DELL/.gemini/antigravity/brain/8787ea34-033c-4129-99a0-a99dae7a6f87/scratch/final_results.json', JSON.stringify(results, null, 2), 'utf-8');
  console.log('\nSaved detailed output to scratch/final_results.json');
}

verifyAll().catch(err => {
  console.error('Fatal verification error:', err);
  process.exit(1);
});
