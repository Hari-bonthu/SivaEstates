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
import SEOHead from '../components/SEOHead';

export default function HomePage({ lang = 'en', setLang }) {
  return (
    <>
      <SEOHead
        title="Siva Telugu Estates | Rajahmundry & Kakinada Real Estate | Plots, Villas & Lands"
        description="Leading Real Estate Agency in Rajahmundry & Kakinada by Director Mr. Siva Yedida. RUDA & AP RERA Approved Open Plots, Luxury Gated Community Villas & Land Investments. Free site visit with AC car. Call +91 98516 33333."
        canonicalUrl="https://sivateluguestates.com/"
      />
      <div className="flex-grow">
        {/* Hero Section */}
        <HeroSlider lang={lang} />

        {/* Stats Strip — 50+ | 1500+ | 12 | 100% */}
        <StatsStrip lang={lang} />

        {/* A promise we keep on every single deal — 4 Pillars */}
        <FourPillars lang={lang} />

        {/* Current & completed developments */}
        <ProjectTabsCatalog lang={lang} />

        {/* From first call to registered title in four steps — dark section */}
        <FourSteps lang={lang} />

        {/* See the land before you see the paperwork — gallery with popup modal */}
        <GalleryStrip lang={lang} />

        {/* What our property buyers say */}
        <Testimonials lang={lang} />

        {/* Schedule a free site visit — dark CTA banner */}
        <CTABanner lang={lang} />

        {/* YouTube Video Hub */}
        <YouTubeHub lang={lang} />

        {/* Branch Spotlight */}
        <BranchSpotlight lang={lang} />

        {/* Trust & Certifications */}
        <TrustSection lang={lang} />

        {/* Serverless Contact & Site Visit Form */}
        <ContactFormServerless lang={lang} />
      </div>
    </>
  );
}
