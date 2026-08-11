import React from 'react';
import { ShieldCheck, MapPin, Phone, ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { translations } from '../data/translations';

export default function Hero({ lang }) {
  const t = translations[lang].hero;

  return (
    <section id="home" className="relative pt-12 pb-20 overflow-hidden bg-[#0F1115]">
      {/* Aerial Venture Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img 
          src="./images/open_plot_layout_1786442637690.jpg" 
          alt="Real Estate Layout Background"
          className="w-full h-full object-cover mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1115] via-[#0F1115]/90 to-[#0F1115]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Column Text, Right Column Founder Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Mono Pill Badge */}
            <div className="inline-block px-3.5 py-1 rounded-full bg-[#1A1D23] border border-[#F5A623]/30 text-[#F5A623] text-xs font-mono tracking-widest uppercase shadow-sm">
              TRUSTED REAL ESTATE DEVELOPER &amp; CONSULTANT
            </div>

            {/* Headline matching Reference 1 & 2 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-heading">
              Building Your Family's <span className="text-[#F5A623]">Best Future</span> in Godavari Region
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Premier DTCP &amp; VMRDA approved open plot ventures, luxury villa layouts, and high-growth land investments across Rajahmundry &amp; Kakinada.
            </p>

            {/* Location Badges */}
            <div className="flex flex-wrap gap-2.5 pt-1 text-xs">
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#1A1D23] border border-white/10 text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-[#F5A623]" />
                <span>Rajahmundry HQ (Main Hub)</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#1A1D23] border border-white/10 text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Kakinada (Newly Opened Branch)</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#1A1D23] border border-white/10 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F5A623]" />
                <span>DTCP &amp; VMRDA Approved</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#ventures"
                className="px-7 py-4 rounded-xl bg-[#F5A623] hover:bg-[#E0951C] text-[#0F1115] font-extrabold text-base shadow-xl transition-all flex items-center group cursor-pointer"
              >
                <span>Explore Open Plots</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#videos"
                className="px-6 py-4 rounded-xl bg-[#1A1D23] hover:bg-[#262A33] border border-white/15 text-white font-bold text-base transition-all flex items-center cursor-pointer"
              >
                <Play className="w-4 h-4 mr-2 text-[#F5A623] fill-[#F5A623]" />
                <span>Watch YouTube Tours</span>
              </a>
            </div>

          </div>

          {/* Right Column: Founder & Director Card (Matching Reference 1 & 2) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden bg-[#1A1D23] border border-white/10 shadow-2xl group">
              
              {/* Founder Image */}
              <div className="relative h-[360px] sm:h-[400px] overflow-hidden bg-[#0F1115]">
                <img
                  src="./images/siva_yedida_professional.jpg"
                  alt="Mr. Siva Yedida - Founder & Director"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1D23] via-[#1A1D23]/20 to-transparent"></div>
              </div>

              {/* Founder Text Card Content */}
              <div className="p-6 bg-[#1A1D23] relative z-10 -mt-6 rounded-t-3xl border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-[#F5A623] uppercase tracking-widest block">
                      FOUNDER &amp; DIRECTOR
                    </span>
                    <h3 className="text-2xl font-extrabold text-white font-heading mt-0.5">
                      Siva Yedida
                    </h3>
                  </div>
                  
                  <a
                    href="tel:+919851633333"
                    className="p-3 rounded-xl bg-[#0F1115] hover:bg-[#F5A623] hover:text-[#0F1115] text-[#F5A623] border border-[#F5A623]/30 transition-all shadow-md"
                    title="Call Siva Yedida Direct"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                  Dedicated to securing high-appreciation land assets &amp; transparent titles for over 1500+ happy families.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Stats Row (Matching Reference 1 & 2 Layout) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-16 mt-16 border-t border-white/10">
          <div>
            <p className="text-4xl sm:text-5xl font-black text-[#F5A623] font-heading">50+</p>
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Ventures Completed</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl font-black text-[#F5A623] font-heading">1500+</p>
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Happy Plot Owners</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl font-black text-[#F5A623] font-heading">12+ Yrs</p>
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Industry Record</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl font-black text-[#F5A623] font-heading">100%</p>
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Clear Title Guarantee</p>
          </div>
        </div>

      </div>
    </section>
  );
}
