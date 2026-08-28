import React from 'react';
import { ShieldCheck, Phone, ArrowRight, Play, PhoneCall } from 'lucide-react';
import { translations } from '../data/translations';

export default function HeroSlider({ lang }) {
  const t = translations[lang].hero;

  return (
    <section id="home" className="relative pt-12 pb-20 overflow-hidden bg-[#F9F7F2]">
      
      {/* Light High-Key Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <img
          src="./images/luxury_villa_venture_1786442598108.jpg"
          alt="Luxury Real Estate Venture Layout"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F9F7F2] via-[#F9F7F2]/90 to-[#F9F7F2]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Improvised Luxury Badge without capsule pill */}
            <div className="flex items-center space-x-3 mb-2">
              <div className="h-px w-8 bg-[#4A5D4E]"></div>
              <span className="eyebrow-tag text-[#4A5D4E]">
                GODAVARI REGION • CLEAR TITLE &amp; DTCP APPROVED
              </span>
            </div>

            {/* Headline matching screenshot with Playfair Italic */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1B1C1C] tracking-tight leading-[1.12] font-serif">
              Building Your Family's <br />
              <span className="italic font-serif font-normal text-[#334537]">Generational Legacy</span> in Godavari
            </h1>

            {/* Paragraph Body matching screenshot */}
            <p className="text-base text-[#636863] leading-relaxed max-w-xl font-sans">
              Curated residential plots and luxury villa layouts with 100% clear titles, DTCP &amp; VMRDA approvals. Secure your heritage with verified, high-appreciation land assets.
            </p>

            {/* Action Buttons matching screenshot */}
            <div className="flex flex-wrap items-center gap-4 pt-2 font-sans">
              <a
                href="#ventures"
                className="px-7 py-4 rounded-lg bg-[#1B1C1C] hover:bg-[#334537] text-white font-bold text-xs shadow-md transition-all flex items-center group cursor-pointer tracking-[0.1em]"
              >
                <span>EXPLORE VENTURES</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#videos"
                className="px-6 py-4 rounded-lg bg-white hover:bg-[#F0EDED] border border-[#E5E0D5] text-[#1B1C1C] font-bold text-xs transition-all flex items-center cursor-pointer shadow-xs tracking-[0.1em]"
              >
                <Play className="w-3.5 h-3.5 mr-2 text-[#1B1C1C] fill-[#1B1C1C]" />
                <span>WATCH VIRTUAL TOURS</span>
              </a>
            </div>

          </div>

          {/* Right Column: LARGE Profile Photo Founder Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden bg-white border border-[#E5E0D5] shadow-xl group">
              
              {/* LARGE Profile Photo */}
              <div className="relative h-[380px] sm:h-[420px] overflow-hidden bg-[#F0EDED]">
                <img
                  src="./images/siva_yedida_professional.jpg"
                  alt="Mr. Siva Yedida - Founder & Managing Director"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Corner Emblem Logo */}
                <div className="absolute top-4 right-4 p-2 rounded-xl bg-white/90 backdrop-blur-md border border-[#E5E0D5] shadow-md flex items-center justify-center">
                  <img
                    src="./images/logo/original_Logo_Siva.png"
                    alt="Siva Estates Emblem"
                    className="w-6 h-6 object-contain"
                  />
                </div>
              </div>

              {/* Founder Details Card Content */}
              <div className="p-6 bg-white relative z-10 border-t border-[#E5E0D5]">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="brand-subtitle">
                      FOUNDER &amp; MANAGING DIRECTOR
                    </span>
                    <h3 className="text-2xl font-bold text-[#1B1C1C] font-serif mt-0.5">
                      Siva Yedida
                    </h3>
                  </div>
                  
                  <a
                    href="tel:+919851633333"
                    className="p-3 rounded-xl bg-[#EAF0EC] hover:bg-[#4A5D4E] hover:text-white text-[#4A5D4E] transition-all shadow-xs"
                    title="Request Direct Meeting / Call"
                  >
                    <PhoneCall className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs text-[#636863] mt-2.5 leading-relaxed font-sans">
                  Dedicated to securing high-appreciation land assets &amp; transparent titles for over 1500+ happy families across Godavari districts.
                </p>

                <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#E5E0D5] text-[11px] font-mono text-[#636863]">
                  <span className="font-semibold text-[#1B1C1C]">12+ Years In Real Estate Advisory</span>
                  <a href="#contact" className="hover:text-[#4A5D4E] font-bold text-[#1B1C1C] underline">
                    REQUEST MEETING →
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Stats Row matching screenshot */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-16 mt-16 border-t border-[#E5E0D5]">
          <div>
            <p className="text-4xl sm:text-5xl font-normal text-[#1B1C1C] font-serif">50+</p>
            <p className="brand-subtitle mt-1">VENTURES COMPLETED</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl font-normal text-[#1B1C1C] font-serif">1500+</p>
            <p className="brand-subtitle mt-1">HAPPY PLOT OWNERS</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl font-normal text-[#1B1C1C] font-serif">12+ Yrs</p>
            <p className="brand-subtitle mt-1">INDUSTRY RECORD</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl font-normal text-[#1B1C1C] font-serif">100%</p>
            <p className="brand-subtitle mt-1">CLEAR TITLE GUARANTEED</p>
          </div>
        </div>

      </div>
    </section>
  );
}
