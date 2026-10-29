const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const BUILD_DIR = path.join(ROOT, 'build');

const en = require('../src/i18n/locales/en.json');
const it = require('../src/i18n/locales/it.json');

const SITE_URL = (
  process.env.REACT_APP_SITE_URL ||
  process.env.SITE_URL ||
  'http://localhost:3000'
).replace(/\/+$/, '');

const DEFAULT_IMAGE = '/images/seo/og-default.jpg';

// All static routes and their SEO translation keys
const staticRoutes = [
  { path: '/', key: 'home' },
  { path: '/villas', key: 'villas' },
  { path: '/borgo', key: 'borgo' },
  { path: '/experiences', key: 'experiences' },
  { path: '/story', key: 'story' },
  { path: '/story/origins', key: 'origins' },
  { path: '/story/scarpa-winery', key: 'scarpaWinery' },
  { path: '/story/people', key: 'people' },
  { path: '/story/press', key: 'press' },
  { path: '/stays', key: 'stays' },
  { path: '/discover', key: 'discover' },
  { path: '/discover/region', key: 'region' },
  { path: '/discover/journal', key: 'journal' },
];

// Dynamic route IDs
const villaIds = ['tettineive', 'bogliona', 'bricchi', 'tettimorra'];

const articleIds = [
  'viticultural-identity',
  'la-bogliona-125-years',
  'scarpa-villas-part-2',
  'davide-champion-scarpa-journey',
];

const dynamicRoutes = [
  ...villaIds.map((id) => ({
    path: `/villas/${id}`,
    key: `villa.${id}`,
  })),

  ...articleIds.map((id) => ({
    path: `/discover/journal/${id}`,
    key: `journalArticle.${id}`,
  })),
];

const routes = [...staticRoutes, ...dynamicRoutes];

// Escape values before inserting into HTML
const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const getSeo = (translations, key) => {
  const seo = key.split('.').reduce((value, part) => value?.[part], translations.seo);

  if (
    typeof seo?.title !== 'string' ||
    typeof seo?.description !== 'string' ||
    !seo.title.trim() ||
    !seo.description.trim()
  ) {
    throw new Error(`Missing SEO translations: seo.${key}`);
  }

  return seo;
};

const buildMeta = ({ language, route, title, description }) => {
  const englishPath = route;
  const italianPath = route === '/' ? '/it' : `/it${route}`;

  const currentPath = language === 'it' ? italianPath : englishPath;

  const canonicalUrl = `${SITE_URL}${currentPath}`;
  const englishUrl = `${SITE_URL}${englishPath}`;
  const italianUrl = `${SITE_URL}${italianPath}`;

  const imageUrl = new URL(DEFAULT_IMAGE, `${SITE_URL}/`).href;

  const locale = language === 'it' ? 'it_IT' : 'en_US';
  const alternateLocale = language === 'it' ? 'en_US' : 'it_IT';

  return `
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="robots" content="index, follow" />

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Scarpa Villas" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
    <meta property="og:image" content="${escapeHtml(imageUrl)}" />
    <meta property="og:locale" content="${locale}" />
    <meta property="og:locale:alternate" content="${alternateLocale}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${escapeHtml(imageUrl)}" />

    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />

    <link rel="alternate" hreflang="en" href="${escapeHtml(englishUrl)}" />
    <link rel="alternate" hreflang="it" href="${escapeHtml(italianUrl)}" />
    <link rel="alternate" hreflang="x-default" href="${escapeHtml(englishUrl)}" />
  `;
};

const generateHtml = (template, route, language, seo) => {
  const meta = buildMeta({
    language,
    route,
    title: seo.title,
    description: seo.description,
  });

  return template
    .replace(/<html([^>]*)>/i, `<html lang="${language}">`)
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(seo.title)}</title>`)
    .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, '')
    .replace('</head>', `${meta}\n</head>`);
};

const writePage = (route, language, html) => {
  const localizedPath = language === 'it' ? (route === '/' ? '/it' : `/it${route}`) : route;

  const relativePath = localizedPath.replace(/^\/+/, '');

  const outputDir = path.join(BUILD_DIR, relativePath);

  fs.mkdirSync(outputDir, { recursive: true });

  const outputFile = path.join(outputDir, 'index.html');

  fs.writeFileSync(outputFile, html, 'utf8');

  console.log(`Generated: /${relativePath || ''}`);
};

const generate = () => {
  const templatePath = path.join(BUILD_DIR, 'index.html');

  if (!fs.existsSync(templatePath)) {
    throw new Error('Build not found. Run npm run build first.');
  }

  const template = fs.readFileSync(templatePath, 'utf8');

  let count = 0;

  for (const route of routes) {
    for (const language of ['en', 'it']) {
      const translations = language === 'it' ? it : en;

      const seo = getSeo(translations, route.key);

      const html = generateHtml(template, route.path, language, seo);

      writePage(route.path, language, html);

      count++;
    }
  }

  // Generate localized 404 HTML pages
  for (const language of ['en', 'it']) {
    const translations = language === 'it' ? it : en;
    const seo = getSeo(translations, 'notFound');

    const notFoundHtml = template
      .replace(/<html lang="[^"]*">/i, `<html lang="${language}">`)
      .replace(/<title>[\s\S]*?<\/title>/i, `<title>${seo.title}</title>`)
      .replace(
        /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
        `<meta name="description" content="${seo.description}" />`,
      )
      .replace('</head>', '    <meta name="robots" content="noindex, nofollow" />\n</head>');

    const outputPath =
      language === 'it' ? path.join(BUILD_DIR, 'it', '404.html') : path.join(BUILD_DIR, '404.html');

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });

    fs.writeFileSync(outputPath, notFoundHtml, 'utf8');

    console.log(`Generated: ${language === 'it' ? '/it/404.html' : '/404.html'}`);
  }

  console.log(`\nSEO generation complete: ${count} pages.`);
};

generate();
