import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function DarkBanner() {
  return (
    <section className="py-12 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Container Box matching screenshot */}
        <div className="bg-[#1B1C1C] text-white rounded-3xl p-8 sm:p-12 border border-[#334537] shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Text */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#DBCBB0] text-[10px] font-mono tracking-widest uppercase">
                <Sparkles className="w-3 h-3 text-[#F5A623]" />
                <span>INTERACTIVE PLOT PLAN</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-normal font-serif text-white tracking-tight">
                Select Your Exact Plot on the Master Visualizer
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-2xl leading-relaxed">
                Explore live east &amp; west facing plots, check availability status, calculate square yard prices, and book a direct consultation with our director.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 font-mono">
              <a
                href="#contact"
                className="px-6 py-4 rounded-xl bg-white hover:bg-[#F9F7F2] text-[#1B1C1C] font-bold text-xs shadow-md transition-all text-center tracking-wider"
              >
                OPEN LIVE MASTER PLAN
              </a>

              <a
                href="#contact"
                className="px-6 py-4 rounded-xl bg-transparent hover:bg-white/10 border border-white/30 text-white font-bold text-xs transition-all text-center tracking-wider"
              >
                BOOK INSPECTION
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
