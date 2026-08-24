import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import FourPillars from './components/FourPillars';
import BranchSpotlight from './components/BranchSpotlight';
import ProjectTabsCatalog from './components/ProjectTabsCatalog';
import YouTubeHub from './components/YouTubeHub';
import TrustSection from './components/TrustSection';
import Testimonials from './components/Testimonials';
import ContactFormServerless from './components/ContactFormServerless';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('en');

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F7F2] text-[#2D2D2D] selection:bg-[#4A5D4E] selection:text-white">
      
      {/* Header Navbar */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        <HeroSlider lang={lang} />
        <FourPillars lang={lang} />
        <BranchSpotlight lang={lang} />
        <ProjectTabsCatalog lang={lang} />
        <YouTubeHub lang={lang} />
        <TrustSection lang={lang} />
        <Testimonials lang={lang} />
        <ContactFormServerless lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/919851633333?text=Hi%20Siva%20Telugu%20Estates,%20I%20am%20visiting%20your%20website%20and%20want%20information%20on%20plots."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#10B981] text-white shadow-lg hover:scale-110 hover:bg-[#0D9668] transition-all flex items-center justify-center"
        title="Chat on WhatsApp (+91 98516 33333)"
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>

    </div>
  );
}
