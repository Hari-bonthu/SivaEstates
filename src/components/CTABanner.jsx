import React from 'react';
import { ArrowRight } from 'lucide-react';
import { translations } from '../data/translations';
import { Link } from 'react-router-dom';

export default function CTABanner({ lang = 'en' }) {
  const t = translations[lang]?.ctaBanner || translations.en.ctaBanner;

  return (
    <section className="py-8 sm:py-12 px-3 sm:px-6 lg:px-8 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl px-5 py-10 sm:px-12 sm:py-16 text-center relative overflow-hidden shadow-xl">

          {/* Subtle background pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-5"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          ></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-normal tracking-tight mb-3 sm:mb-4 leading-tight">
              {t.heading}
            </h2>
            <p className="text-[#9CA3AF] font-sans text-xs sm:text-base mb-6 sm:mb-8 leading-relaxed">
              {t.subheading}
            </p>
            <Link
              to="/contact"
              className="btn-red inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold group cursor-pointer shadow-lg active:scale-95 transition-all w-full sm:w-auto text-center"
            >
              <span>{t.button}</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
