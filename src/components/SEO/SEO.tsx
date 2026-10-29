import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  noIndex?: boolean;
}

const SITE_URL = (process.env.REACT_APP_SITE_URL || window.location.origin).replace(/\/$/, '');

const DEFAULT_IMAGE = '/images/seo/og-default.jpg';

const setMetaTag = (attribute: 'name' | 'property', key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
};

const setLinkTag = (rel: string, href: string, hreflang?: string) => {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`;

  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement('link');
    element.rel = rel;

    if (hreflang) {
      element.hreflang = hreflang;
    }

    document.head.appendChild(element);
  }

  element.href = href;
};

export function SEO({ title, description, image = DEFAULT_IMAGE, noIndex = false }: SEOProps) {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();

  const language = pathname === '/it' || pathname.startsWith('/it/') ? 'it' : 'en';

  useEffect(() => {
    const normalizedPath = pathname.replace(/\/+$/, '') || '/';

    const englishPath = normalizedPath.replace(/^\/it(?=\/|$)/, '') || '/';

    const italianPath = englishPath === '/' ? '/it' : `/it${englishPath}`;

    const currentPath = language === 'it' ? italianPath : englishPath;

    const canonicalUrl = `${SITE_URL}${currentPath}`;

    const englishUrl = `${SITE_URL}${englishPath}`;
    const italianUrl = `${SITE_URL}${italianPath}`;

    const imageUrl = new URL(image, `${SITE_URL}/`).href;

    // Basic SEO
    document.title = title;
    document.documentElement.lang = language;

    setMetaTag('name', 'description', description);

    setMetaTag('name', 'robots', noIndex ? 'noindex, follow' : 'index, follow');

    // Open Graph
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', 'Scarpa Villas');
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', imageUrl);
    setMetaTag('property', 'og:locale', language === 'it' ? 'it_IT' : 'en_US');
    setMetaTag('property', 'og:locale:alternate', language === 'it' ? 'en_US' : 'it_IT');

    // Twitter / X
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', imageUrl);

    if (noIndex) {
      document.head.querySelector('link[rel="canonical"]')?.remove();
      document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((link) => {
        link.remove();
      });
    } else {
      // Canonical
      setLinkTag('canonical', canonicalUrl);

      // Hreflang
      setLinkTag('alternate', englishUrl, 'en');
      setLinkTag('alternate', italianUrl, 'it');
      setLinkTag('alternate', englishUrl, 'x-default');
    }
  }, [title, description, image, pathname, language, i18n.language, noIndex]);

  return null;
}
