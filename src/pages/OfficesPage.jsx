import React, { useEffect } from 'react';
import { translations } from '../data/translations';
import BranchSpotlight from '../components/BranchSpotlight';
import ContactFormServerless from '../components/ContactFormServerless';

export default function OfficesPage({ lang = 'en' }) {
  const t = translations[lang]?.branches || translations.en.branches;

  useEffect(() => {
    document.title = "Our Branch Offices | Rajahmundry & Kakinada | Siva Telugu Estates";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="w-full bg-[#F5F0EB] text-[#1A1A1A] min-h-screen font-sans pt-4 sm:pt-6 pb-16 sm:pb-20">
      {/* Branch Spotlight Section */}
      <BranchSpotlight lang={lang} />

      {/* Direct Visit Booking Form */}
      <ContactFormServerless lang={lang} />
    </div>
  );
}
