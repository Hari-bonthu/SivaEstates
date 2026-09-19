import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SEOHead — Dynamically updates document head metadata on every route change.
 * Works without react-helmet-async by directly mutating the DOM.
 * Used by all page components to set unique title, meta description,
 * Open Graph tags, canonical URL, and optional JSON-LD schema.
 */
export default function SEOHead({
  title,
  description,
  canonicalUrl,
  ogImage = 'https://www.sivateluguestates.com/images/siva-telugu-estates-og-banner-1200x630.jpg',
  schemaData = null,
  geoRegion = 'IN-AP',
  geoPlaceName = 'Rajahmundry',
  geoPosition = '17.0005;81.8040',
}) {
  const location = useLocation();
  const normalizedPath = location.pathname === '/' ? '/' : `${location.pathname.replace(/\/$/, '')}/`;
  const fullCanonical =
    canonicalUrl || `https://www.sivateluguestates.com${normalizedPath}`;

  useEffect(() => {
    // 1. Page title
    if (title) document.title = title;

    // 2. Helper: set or create a meta tag
    const setMeta = (attr, key, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 3. Standard + OG + Twitter meta
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', fullCanonical);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');
    setMeta('property', 'og:image:alt', title || 'Siva Telugu Estates Real Estate');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    // 4. Geo Meta Tags
    setMeta('name', 'geo.region', geoRegion);
    setMeta('name', 'geo.placename', geoPlaceName);
    setMeta('name', 'geo.position', geoPosition);
    setMeta('name', 'ICBM', geoPosition ? geoPosition.replace(';', ', ') : '17.0005, 81.8040');

    // 5. Canonical link
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', fullCanonical);

    // 6. Dynamic JSON-LD schema injection / cleanup
    let dynamicScript = document.getElementById('dynamic-page-schema');
    if (schemaData) {
      if (!dynamicScript) {
        dynamicScript = document.createElement('script');
        dynamicScript.id = 'dynamic-page-schema';
        dynamicScript.type = 'application/ld+json';
        document.head.appendChild(dynamicScript);
      }
      dynamicScript.textContent = JSON.stringify(schemaData);
    } else if (dynamicScript) {
      dynamicScript.remove();
    }
  }, [title, description, fullCanonical, ogImage, schemaData, geoRegion, geoPlaceName, geoPosition]);

  return null;
}
