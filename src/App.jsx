import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SivaBot from './components/SivaBot';
import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import OfficesPage from './pages/OfficesPage';
import ContactPage from './pages/ContactPage';
import VenturePage from './pages/VenturePage';

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

export default function App() {
  const [lang, setLang] = useState('en');

  return (
    <HashRouter>
      <ScrollToHashElement />
      <div className="min-h-screen flex flex-col bg-[#F9F7F2] text-[#2D2D2D] selection:bg-[#4A5D4E] selection:text-white font-sans">
        
        <Navbar lang={lang} setLang={setLang} />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage lang={lang} setLang={setLang} />} />
            <Route path="/properties" element={<PropertiesPage lang={lang} />} />
            <Route path="/projects" element={<PropertiesPage lang={lang} />} />
            <Route path="/about" element={<AboutPage lang={lang} />} />
            <Route path="/gallery" element={<GalleryPage lang={lang} />} />
            <Route path="/offices" element={<OfficesPage lang={lang} />} />
            <Route path="/branches" element={<OfficesPage lang={lang} />} />
            <Route path="/contact" element={<ContactPage lang={lang} />} />
            <Route path="/venture/:id" element={<VenturePage />} />
            {/* Fallback */}
            <Route path="*" element={<HomePage lang={lang} setLang={setLang} />} />
          </Routes>
        </main>

        <Footer lang={lang} />

        {/* SivaBot Chat Assistant */}
        <SivaBot />

      </div>
    </HashRouter>
  );
}
