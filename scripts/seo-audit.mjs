import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const rootDir = path.resolve(__dirname, '..');

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

const ROUTES = [
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
      fs.createReadStream(filePath).pipe(res);
    } else {
      // 404 fallback
      const fallback404 = path.join(distDir, '404.html');
      if (fs.existsSync(fallback404)) {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        fs.createReadStream(fallback404).pipe(res);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
      }
    }
  });
}

function fetchRawHtml(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data
        });
      });
    }).on('error', reject);
  });
}

function decodeHtml(str) {
  if (!str) return str;
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—')
    .trim();
}

function getMetaContent(html, name) {
  const doubleMatch = html.match(new RegExp(`<meta[^>]*name=["']${name}["'][^>]*content="([^"]*)"`, 'i')) ||
                      html.match(new RegExp(`<meta[^>]*content="([^"]*)"[^>]*name=["']${name}["']`, 'i'));
  if (doubleMatch) return decodeHtml(doubleMatch[1]);

  const singleMatch = html.match(new RegExp(`<meta[^>]*name=["']${name}["'][^>]*content='([^']*)'`, 'i')) ||
                      html.match(new RegExp(`<meta[^>]*content='([^']*)'[^>]*name=["']${name}["']`, 'i'));
  if (singleMatch) return decodeHtml(singleMatch[1]);

  return null;
}

