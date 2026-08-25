import React from 'react';
import HeroSlider from '../components/HeroSlider';
import StatsStrip from '../components/StatsStrip';
import FourPillars from '../components/FourPillars';
import ProjectTabsCatalog from '../components/ProjectTabsCatalog';
import FourSteps from '../components/FourSteps';
import GalleryStrip from '../components/GalleryStrip';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';
import YouTubeHub from '../components/YouTubeHub';
import BranchSpotlight from '../components/BranchSpotlight';
import TrustSection from '../components/TrustSection';
import ContactFormServerless from '../components/ContactFormServerless';

export default function HomePage({ lang, setLang }) {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <HeroSlider lang={lang} />

      {/* Stats Strip — 50+ | 1500+ | 12 | 100% */}
      <StatsStrip />

      {/* A promise we keep on every single deal — 4 Pillars */}
      <FourPillars lang={lang} />

      {/* Current & completed developments */}
      <ProjectTabsCatalog lang={lang} />

      {/* From first call to registered title in four steps — dark section */}
      <FourSteps />

      {/* See the land before you see the paperwork — gallery */}
      <GalleryStrip />

      {/* What our property buyers say */}
      <Testimonials lang={lang} />

      {/* Schedule a free site visit — dark CTA banner */}
      <CTABanner />

      {/* YouTube Video Hub */}
      <YouTubeHub lang={lang} />

      {/* Branch Spotlight */}
      <BranchSpotlight lang={lang} />

      {/* Trust & Certifications */}
      <TrustSection lang={lang} />

      {/* Serverless Contact & Site Visit Form */}
      <ContactFormServerless lang={lang} />
    </main>
  );
}
