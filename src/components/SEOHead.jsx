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
  ogImage = 'https://sivateluguestates.com/android-chrome-512x512.png',
  schemaData = null,
}) {
  const location = useLocation();
  const fullCanonical =
    canonicalUrl || `https://sivateluguestates.com${location.pathname}`;

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
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    // 4. Canonical link
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', fullCanonical);

    // 5. Dynamic JSON-LD schema injection / cleanup
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
  }, [title, description, fullCanonical, ogImage, schemaData]);

  return null;
}