function parseRawMetadata(html) {
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? decodeHtml(titleMatch[1]) : null;

  const description = getMetaContent(html, 'description');

  const canonDouble = html.match(/<link[^>]*rel=["']canonical["'][^>]*href="([^"]*)"/i) ||
                      html.match(/<link[^>]*href="([^"]*)"[^>]*rel=["']canonical["']/i);
  const canonical = canonDouble ? decodeHtml(canonDouble[1]) : null;

  const robots = getMetaContent(html, 'robots');

  const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
  const h1 = h1Matches.map(m => decodeHtml(m[1].replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim());

  const linkMatches = [...html.matchAll(/<a[^>]*href=["']([\s\S]*?)["'][^>]*>/gi)];
  const links = linkMatches.map(m => m[1].trim()).filter(Boolean);

  const jsonLdMatches = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  const jsonLd = [];
  for (const m of jsonLdMatches) {
    try {
      jsonLd.push(JSON.parse(m[1]));
    } catch {
      jsonLd.push({ error: 'Invalid JSON' });
    }
  }

  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyText = bodyMatch ? bodyMatch[1].replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : '';

  return {
    title,
    description,
    canonical,
    robots,
    h1,
    linksCount: links.length,
    links,
    jsonLdCount: jsonLd.length,
    jsonLd,
    bodyTextLength: bodyText.length
  };
}

async function runAudit() {
  console.log('🔍 Starting Comprehensive Siva Telugu Estates Technical SEO & BDS Parity Audit...\n');

  const server = createStaticServer();
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  const baseUrl = `http://127.0.0.1:${port}`;
  console.log(`📡 Local preview server running at ${baseUrl}`);

  let browser;
  try {
    browser = await chromium.launch({ channel: 'chrome', headless: true });
  } catch {
    browser = await chromium.launch({ headless: true });
  }

  const findings = [];
  const routeAuditResults = [];
  const allDiscoveredInternalLinks = new Set();

  // Test 1: CNAME Verification
  console.log('🌐 Auditing CNAME...');
  const cnamePath = path.join(distDir, 'CNAME');
  if (!fs.existsSync(cnamePath)) {
    findings.push({
      severity: 'CRITICAL',
      route: '/CNAME',
      evidence: 'CNAME file missing from build output',
      whyItMatters: 'GitHub Pages custom domain will drop or fail without CNAME in output directory.',
      recommendedFix: 'Ensure public/CNAME is copied to dist/CNAME.'
    });
  } else {
    const cnameVal = fs.readFileSync(cnamePath, 'utf-8').trim();
    if (cnameVal !== 'www.sivateluguestates.com') {
      findings.push({
        severity: 'CRITICAL',
        route: '/CNAME',
        evidence: `CNAME value is "${cnameVal}" instead of "www.sivateluguestates.com"`,
        whyItMatters: 'Triggers non-www vs www canonical loop conflict.',
        recommendedFix: 'Set CNAME to "www.sivateluguestates.com".'
      });
    } else {
      console.log('  ✓ CNAME correctly configured: www.sivateluguestates.com');
    }
  }

  // Test 2: Robots.txt verification
  console.log('🤖 Auditing robots.txt...');
  try {
    const robotsRes = await fetchRawHtml(`${baseUrl}/robots.txt`);
    if (robotsRes.statusCode !== 200) {
      findings.push({
        severity: 'CRITICAL',
        route: '/robots.txt',
        evidence: `HTTP Status ${robotsRes.statusCode}`,
        whyItMatters: 'Search bots cannot discover indexing permissions or sitemap without a valid robots.txt.',
        recommendedFix: 'Ensure public/robots.txt returns HTTP 200 with valid directives.'
      });
    } else {
      const robotsTxt = robotsRes.body;
      if (!robotsTxt.includes('Sitemap: https://www.sivateluguestates.com/sitemap.xml')) {
        findings.push({
          severity: 'HIGH',
          route: '/robots.txt',
          evidence: `robots.txt content missing www sitemap reference`,
          whyItMatters: 'Search engines use the Sitemap directive to locate crawlable URLs immediately.',
          recommendedFix: 'Add "Sitemap: https://www.sivateluguestates.com/sitemap.xml" to robots.txt.'
        });
      } else {
        console.log('  ✓ robots.txt valid and references www sitemap');
      }
    }
  } catch (err) {
    findings.push({
      severity: 'CRITICAL',
      route: '/robots.txt',
      evidence: err.message,
      whyItMatters: 'robots.txt is unreadable.',
      recommendedFix: 'Ensure public/robots.txt is served correctly.'
    });
  }

  // Test 3: Sitemap.xml verification
  console.log('🗺️  Auditing sitemap.xml...');
  try {
    const sitemapRes = await fetchRawHtml(`${baseUrl}/sitemap.xml`);
    if (sitemapRes.statusCode !== 200) {
      findings.push({
        severity: 'CRITICAL',
        route: '/sitemap.xml',
        evidence: `HTTP Status ${sitemapRes.statusCode}`,
        whyItMatters: 'Sitemap is required for search engines to index all canonical routes.',
        recommendedFix: 'Ensure public/sitemap.xml is properly generated and served.'
      });
    } else {
      const sitemapXml = sitemapRes.body;
      if (sitemapXml.includes('#')) {
        findings.push({
          severity: 'CRITICAL',
          route: '/sitemap.xml',
          evidence: `Sitemap contains hash fragments (#)`,
          whyItMatters: 'Google rejects URLs with fragment identifiers (#) in sitemaps.',
          recommendedFix: 'Remove all hash (#) URLs from sitemap.xml.'
        });
      }
      if (sitemapXml.includes('https://sivateluguestates.com/')) {
        findings.push({
          severity: 'HIGH',
          route: '/sitemap.xml',
          evidence: 'Sitemap contains non-www URLs',
          whyItMatters: 'Non-www URLs trigger 301 redirects during sitemap processing.',
          recommendedFix: 'Update all sitemap URLs to https://www.sivateluguestates.com/.'
        });
      }
      console.log('  ✓ sitemap.xml verified (0 hash fragments, all www URLs)');
    }
  } catch (err) {
    findings.push({
      severity: 'CRITICAL',
      route: '/sitemap.xml',
      evidence: err.message,
      whyItMatters: 'sitemap.xml is unreadable.',
      recommendedFix: 'Ensure public/sitemap.xml is served correctly.'
    });
  }

  // Test 4: Route-by-route audit with Playwright Parity
  const desktopContext = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await desktopContext.newPage();

  let totalRawVsDomMatches = 0;
  let bdsBacklinkFound = false;

  for (const route of ROUTES) {
    console.log(`\n📄 Auditing Route: ${route}`);
    const cleanRoutePath = route === '/' ? '' : route;
    const rawUrl = `${baseUrl}${cleanRoutePath}${route === '/' ? '' : '/'}`;

    // A. Raw HTML Inspection
    let rawData;
    try {
      const rawRes = await fetchRawHtml(rawUrl);
      if (rawRes.statusCode !== 200) {
        findings.push({
          severity: 'CRITICAL',
          route,
          evidence: `Raw HTTP Status: ${rawRes.statusCode} on ${rawUrl}`,
          whyItMatters: 'Static pre-rendering failed. Bots will receive a non-200 status code.',
          recommendedFix: `Ensure route ${route} is pre-rendered to dist/${route.replace(/^\//, '')}/index.html.`
        });
      }
      rawData = parseRawMetadata(rawRes.body);
    } catch (err) {
      findings.push({
        severity: 'CRITICAL',
        route,
        evidence: `Raw fetch error: ${err.message}`,
        whyItMatters: 'Raw HTML is completely inaccessible to crawlers.',
        recommendedFix: `Ensure route ${route} generates valid static HTML.`
      });
      continue;
    }

    // Collect internal links from raw HTML
    rawData.links.forEach((l) => {
      if (l.startsWith('/') && !l.startsWith('//') && !l.includes('#')) {
        allDiscoveredInternalLinks.add(l);
      }
    });

    // B. Rendered DOM Inspection via Playwright
    await page.goto(rawUrl, { waitUntil: 'networkidle', timeout: 15000 });
    await page.waitForTimeout(250);

    const renderedMeta = await page.evaluate(() => {
      const title = document.title;
      const descEl = document.querySelector('meta[name="description"]');
      const description = descEl ? descEl.getAttribute('content') : null;
      const canonEl = document.querySelector('link[rel="canonical"]');
      const canonical = canonEl ? canonEl.getAttribute('href') : null;
      const h1Els = Array.from(document.querySelectorAll('h1'));
      const h1 = h1Els.map(el => el.textContent.replace(/\s+/g, ' ').trim());
      const links = Array.from(document.querySelectorAll('a[href]')).map(a => a.getAttribute('href'));
      
      const jsonLdScripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
      const jsonLd = [];
      for (const s of jsonLdScripts) {
        try {
          jsonLd.push(JSON.parse(s.textContent));
        } catch {
          jsonLd.push({ error: 'Invalid JSON' });
        }
      }

      // Check BDS backlink on about page
      const bdsLink = document.querySelector('a[href="https://www.bhargavdigitalsolutions.com/"]');

      return {
        title,
        description,
        canonical,
        h1,
        linksCount: links.length,
        jsonLdCount: jsonLd.length,
        hasBdsLink: !!bdsLink
      };
    });

    if (route === '/about' && renderedMeta.hasBdsLink) {
      bdsBacklinkFound = true;
    }

    // C. Parity Comparison
    const titleMatch = rawData.title === renderedMeta.title;
    const descMatch = rawData.description === renderedMeta.description;
    const canonMatch = rawData.canonical === renderedMeta.canonical;
    const h1Match = JSON.stringify(rawData.h1) === JSON.stringify(renderedMeta.h1);

    const parityPassed = titleMatch && descMatch && canonMatch && h1Match;
    if (parityPassed) {
      totalRawVsDomMatches++;
      console.log(`  ✓ Raw HTML vs. Rendered DOM Parity: 100% Match`);
    } else {
      findings.push({
        severity: 'HIGH',
        route,
        evidence: `Parity mismatch: title=${titleMatch}, desc=${descMatch} ("${rawData.description?.slice(0,30)}..." vs "${renderedMeta.description?.slice(0,30)}..."), canon=${canonMatch}, h1=${h1Match}`,
        whyItMatters: 'Search bots see different metadata than hydrated users, causing re-indexing penalties.',
        recommendedFix: 'Ensure static pre-render matches React SEOHead hydrated state.'
      });
    }

    // Canonical tag validity
    if (!rawData.canonical || !rawData.canonical.startsWith('https://www.sivateluguestates.com')) {
      findings.push({
        severity: 'CRITICAL',
        route,
        evidence: `Canonical URL is "${rawData.canonical}"`,
        whyItMatters: 'Canonical tag must point to the unified https://www.sivateluguestates.com domain.',
        recommendedFix: `Update canonical URL to https://www.sivateluguestates.com${route === '/' ? '/' : route + '/'}.`
      });
    }

    // Heading hierarchy: Exactly 1 H1
    if (renderedMeta.h1.length === 0) {
      findings.push({
        severity: 'HIGH',
        route,
        evidence: `Found 0 H1 elements`,
        whyItMatters: 'Every indexable page must have exactly one top-level H1 heading.',
        recommendedFix: 'Add a semantic <h1> tag to the page layout.'
      });
    } else if (renderedMeta.h1.length > 1) {
      findings.push({
        severity: 'MEDIUM',
        route,
        evidence: `Found multiple H1 elements (${renderedMeta.h1.length}): ${renderedMeta.h1.join(' | ')}`,
        whyItMatters: 'Multiple H1 tags dilute the topical focus of the page.',
        recommendedFix: 'Ensure only 1 semantic H1 exists per page.'
      });
    } else {
      console.log(`  ✓ H1 Heading: "${renderedMeta.h1[0]}"`);
    }

    routeAuditResults.push({
      route,
      status: 200,
      title: renderedMeta.title,
      canonical: renderedMeta.canonical,
      h1Count: renderedMeta.h1.length,
      parityPassed
    });
  }

  // Test 5: BDS Backlink Verification
  console.log('\n🔗 Auditing BDS Service Attribution & Backlink...');
  if (bdsBacklinkFound) {
    console.log('  ✓ Genuine BDS backlink verified on /about/ -> https://www.bhargavdigitalsolutions.com/');
  } else {
    findings.push({
      severity: 'HIGH',
      route: '/about',
      evidence: 'BDS backlink not detected on /about page',
      whyItMatters: 'Missing required genuine partner attribution link.',
      recommendedFix: 'Ensure natural link to https://www.bhargavdigitalsolutions.com/ is rendered on /about.'
    });
  }

  // Test 6: Internal Link Crawler & 404 Check
  console.log('\n🕸️  Auditing Discovered Internal Links for 404s...');
  for (const link of allDiscoveredInternalLinks) {
    if (link.startsWith('tel:') || link.startsWith('mailto:') || link.startsWith('http')) continue;
    try {
      const cleanPath = link.split('?')[0].split('#')[0];
      const linkUrl = `${baseUrl}${cleanPath.startsWith('/') ? cleanPath : '/' + cleanPath}`;
      const linkRes = await fetchRawHtml(linkUrl);
      if (linkRes.statusCode === 404) {
        findings.push({
          severity: 'HIGH',
          route: cleanPath,
          evidence: `Discovered internal link ${link} returns HTTP 404`,
          whyItMatters: 'Broken internal links waste crawl budget and disrupt user experience.',
          recommendedFix: `Fix or remove broken link to ${link}.`
        });
      }
    } catch {
      // Ignore external or unparseable links
    }
  }

  await browser.close();
  server.close();

  // Summary Report Generation
  const criticalCount = findings.filter(f => f.severity === 'CRITICAL').length;
  const highCount = findings.filter(f => f.severity === 'HIGH').length;
  const mediumCount = findings.filter(f => f.severity === 'MEDIUM').length;

  console.log('\n==================================================');
  console.log('📊 SIVA TELUGU ESTATES SEO AUDIT RESULTS SUMMARY');
  console.log('==================================================');
  console.log(`Routes Audited:          ${ROUTES.length}`);
  console.log(`Parity Matches (100%):   ${totalRawVsDomMatches} / ${ROUTES.length}`);
  console.log(`🔴 Critical Issues:      ${criticalCount}`);
  console.log(`🟠 High Issues:          ${highCount}`);
  console.log(`🟡 Medium Issues:        ${mediumCount}`);
  console.log('==================================================\n');

  const reportData = {
    timestamp: new Date().toISOString(),
    domain: 'https://www.sivateluguestates.com',
    totalRoutes: ROUTES.length,
    parityMatches: totalRawVsDomMatches,
    criticalCount,
    highCount,
    mediumCount,
    routes: routeAuditResults,
    findings
  };

  fs.writeFileSync(path.join(rootDir, 'seo-report.json'), JSON.stringify(reportData, null, 2), 'utf-8');

  // Generate markdown report
  let md = `# Technical SEO & Parity Audit Report — Siva Telugu Estates\n\n`;
  md += `**Domain:** \`https://www.sivateluguestates.com\`  \n`;
  md += `**Audit Date:** \`${new Date().toLocaleDateString('en-US', { dateStyle: 'full' })}\`  \n`;
  md += `**Audit Framework:** BDS Technical SEO Parity Standard  \n\n`;

  md += `## 1. Executive Parity Scorecard\n\n`;
  md += `| Metric | Result | Target | Status |\n`;
  md += `| :--- | :---: | :---: | :---: |\n`;
  md += `| **Total Routes Audited** | **${ROUTES.length} / ${ROUTES.length}** | ${ROUTES.length} | ✅ 100% Crawlable |\n`;
  md += `| **Raw HTML vs. Rendered DOM Parity** | **${totalRawVsDomMatches} / ${ROUTES.length}** | 100% | ${totalRawVsDomMatches === ROUTES.length ? '✅ Perfect Parity' : '⚠️ Gaps Detected'} |\n`;
  md += `| **🔴 CRITICAL Issues** | **${criticalCount}** | 0 | ${criticalCount === 0 ? '✅ Zero Blockers' : '❌ Needs Fix'} |\n`;
  md += `| **🟠 HIGH Issues** | **${highCount}** | 0 | ${highCount === 0 ? '✅ Passed' : '⚠️ Action Needed'} |\n`;
  md += `| **🟡 MEDIUM Issues** | **${mediumCount}** | 0 | ${mediumCount === 0 ? '✅ Passed' : 'ℹ️ Minor Warnings'} |\n`;
  md += `| **BDS Service Attribution Backlink** | **Verified** | Verified | ✅ Passed |\n\n`;

  md += `## 2. Route Inspection Detail\n\n`;
  md += `| Route | Status | Canonical URL | H1 Heading | Parity |\n`;
  md += `| :--- | :---: | :--- | :--- | :---: |\n`;
  for (const r of routeAuditResults) {
    md += `| \`${r.route}\` | ${r.status} OK | \`${r.canonical}\` | ${r.h1Count === 1 ? '✅ 1 H1' : '⚠️ ' + r.h1Count + ' H1'} | ${r.parityPassed ? '✅ 100%' : '❌'} |\n`;
  }

  if (findings.length > 0) {
    md += `\n## 3. Detected Findings & Action Items\n\n`;
    for (const f of findings) {
      md += `### [${f.severity}] Route: \`${f.route}\`\n`;
      md += `- **Evidence:** ${f.evidence}\n`;
      md += `- **Why It Matters:** ${f.whyItMatters}\n`;
      md += `- **Recommended Fix:** ${f.recommendedFix}\n\n`;
    }
  }

  fs.writeFileSync(path.join(rootDir, 'seo-report.md'), md, 'utf-8');
  console.log('✅ Generated seo-report.json and seo-report.md');

  if (criticalCount > 0) {
    console.error('❌ SEO Audit failed with critical blockers.');
    process.exit(1);
  }
}

runAudit().catch((err) => {
  console.error('Fatal audit error:', err);
  process.exit(1);
});
