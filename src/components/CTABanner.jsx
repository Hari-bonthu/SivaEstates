import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#1A1A1A] rounded-3xl px-8 py-14 sm:px-16 sm:py-16 text-center relative overflow-hidden">

          {/* Subtle background pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-5"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          ></div>

          <div className="relative z-10">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight mb-4">
              Schedule a free site visit this weekend
            </h2>
            <p className="text-[#9CA3AF] font-sans text-base mb-8 max-w-md mx-auto">
              Pick a day. We'll send a car. No pressure, no commission — just the land.
            </p>
            <a
              href="#contact"
              className="btn-red inline-flex items-center px-8 py-3.5 text-base font-semibold group cursor-pointer shadow-lg"
            >
              <span>Book a site visit</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
