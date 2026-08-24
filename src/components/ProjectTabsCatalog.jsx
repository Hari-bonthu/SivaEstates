import React, { useState } from 'react';
import { properties } from '../data/properties';
import { MapPin, ArrowRight } from 'lucide-react';
import PropertyModal from './PropertyModal';
import { Link } from 'react-router-dom';

export default function ProjectTabsCatalog({ lang = 'en' }) {
  const [selectedProperty, setSelectedProperty] = useState(null);

  // 3 Featured Gated Ventures exactly as shown in screenshot
  const featuredVentures = [
    {
      id: "jetty-mayfair",
      title: "Jetty Mayfair Luxury Villa Layout",
      location: "Rajahmundry",
      area: "Morampudi - Lalacheruvu Highway Corridor",
      pricePerSqYd: "₹18,500 / Sq. Yd",
      status: "FAST SELLING",
      thumbnail: "./images/luxury_villa_venture_1786442598108.jpg",
    },
    {
      id: "kakinada-smart-city",
      title: "Kakinada Port & Smart City",
      location: "Kakinada",
      area: "Ramanayyapeta - ADB Road Corridor",
      pricePerSqYd: "₹14,200 / Sq. Yd",
      status: "NEWLY LAUNCHED",
      thumbnail: "./images/kakinada_branch_venture_1786442659994.jpg",
    },
    {
      id: "seshadri-heights",
      title: "Samalkot ADB Highway Enclave",
      location: "Kakinada",
      area: "Samalkot - Kakinada Highway",
      pricePerSqYd: "₹13,800 / Sq. Yd",
      status: "FAST SELLING",
      thumbnail: "./images/assets/20250604_152649.jpg",
    },
  ];

  return (
    <section id="ventures" className="py-20 bg-[#F9F7F2] relative border-t border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header matching screenshot */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold text-[#6B6860] block mb-2">
              CURATED PORTFOLIO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] font-normal tracking-tight">
              Featured Gated Ventures
            </h2>
          </div>

          <Link
            to="/properties"
            className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#1A1A1A] hover:text-[#4A5D4E] transition-colors flex items-center space-x-1.5"
          >
            <span>VIEW ALL 3 VENTURES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3-Column Featured Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {featuredVentures.map((item) => {
            const fullProp = properties.find((p) => p.id === item.id) || item;

            return (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden border border-[#E5E2D9] hover:border-[#1A1A1A] transition-all duration-300 group flex flex-col justify-between shadow-xs hover:shadow-lg"
              >
                {/* Image with Badges */}
                <div className="relative h-60 overflow-hidden bg-[#F0EDED]">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Left Badge (Status) */}
                  <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded bg-[#1A1A1A]/95 text-white text-[9px] font-mono font-bold tracking-widest uppercase shadow-xs">
                    {item.status}
                  </div>

                  {/* Right Badge (Location) */}
                  <div className="absolute top-3.5 right-3.5 bg-white/95 px-2.5 py-1 rounded text-[9px] font-mono font-bold tracking-wider text-[#1A1A1A] border border-[#E5E2D9] shadow-xs">
                    {item.location}
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-normal text-[#1A1A1A] mb-1.5 leading-snug group-hover:text-[#4A5D4E] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#6B6860] flex items-center font-sans">
                      <MapPin className="w-3.5 h-3.5 mr-1 shrink-0 text-[#4A5D4E]" />
                      <span>{item.area}</span>
                    </p>
                  </div>

                  {/* Footer Row */}
                  <div className="pt-4 border-t border-[#E5E2D9] flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-mono text-[#6B6860] uppercase tracking-wider block">
                        STARTING FROM
                      </span>
                      <span className="text-sm font-bold text-[#1A1A1A] font-mono">
                        {item.pricePerSqYd}
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedProperty(fullProp)}
                      className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1A1A1A] hover:text-[#4A5D4E] transition-colors flex items-center space-x-1 cursor-pointer"
                    >
                      <span>INSPECT LAYOUT</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal */}
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
