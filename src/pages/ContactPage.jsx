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
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <div className="h-px w-6 bg-[#C8312A]"></div>
            <span className="eyebrow-tag text-[10px] sm:text-xs" style={{ color: '#C8312A', display: 'inline' }}>
              {t.eyebrow}
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] font-normal leading-tight mb-3 sm:mb-4 tracking-tight">
            {t.heading}
          </h1>
          <p className="text-[#6B6860] text-sm sm:text-base md:text-lg leading-relaxed">
            {t.subheading}
          </p>
        </div>

        {/* Quick Contact Cards: 1 col on mobile, 3 col on tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
          
          {/* Direct Phone */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E8E2DA] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#FCECEA] flex items-center justify-center text-[#C8312A] mb-3 sm:mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#1A1A1A]">
                Direct Phone Call
              </h3>
              <p className="text-xs text-[#6B6860] mt-1 mb-3">
                Direct consultation with our sales director & team.
              </p>
            </div>
            <a
              href="tel:+919876543210"
              className="text-sm font-bold text-[#C8312A] hover:underline"
            >
              +91 98765 43210
            </a>
          </div>

          {/* Instant WhatsApp */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E8E2DA] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-3 sm:mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#1A1A1A]">
                WhatsApp Chat
              </h3>
              <p className="text-xs text-[#6B6860] mt-1 mb-3">
                Instant layout brochures, pricing sheets & location pins.
              </p>
            </div>
            <a
              href="https://wa.me/919876543210?text=Hello%20Siva%20Telugu%20Estates,%20I%20want%20to%20know%20more%20about%20available%20ventures."
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-emerald-600 hover:underline"
            >
              Chat on WhatsApp →
            </a>
          </div>

          {/* Office Address */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E8E2DA] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F5F0EB] flex items-center justify-center text-[#1A1A1A] mb-3 sm:mb-4">
                <MapPin className="w-5 h-5 text-[#C8312A]" />
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#1A1A1A]">
                Rajahmundry HQ
              </h3>
              <p className="text-xs text-[#6B6860] mt-1">
                Danavaipeta, Rajahmundry, Andhra Pradesh - 533103
              </p>
            </div>
            <p className="text-[11px] text-[#9CA3AF] mt-2 flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#C8312A]" />
              <span>Mon – Sun: 9:00 AM – 8:00 PM</span>
            </p>
          </div>

        </div>
      </section>

      {/* Main Serverless Form Section */}
      <ContactFormServerless lang={lang} />

    </div>
  );
}
