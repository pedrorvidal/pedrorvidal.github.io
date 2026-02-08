import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const targets = [
  { name: 'ultherapy', url: 'https://ultherapy.com/' },
  { name: 'confidencetobeme', url: 'https://confidencetobeme.com/' },
  { name: 'merzaesthetics', url: 'https://merzaesthetics.com.br/' },
  { name: 'tintadequalidade', url: 'https://tintadequalidade.com.br/' },
  { name: 'abrafati', url: 'https://abrafati.com.br/' },
  { name: 'glp', url: 'https://glp.com.br/' },
  { name: 'cuidadosemlimites', url: 'https://cuidadosemlimites.com.br/' },
  { name: 'torrent', url: 'https://www.torrent.com.br/' },
  { name: 'medtronicdiabeteslatam', url: 'https://medtronicdiabeteslatam.com/' },
  { name: 'agenciaf2f', url: 'https://agenciaf2f.com/' },
];

const outDir = path.resolve('src/assets/images/cases');

const detectTechnologies = async (page, response) => {
  const html = await page.content();
  const scripts = await page.$$eval('script[src]', (els) => els.map((el) => el.src));
  const links = await page.$$eval('link[rel="stylesheet"]', (els) => els.map((el) => el.href));
  const metas = await page.$$eval('meta[name="generator"]', (els) =>
    els.map((el) => el.getAttribute('content') || '')
  );
  const headers = response ? response.headers() : {};
  const serverHeader = (headers.server || '').toLowerCase();
  const assetList = `${scripts.join(' ')} ${links.join(' ')} ${metas.join(' ')}`.toLowerCase();
  const combined = `${html}\n${assetList}\n${JSON.stringify(headers)}`;

  const tech = new Set();

  const add = (label, condition) => {
    if (condition) tech.add(label);
  };

  add('WordPress', /wp-content|wp-includes|wordpress/.test(assetList) || /content="wordpress/i.test(html));
  add('Drupal', /drupalsettings/.test(html.toLowerCase()) || /\/sites\/default\//.test(assetList));
  add('Joomla', /content="joomla!/i.test(html) || /\/media\/system\//.test(assetList));
  add('Shopify', /cdn\.shopify\.com|x-shopify/i.test(combined));
  add('Wix', /wixstatic\.com|wix\.com/.test(assetList));
  add('Squarespace', /static\.squarespace\.com/.test(assetList));
  add('Webflow', /webflow\.js|data-wf-domain|data-wf-page/.test(html.toLowerCase()));
  add('Next.js', /__next_data__/.test(html.toLowerCase()) || /\/_next\//.test(assetList));
  add('Nuxt.js', /__nuxt__/.test(html.toLowerCase()) || /\/_nuxt\//.test(assetList));
  add('Gatsby', /gatsby/i.test(assetList));
  add('React', /react-dom|react\.production\.min/.test(assetList));
  add('jQuery', /jquery/.test(assetList));
  add('Bootstrap', /bootstrap/.test(assetList));
  add('Tailwind CSS', /tailwind/.test(assetList));
  add('Google Analytics', /google-analytics|gtag|googletagmanager/.test(assetList));
  add('Cloudflare', /cloudflare/.test(serverHeader) || 'cf-ray' in headers);
  add('Nginx', /nginx/.test(serverHeader));
  add('Apache', /apache/.test(serverHeader));

  try {
    const runtime = await page.evaluate(() => ({
      next: !!window.__NEXT_DATA__,
      nuxt: !!window.__NUXT__,
      wp: !!window.wp,
      drupal: !!window.Drupal,
    }));

    add('Next.js', runtime.next);
    add('Nuxt.js', runtime.nuxt);
    add('WordPress', runtime.wp);
    add('Drupal', runtime.drupal);
  } catch (error) {
    // ignore runtime detection failures
  }

  return Array.from(tech);
};

const main = async () => {
  await fs.mkdir(outDir, { recursive: true });

  const executablePath = process.env.PLAYWRIGHT_CHROME_PATH || '/usr/bin/google-chrome';
  const browser = await chromium.launch({ executablePath });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1,
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });

  const results = [];

  for (const target of targets) {
    const page = await context.newPage();
    let response = null;

    try {
      response = await page.goto(target.url, {
        waitUntil: 'domcontentloaded',
        timeout: 90000,
      });

      await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});

      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(1500);

      const screenshotPath = path.join(outDir, `case-${target.name}.png`);
      await page.screenshot({ path: screenshotPath, type: 'png', fullPage: false });

      const tech = await detectTechnologies(page, response);

      results.push({
        name: target.name,
        url: target.url,
        screenshot: screenshotPath,
        tech,
      });

      console.log(`Captured ${target.url} -> ${screenshotPath}`);
      console.log(`Tech: ${tech.join(', ') || 'None detected'}`);
    } catch (error) {
      console.error(`Failed ${target.url}:`, error.message);
      results.push({ name: target.name, url: target.url, error: error.message, tech: [] });
    } finally {
      await page.close();
    }
  }

  await browser.close();

  await fs.writeFile('src/data/case-tech.json', JSON.stringify(results, null, 2));
};

main();
