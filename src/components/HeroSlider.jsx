import React from 'react';
import { ChevronRight, Play, PhoneCall } from 'lucide-react';
import { translations } from '../data/translations';
import { Link } from 'react-router-dom';

export default function HeroSlider({ lang = 'en' }) {
  const t = translations[lang]?.hero || translations.en.hero;

  return (
    <section id="home" className="relative pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 overflow-hidden bg-[#F5F0EB]">

      {/* Subtle textured bg overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
        <img
          src="./images/luxury_villa_venture_1786442598108.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#F5F0EB]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">

            {/* Eyebrow tag matching template: — GODAVARI REGION · SINCE 2014 */}
            <div className="flex items-center space-x-2">
              <div className="h-px w-6 bg-[#C8312A]"></div>
              <span className="eyebrow-tag text-[10px] sm:text-xs" style={{ display: 'inline', color: '#C8312A' }}>
                {t.eyebrow}
              </span>
            </div>

            {/* Headline matching template */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-[#1A1A1A] tracking-tight leading-[1.12]">
              {t.titleLine1}<br className="hidden sm:inline" />{' '}
              {t.titleLine2}<br className="hidden sm:inline" />{' '}
              <span className="font-serif font-normal text-[#1A1A1A]">{t.titleLine3}</span>
            </h1>

            {/* Body copy */}
            <p className="text-sm sm:text-base text-[#6B6860] leading-relaxed max-w-lg font-sans">
              {t.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 font-sans">
              <Link
                to="/properties"
                className="btn-red inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold group cursor-pointer shadow-md active:scale-95 transition-all text-center"
              >
                <span>{t.ctaExplore}</span>
                <ChevronRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/gallery"
                className="btn-outline inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold cursor-pointer active:scale-95 transition-all text-center"
              >
                <Play className="w-3.5 h-3.5 mr-2 fill-current" />
                <span>{t.ctaVideos}</span>
              </Link>
            </div>

          </div>

          {/* Right Column — Founder Photo Card (kept as specified) */}
          <div className="lg:col-span-5 relative flex justify-center mt-2 lg:mt-0">

            <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl overflow-hidden bg-white border border-[#E8E2DA] shadow-xl group">

              {/* Profile Photo */}
              <div className="relative h-[280px] sm:h-[360px] md:h-[400px] overflow-hidden bg-[#F0EDED]">
                <img
                  src="./images/siva_yedida_professional.jpg"
                  alt="Mr. Siva Yedida - Founder & Managing Director"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Corner logo emblem */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-xl bg-white/90 backdrop-blur-md border border-[#E8E2DA] shadow-md flex items-center justify-center">
                  <img
                    src="./images/logo/original_Logo_Siva.png"
                    alt="Siva Estates Emblem"
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                  />
                </div>
              </div>

              {/* Founder Details */}
              <div className="p-4 sm:p-6 bg-white relative z-10 border-t border-[#E8E2DA]">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="eyebrow-tag text-[9px] sm:text-[10px]" style={{ display: 'inline-block', marginBottom: '2px' }}>
                      {t.directorTitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] font-serif">
                      {t.directorName}
                    </h3>
                  </div>

                  <a
                    href="tel:+919876543210"
                    className="p-2.5 sm:p-3 rounded-xl bg-[#FCECEA] hover:bg-[#C8312A] hover:text-white text-[#C8312A] transition-all shadow-xs"
                    title="Call Directly"
                    aria-label="Call Director"
                  >
                    <PhoneCall className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs text-[#6B6860] mt-2 leading-relaxed font-sans line-clamp-3 sm:line-clamp-none">
                  {t.directorDesc}
                </p>

                <div className="flex items-center justify-between pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-[#E8E2DA] text-[11px] sm:text-xs font-sans text-[#6B6860]">
                  <span className="font-semibold text-[#1A1A1A]">{t.directorStats}</span>
                  <Link to="/contact" className="hover:text-[#C8312A] font-semibold text-[#1A1A1A] transition-colors">
                    {t.directorMeet}
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
