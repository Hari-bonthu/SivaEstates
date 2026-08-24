import React, { useState } from 'react';
import { MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { properties } from '../data/properties';
import { translations } from '../data/translations';
import PropertyModal from './PropertyModal';

export default function ProjectTabsCatalog({ lang }) {
  const t = translations[lang].ventures;
  const [selectedProperty, setSelectedProperty] = useState(null);

  const featuredVentures = properties.slice(0, 3);

  return (
    <section id="ventures" className="py-20 bg-[#F9F7F2] relative border-t border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching screenshot */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <div className="inline-block px-3 py-1 rounded-full bg-white border border-[#E5E0D5] text-[#636863] text-[10px] font-mono tracking-widest uppercase">
              EXCLUSIVES PORTFOLIO
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#1B1C1C] tracking-tight font-serif">
              Featured Gated Ventures
            </h2>
          </div>

          <a
            href="#contact"
            className="text-xs font-mono font-bold text-[#1B1C1C] hover:text-[#4A5D4E] flex items-center space-x-1 uppercase tracking-wider"
          >
            <span>VIEW ALL 3 VENTURES</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* 3 Featured Venture Cards Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredVentures.map(item => (
            <div 
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E5E0D5] hover:border-[#DBCBB0] transition-all flex flex-col justify-between group shadow-xs hover:shadow-md"
            >
              <div>
                {/* Image & Status Badges */}
                <div className="relative h-60 overflow-hidden bg-[#F0EDED]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#1B1C1C] text-white text-[9px] font-mono font-bold tracking-widest uppercase">
                    {item.status}
                  </div>
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-white/90 backdrop-blur-md border border-[#E5E0D5] text-[#1B1C1C] text-[9px] font-mono font-bold tracking-wider uppercase">
                    {item.location}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-[#1B1C1C] font-serif leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#636863] flex items-center font-sans">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-[#4A5D4E] shrink-0" />
                    {item.area}
                  </p>
                </div>
              </div>

              {/* Price & Inspect Layout Action Footer */}
              <div className="p-6 pt-0 border-t border-[#E5E0D5] mt-4 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono text-[#636863] block uppercase tracking-wider">STARTING FROM</span>
                  <span className="text-sm font-bold text-[#1B1C1C] font-mono">{item.pricePerSqYd}</span>
                </div>

                <button
                  onClick={() => setSelectedProperty(item)}
                  className="text-xs font-mono font-bold text-[#1B1C1C] hover:text-[#4A5D4E] flex items-center space-x-1 tracking-wider uppercase cursor-pointer"
                >
                  <span>INSPECT LAYOUT</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal render */}
        {selectedProperty && (
          <PropertyModal 
            property={selectedProperty} 
            onClose={() => setSelectedProperty(null)} 
          />
        )}

      </div>
    </section>
  );
}
