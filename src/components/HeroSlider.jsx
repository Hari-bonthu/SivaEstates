import React from 'react';
import { ArrowRight, Play, PhoneCall } from 'lucide-react';
import { translations } from '../data/translations';

export default function HeroSlider({ lang }) {
  const t = translations[lang].hero;

  return (
    <section id="home" className="relative pt-14 pb-16 overflow-hidden bg-[#F5F0EB]">

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Eyebrow tag — red accent */}
            <div className="flex items-center space-x-2 mb-1">
              <div className="h-px w-6 bg-[#C8312A]"></div>
              <span className="eyebrow-tag" style={{ display: 'inline', color: '#C8312A' }}>
                GODAVARI REGION
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1A1A1A] tracking-tight leading-[1.1] font-serif">
              Building your family's<br />
              best future in the<br />
              <span className="font-serif font-normal text-[#1A1A1A]">Godavari region</span>
            </h1>

            {/* Body copy */}
            <p className="text-base text-[#6B6860] leading-relaxed max-w-lg font-sans">
              Curated residential plots and luxury villa layouts with 100% clear titles,
              DTCP &amp; VMRDA approvals. Secure your heritage with verified,
              high-appreciation land assets.
            </p>

            {/* Action Buttons — red pill + outline ghost */}
            <div className="flex flex-wrap items-center gap-4 pt-2 font-sans">
              <a
                href="#ventures"
                className="btn-red inline-flex items-center px-7 py-3.5 text-sm font-semibold group cursor-pointer shadow-sm"
              >
                <span>Explore ventures</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#videos"
                className="btn-outline inline-flex items-center px-6 py-3.5 text-sm font-semibold cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 mr-2 fill-current" />
                <span>Watch virtual tours</span>
              </a>
            </div>

          </div>

          {/* Right Column — Founder Photo Card (user-specified: keep this) */}
          <div className="lg:col-span-5 relative flex justify-center">

            <div className="relative w-full max-w-md rounded-3xl overflow-hidden bg-white border border-[#E8E2DA] shadow-xl group">

              {/* Large Profile Photo */}
              <div className="relative h-[360px] sm:h-[400px] overflow-hidden bg-[#F0EDED]">
                <img
                  src="./images/siva_yedida_professional.jpg"
                  alt="Mr. Siva Yedida - Founder & Managing Director"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Corner logo emblem */}
                <div className="absolute top-4 right-4 p-2 rounded-xl bg-white/90 backdrop-blur-md border border-[#E8E2DA] shadow-md flex items-center justify-center">
                  <img
                    src="./images/logo/original_Logo_Siva.png"
                    alt="Siva Estates Emblem"
                    className="w-6 h-6 object-contain"
                  />
                </div>
              </div>

              {/* Founder Details */}
              <div className="p-6 bg-white relative z-10 border-t border-[#E8E2DA]">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="eyebrow-tag" style={{ display: 'inline-block', marginBottom: '4px' }}>
                      Founder &amp; Managing Director
                    </span>
                    <h3 className="text-2xl font-bold text-[#1A1A1A] font-serif mt-0.5">
                      Siva Yedida
                    </h3>
                  </div>

                  <a
                    href="tel:+919876543210"
                    className="p-3 rounded-xl bg-[#FCECEA] hover:bg-[#C8312A] hover:text-white text-[#C8312A] transition-all shadow-xs"
                    title="Call Directly"
                  >
                    <PhoneCall className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs text-[#6B6860] mt-2.5 leading-relaxed font-sans">
                  Dedicated to securing high-appreciation land assets &amp; transparent titles
                  for over 1500+ happy families across Godavari districts.
                </p>

                <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#E8E2DA] text-xs font-sans text-[#6B6860]">
                  <span className="font-semibold text-[#1A1A1A]">12+ Years In Land Development</span>
                  <a href="#contact" className="hover:text-[#C8312A] font-semibold text-[#1A1A1A] transition-colors">
                    Request meeting →
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
