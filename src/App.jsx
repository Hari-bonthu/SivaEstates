import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import OfficesPage from './pages/OfficesPage';
import ContactPage from './pages/ContactPage';
import VenturePage from './pages/VenturePage';

// SivaBot is a fixed-position floating assistant, safe to lazy load without layout shift
const SivaBot = lazy(() => import('./components/SivaBot'));

function ScrollToHashElement() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}

function PageFallback() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center space-y-3 py-16">
      <div className="w-8 h-8 border-2 border-[#E8E2DA] border-t-[#C8312A] rounded-full animate-spin"></div>
      <p className="text-[11px] text-[#6B6860] font-sans font-medium tracking-wider uppercase">
        Loading...
      </p>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState('en');

  return (
    <BrowserRouter>
      <ScrollToHashElement />
      <div className="min-h-screen flex flex-col bg-[#F5F0EB] text-[#1A1A1A] selection:bg-[#C8312A] selection:text-white font-sans">
        
        {/* Universal Navbar with Language Toggle and Direct Page Links */}
        <Navbar lang={lang} setLang={setLang} />

        {/* Suspense boundary for lazy-loaded pages */}
        <main className="flex-1">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              {/* Main Home Route */}
              <Route path="/" element={<HomePage lang={lang} setLang={setLang} />} />

              {/* Dedicated Subpages */}
              <Route path="/properties" element={<PropertiesPage lang={lang} />} />
              <Route path="/projects" element={<PropertiesPage lang={lang} />} />
              <Route path="/about" element={<AboutPage lang={lang} />} />
              <Route path="/gallery" element={<GalleryPage lang={lang} />} />
              <Route path="/offices" element={<OfficesPage lang={lang} />} />
              <Route path="/contact" element={<ContactPage lang={lang} />} />

              {/* Individual Venture Detail Route */}
              <Route path="/venture/:id" element={<VenturePage lang={lang} />} />

              {/* Catch-all fallback */}
              <Route path="*" element={<HomePage lang={lang} setLang={setLang} />} />
            </Routes>
          </Suspense>
        </main>

        {/* Universal Footer */}
        <Footer lang={lang} />

        {/* SivaBot – Interactive FAQ and Assistant (lazy loaded) */}
        <Suspense fallback={null}>
          <SivaBot lang={lang} />
        </Suspense>

      </div>
    </BrowserRouter>
  );
}

