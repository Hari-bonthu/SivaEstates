import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SivaBot from './components/SivaBot';
import HomePage from './pages/HomePage';
import VenturePage from './pages/VenturePage';

export default function App() {
  const [lang, setLang] = useState('en');

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-[#F9F7F2] text-[#2D2D2D] selection:bg-[#4A5D4E] selection:text-white font-sans">
        
        <Navbar lang={lang} setLang={setLang} />

        <Routes>
          <Route path="/" element={<HomePage lang={lang} setLang={setLang} />} />
          <Route path="/venture/:id" element={<VenturePage />} />
        </Routes>

        <Footer lang={lang} />

        {/* SivaBot – replaces WhatsApp floating button */}
        <SivaBot />

      </div>
    </HashRouter>
  );
}
