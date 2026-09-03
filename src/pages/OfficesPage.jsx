import React, { useEffect } from 'react';
import { translations } from '../data/translations';
import BranchSpotlight from '../components/BranchSpotlight';
import ContactFormServerless from '../components/ContactFormServerless';
import SEOHead from '../components/SEOHead';

export default function OfficesPage({ lang = 'en' }) {
  const t = translations[lang]?.branches || translations.en.branches;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <SEOHead
        title="Branch Offices in Rajahmundry & Kakinada | Siva Telugu Estates"
        description="Visit Siva Telugu Estates at our offices in Rajahmundry (Lalacheruvu) or Kakinada. Open 9AM–8PM, 7 days a week. Call +91 98516 33333 to schedule a free site visit."
        canonicalUrl="https://sivateluguestates.com/offices"
      />
      <div className="w-full bg-[#F5F0EB] text-[#1A1A1A] min-h-screen font-sans">
        {/* Branch Spotlight Section */}
        <BranchSpotlight lang={lang} isPage={true} />

        {/* Direct Visit Booking Form */}
        <ContactFormServerless lang={lang} />
      </div>
    </>
  );
}
