import React, { useEffect } from 'react';
import HeroSlider from '../components/HeroSlider';
import FourPillars from '../components/FourPillars';
import BranchSpotlight from '../components/BranchSpotlight';
import ProjectTabsCatalog from '../components/ProjectTabsCatalog';
import YouTubeHub from '../components/YouTubeHub';
import TrustSection from '../components/TrustSection';
import Testimonials from '../components/Testimonials';
import ContactFormServerless from '../components/ContactFormServerless';

export default function HomePage({ lang, setLang }) {
  useEffect(() => {
    document.title = "Siva Telugu Estates | Rajahmundry & Kakinada Real Estate | Plots, Villas & Lands";
  }, []);

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <HeroSlider lang={lang} />

      {/* 4 Pillars Section */}
      <FourPillars lang={lang} />

      {/* Ventures Catalog */}
      <ProjectTabsCatalog lang={lang} />

      {/* Branch Spotlight */}
      <BranchSpotlight lang={lang} />

      {/* YouTube Video Hub */}
      <YouTubeHub lang={lang} />

      {/* Trust & Certifications */}
      <TrustSection lang={lang} />

      {/* Client Testimonials */}
      <Testimonials lang={lang} />

      {/* Serverless Contact & Site Visit Form */}
      <ContactFormServerless lang={lang} />
    </main>
  );
}
