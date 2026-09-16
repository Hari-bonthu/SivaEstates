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

  const officesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.sivateluguestates.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Branch Offices",
            "item": "https://www.sivateluguestates.com/offices/"
          }
        ]
      },
      {
        "@type": "RealEstateAgent",
        "@id": "https://www.sivateluguestates.com/offices/#rajahmundry-hq",
        "name": "Siva Telugu Estates - Rajahmundry Headquarters",
        "url": "https://www.sivateluguestates.com/offices/",
        "telephone": "+919851633333",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Lala cheruvu Rajahmundry",
          "addressLocality": "Rajahmundry",
          "addressRegion": "Andhra Pradesh",
          "postalCode": "533106",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 17.0005,
          "longitude": 81.8040
        }
      },
      {
        "@type": "RealEstateAgent",
        "@id": "https://www.sivateluguestates.com/offices/#kakinada-branch",
        "name": "Siva Telugu Estates - Kakinada Branch",
        "url": "https://www.sivateluguestates.com/offices/",
        "telephone": "+919851633333",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Atchampeta Junction",
          "addressLocality": "Kakinada",
          "addressRegion": "Andhra Pradesh",
          "postalCode": "533005",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 16.9891,
          "longitude": 82.2475
        }
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Branch Offices in Rajahmundry & Kakinada | Siva Telugu Estates"
        description="Visit Siva Telugu Estates at our offices in Rajahmundry (Lalacheruvu) or Kakinada. Call +91 98516 33333 to schedule a free site visit."
        canonicalUrl="https://www.sivateluguestates.com/offices/"
        schemaData={officesSchema}
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
