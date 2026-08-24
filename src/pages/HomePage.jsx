import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import FourPillars from '../components/FourPillars';
import BranchSpotlight from '../components/BranchSpotlight';
import ProjectTabsCatalog from '../components/ProjectTabsCatalog';
import YouTubeHub from '../components/YouTubeHub';
import TrustSection from '../components/TrustSection';
import Testimonials from '../components/Testimonials';
import ContactFormServerless from '../components/ContactFormServerless';
import Footer from '../components/Footer';

export default function HomePage({ lang, setLang }) {
  return (
    <main className="flex-grow">
      <HeroSlider lang={lang} />
      <FourPillars lang={lang} />
      <ProjectTabsCatalog lang={lang} />
      <BranchSpotlight lang={lang} />
      <YouTubeHub lang={lang} />
      <TrustSection lang={lang} />
      <Testimonials lang={lang} />
      <ContactFormServerless lang={lang} />
    </main>
  );
}
