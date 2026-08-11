import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FourPillars from './components/FourPillars';
import BranchSpotlight from './components/BranchSpotlight';
import PropertyCatalog from './components/PropertyCatalog';
import PlotVisualizer from './components/PlotVisualizer';
import YouTubeHub from './components/YouTubeHub';
import EmiCalculator from './components/EmiCalculator';
import TrustSection from './components/TrustSection';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('en'); // 'en' or 'te'

  return (
    <div className="min-h-screen flex flex-col bg-navy-950 text-slate-100 selection:bg-gold-500 selection:text-navy-950">
      
      {/* Navbar Header */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        <Hero lang={lang} />
        <FourPillars lang={lang} />
        <BranchSpotlight lang={lang} />
        <PropertyCatalog lang={lang} />
        <PlotVisualizer lang={lang} />
        <YouTubeHub lang={lang} />
        <EmiCalculator lang={lang} />
        <TrustSection lang={lang} />
        <Testimonials lang={lang} />
        <ContactForm lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/919851633333?text=Hi%20Siva%20Telugu%20Estates,%20I%20am%20visiting%20your%20website%20and%20want%20information%20on%20plots."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-emerald-500 text-white shadow-2xl hover:scale-110 hover:bg-emerald-400 transition-all flex items-center justify-center gold-glow"
        title="Chat on WhatsApp (+91 98516 33333)"
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>

    </div>
  );
}
