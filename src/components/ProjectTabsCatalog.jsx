import React, { useState } from 'react';
import { MapPin, ArrowRight, ShieldCheck, Filter, CheckCircle2, Sparkles } from 'lucide-react';
import { properties } from '../data/properties';
import { translations } from '../data/translations';
import PropertyModal from './PropertyModal';

export default function ProjectTabsCatalog({ lang }) {
  const t = translations[lang].ventures;
  
  const [activeCategory, setActiveCategory] = useState('current');
  const [locationFilter, setLocationFilter] = useState('All');
  const [selectedProperty, setSelectedProperty] = useState(null);

  const filteredProperties = properties.filter(p => {
    const matchCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchLocation = locationFilter === 'All' || p.location.toLowerCase() === locationFilter.toLowerCase();
    return matchCategory && matchLocation;
  });

  return (
    <section id="ventures" className="py-20 bg-[#F9F7F2] relative border-t border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#EAF0EC] border border-[#4A5D4E]/30 text-[#334537] text-xs font-mono tracking-widest uppercase">
            FEATURED REAL ESTATE PROJECTS
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#1B1C1C] tracking-tight font-serif">
            Current &amp; Completed Landmark Projects
          </h2>
          <p className="text-sm text-[#636863]">
            Explore DTCP &amp; VMRDA approved residential layouts, luxury villa plots, and investment lands.
          </p>
        </div>

        {/* Primary Project Status Tabs (Inspired by RS Property Developers) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
          <button
            onClick={() => setActiveCategory('current')}
            className={`px-6 py-3 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center space-x-2 ${
              activeCategory === 'current'
                ? 'bg-[#4A5D4E] text-white shadow-md scale-105'
                : 'bg-white border border-[#E5E0D5] text-[#2D2D2D] hover:bg-[#F0EDED]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#DBCBB0]" />
            <span>Current Ongoing Projects</span>
          </button>

          <button
            onClick={() => setActiveCategory('completed')}
            className={`px-6 py-3 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center space-x-2 ${
              activeCategory === 'completed'
                ? 'bg-[#4A5D4E] text-white shadow-md scale-105'
                : 'bg-white border border-[#E5E0D5] text-[#2D2D2D] hover:bg-[#F0EDED]'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
            <span>Completed Projects</span>
          </button>

          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-3 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#4A5D4E] text-white shadow-md scale-105'
                : 'bg-white border border-[#E5E0D5] text-[#2D2D2D] hover:bg-[#F0EDED]'
            }`}
          >
            <span>All Projects</span>
          </button>
        </div>

        {/* Secondary Location Sub-Filters */}
        <div className="flex items-center justify-center space-x-2 mt-4 text-xs font-mono">
          <Filter className="w-3.5 h-3.5 text-[#636863] mr-1" />
          <span className="text-[#636863] mr-2">Location:</span>
          {['All', 'Rajahmundry', 'Kakinada'].map(loc => (
            <button
              key={loc}
              onClick={() => setLocationFilter(loc)}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                locationFilter === loc
                  ? 'bg-white text-[#4A5D4E] border border-[#4A5D4E] font-bold shadow-sm'
                  : 'text-[#636863] hover:text-[#1B1C1C]'
              }`}
            >
              {loc}
            </button>
          ))}
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredProperties.map(item => (
            <div 
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E5E0D5] hover:border-[#DBCBB0] transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div>
                {/* Image & Badge */}
                <div className="relative h-56 overflow-hidden bg-[#F0EDED]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#E5E0D5] text-[#4A5D4E] text-[11px] font-mono font-bold">
                    {item.location}
                  </div>
                  
                  <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-white text-[10px] font-mono font-bold ${
                    item.category === 'completed' ? 'bg-[#636863]' : 'bg-[#4A5D4E]'
                  }`}>
                    {item.status}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center text-xs text-[#4A5D4E] font-mono space-x-1 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{item.approval}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1B1C1C] font-serif leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#636863] flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-[#4A5D4E] shrink-0" />
                    {item.area}
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-mono">
                    <div className="bg-[#F9F7F2] p-2.5 rounded-xl border border-[#E5E0D5]">
                      <span className="text-[9px] text-[#636863] block uppercase">Plot Sizes</span>
                      <span className="font-bold text-[#1B1C1C]">{item.plotSizes}</span>
                    </div>
                    <div className="bg-[#F9F7F2] p-2.5 rounded-xl border border-[#E5E0D5]">
                      <span className="text-[9px] text-[#636863] block uppercase">Road Width</span>
                      <span className="font-bold text-[#1B1C1C]">{item.roadWidth}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-[#E5E0D5] mt-4 flex items-center space-x-2">
                <button
                  onClick={() => setSelectedProperty(item)}
                  className="flex-1 py-3 rounded-xl bg-[#F9F7F2] hover:bg-[#F0EDED] border border-[#E5E0D5] text-[#2D2D2D] text-xs font-bold transition-all flex items-center justify-center space-x-1 cursor-pointer font-mono"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#4A5D4E]" />
                </button>

                <a
                  href={`https://wa.me/919851633333?text=Hi%20Siva%20Telugu%20Estates,%20I%20am%20interested%20in%20${encodeURIComponent(item.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-[#4A5D4E] hover:bg-[#334537] text-white text-xs font-bold transition-all flex items-center justify-center font-mono"
                  title="WhatsApp Instant Inquiry"
                >
                  WhatsApp
                </a>
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
