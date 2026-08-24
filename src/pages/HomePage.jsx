import React from 'react';
import HeroSlider from '../components/HeroSlider';
import FourPillars from '../components/FourPillars';
import BranchSpotlight from '../components/BranchSpotlight';
import ProjectTabsCatalog from '../components/ProjectTabsCatalog';
import YouTubeHub from '../components/YouTubeHub';
import TrustSection from '../components/TrustSection';
import Testimonials from '../components/Testimonials';
import ContactFormServerless from '../components/ContactFormServerless';
import StackedCarousel3D from '../components/StackedCarousel3D';

const SHOWCASE_IMAGES = [
  "./images/luxury_villa_venture_1786442598108.jpg",
  "./images/assets/20250604_152649.jpg",
  "./images/kakinada_branch_venture_1786442659994.jpg",
  "./images/assets/20260814_104916.jpg",
  "./images/assets/20260814_100950.jpg",
  "./images/assets/20260814_111241.jpg",
  "./images/assets/WhatsApp Image 2025-05-08 at 12.38.32_43d48dad.jpg",
  "./images/assets/20250907_130204.jpg",
  "./images/assets/20260125_121313.jpg",
  "./images/assets/20260814_103553.jpg",
];

export default function HomePage({ lang, setLang }) {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <HeroSlider lang={lang} />

      {/* 3D Stacked Deck Interactive Portfolio Showcase */}
      <section className="py-20 bg-[#1B1C1C] text-white relative overflow-hidden border-y border-[#333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <div className="h-px w-8 bg-[#DBCBB0]"></div>
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#DBCBB0]">
              INTERACTIVE 3D VENTURE DECK
            </span>
            <div className="h-px w-8 bg-[#DBCBB0]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal font-serif text-white tracking-tight">
            Traverse Our Signature Land Layouts
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-sans mt-2 max-w-xl mx-auto">
            Scroll or drag to navigate the 3D depth stack of our verified DTCP &amp; VMRDA approved residential gated communities across Godavari.
          </p>
        </div>

        {/* OriginKit WebGL 3D Stacked Carousel */}
        <div className="w-full h-[540px] sm:h-[600px] relative overflow-hidden">
          <StackedCarousel3D
            images={SHOWCASE_IMAGES}
            cardWidth={440}
            cardHeight={270}
            gap={60}
            speed={40}
            direction="backward"
          />
        </div>

        <div className="text-center mt-4">
          <span className="text-[11px] font-mono text-slate-400">
            ✦ Hover over any card to pop forward &amp; inspect • Scroll or drag to explore
          </span>
        </div>
      </section>

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
