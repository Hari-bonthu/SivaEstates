import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import FourPillars from './components/FourPillars';
import BranchSpotlight from './components/BranchSpotlight';
import ProjectTabsCatalog from './components/ProjectTabsCatalog';
import RealSiteGallery from './components/RealSiteGallery';
import YouTubeHub from './components/YouTubeHub';
import TrustSection from './components/TrustSection';
import Testimonials from './components/Testimonials';
import ContactFormServerless from './components/ContactFormServerless';
import Footer from './components/Footer';
import { MessageCircle, Phone, MapPin, Calendar } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('en');

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F7F2] text-[#2D2D2D] selection:bg-[#4A5D4E] selection:text-white font-sans">
      
      {/* Header Navbar */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Main Page Sections */}
      <main className="flex-grow pb-16 md:pb-0">
        <HeroSlider lang={lang} />
        <FourPillars lang={lang} />
        <ProjectTabsCatalog lang={lang} />
        <RealSiteGallery lang={lang} />
        <BranchSpotlight lang={lang} />
        <YouTubeHub lang={lang} />
        <TrustSection lang={lang} />
        <Testimonials lang={lang} />
        <ContactFormServerless lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Floating Desktop WhatsApp Action Button */}
      <a
        href="https://wa.me/919851633333?text=Hi%20Siva%20Telugu%20Estates,%20I%20am%20visiting%20your%20website%20and%20want%20information%20on%20plots."
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#10B981] text-white shadow-2xl hover:scale-110 hover:bg-[#0D9668] transition-all items-center justify-center"
        title="Chat on WhatsApp (+91 98516 33333)"
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>

      {/* Mobile Sticky Quick Action Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#E5E0D5] px-3 py-2 flex items-center justify-around shadow-2xl font-mono text-[11px]">
        <a
          href="tel:+919851633333"
          className="flex flex-col items-center text-[#1B1C1C] hover:text-[#4A5D4E] py-1 px-2"
        >
          <Phone className="w-4 h-4 text-[#4A5D4E] mb-0.5" />
          <span>Call Director</span>
        </a>

        <a
          href="https://wa.me/919851633333?text=Hi%20Siva%20Telugu%20Estates,%20I%20am%20interested%20in%20plots%20in%20Rajahmundry%20/%20Kakinada."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-[#10B981] hover:text-[#0D9668] py-1 px-2 font-bold"
        >
          <MessageCircle className="w-4 h-4 text-[#10B981] mb-0.5" />
          <span>WhatsApp</span>
        </a>

        <a
          href="#ventures"
          className="flex flex-col items-center text-[#1B1C1C] hover:text-[#4A5D4E] py-1 px-2"
        >
          <MapPin className="w-4 h-4 text-[#4A5D4E] mb-0.5" />
          <span>Ventures</span>
        </a>

        <a
          href="#contact"
          className="flex flex-col items-center bg-[#4A5D4E] text-white py-1.5 px-3 rounded-xl font-bold shadow-sm"
        >
          <Calendar className="w-3.5 h-3.5 mb-0.5" />
          <span>Book Visit</span>
        </a>
      </div>

    </div>
  );
}
