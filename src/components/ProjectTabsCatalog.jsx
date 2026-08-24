import React, { useState } from 'react';
import { MapPin, ArrowRight, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { properties } from '../data/properties';
import { translations } from '../data/translations';
import PropertyModal from './PropertyModal';
import { Link } from 'react-router-dom';

export default function ProjectTabsCatalog({ lang }) {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? properties
    : properties.filter(p => p.category === activeCategory);

  const featured = properties.filter(p => p.featured);

  return (
    <section id="ventures" className="py-20 bg-[#F9F7F2] relative border-t border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            {/* Luxury label badge – replacing capsule style */}
            <div className="flex items-center space-x-3">
              <div className="h-px w-8 bg-[#4A5D4E]"></div>
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#4A5D4E]">EXCLUSIVES PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#1B1C1C] tracking-tight font-serif">
              Featured Gated Ventures
            </h2>
          </div>

          {/* Category Tabs – Numbered Luxury Style */}
          <div className="flex items-center space-x-1 bg-white border border-[#E5E0D5] rounded-xl p-1 shadow-xs">
            {[
              { label: 'All Ventures', value: 'all' },
              { label: 'Current', value: 'current' },
              { label: 'Completed', value: 'completed' },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveCategory(tab.value)}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider transition-all cursor-pointer ${
                  activeCategory === tab.value
                    ? 'bg-[#1B1C1C] text-white shadow-sm'
                    : 'text-[#636863] hover:text-[#1B1C1C]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E5E0D5] hover:border-[#DBCBB0] transition-all flex flex-col group shadow-xs hover:shadow-md"
            >
              {/* Image with real asset photo */}
              <div className="relative h-56 overflow-hidden bg-[#F0EDED]">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Status Badge – Clean, no glassmorphism */}
                <div className="absolute top-3 left-3 flex items-center space-x-1.5">
                  <span className={`px-2.5 py-1 rounded-md text-[9px] font-mono font-bold tracking-widest uppercase text-white ${
                    item.status === 'Fast Selling' ? 'bg-[#1B1C1C]' :
                    item.status === 'Newly Launched' ? 'bg-[#4A5D4E]' :
                    'bg-[#636863]'
                  }`}>
                    {item.status}
                  </span>
                </div>

                {/* Location Tag */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-white text-[#1B1C1C] text-[9px] font-mono font-bold tracking-wider uppercase shadow-sm">
                  {item.location}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-1.5 text-[10px] font-mono font-bold text-[#4A5D4E] tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.approval}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1B1C1C] font-serif leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#636863] flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1 shrink-0 text-[#4A5D4E]" />
                    {item.area}
                  </p>
                </div>

                {/* Price + Actions */}
                <div className="pt-4 border-t border-[#E5E0D5] flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-mono text-[#636863] block uppercase tracking-wider">STARTING FROM</span>
                    <span className="text-sm font-bold text-[#1B1C1C] font-mono">{item.pricePerSqYd}</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setSelectedProperty(item)}
                      className="px-3.5 py-2 rounded-lg bg-[#F9F7F2] hover:bg-[#F0EDED] border border-[#E5E0D5] text-[#1B1C1C] text-[10px] font-mono font-bold tracking-wider uppercase transition-all cursor-pointer"
                    >
                      Details
                    </button>
                    <Link
                      to={`/venture/${item.id}`}
                      className="px-3.5 py-2 rounded-lg bg-[#1B1C1C] hover:bg-[#334537] text-white text-[10px] font-mono font-bold tracking-wider uppercase transition-all flex items-center space-x-1"
                    >
                      <span>Full Page</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

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
