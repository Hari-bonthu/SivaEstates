import React, { useEffect } from 'react';
import { translations } from '../data/translations';
import { Phone, MapPin, MessageCircle, Clock } from 'lucide-react';
import ContactFormServerless from '../components/ContactFormServerless';

export default function ContactPage({ lang = 'en' }) {
  const t = translations[lang]?.contact || translations.en.contact;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="w-full bg-[#F5F0EB] text-[#1A1A1A] min-h-screen font-sans">

      {/* Hero Header */}
      <section className="pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          {/* <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <div className="h-px w-6 bg-[#C8312A]"></div>
            <span className="eyebrow-tag text-[10px] sm:text-xs" style={{ color: '#C8312A', display: 'inline' }}>
              {t.eyebrow}
            </span>
          </div> */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] font-normal leading-tight mb-3 sm:mb-4 tracking-tight">
            {t.heading}
          </h1>
          <p className="text-[#6B6860] text-sm sm:text-base md:text-lg leading-relaxed">
            {t.subheading}
          </p>
        </div>
      </section>

      {/* Main Serverless Form Section */}
      <div className="pb-16 sm:pb-20">
        <ContactFormServerless lang={lang} />
      </div>

    </div>
  );
}
