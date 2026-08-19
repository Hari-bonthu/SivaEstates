import React, { useState } from 'react';
import { MapPin, ArrowRight, ShieldCheck, Filter, CheckCircle2, Sparkles, Download } from 'lucide-react';
import { properties } from '../data/properties';
import { translations } from '../data/translations';
import PropertyModal from './PropertyModal';

export default function ProjectTabsCatalog({ lang }) {
  const t = translations[lang].ventures;
  
  // Category tabs: 'current' vs 'completed' vs 'all'
  const [activeCategory, setActiveCategory] = useState('current');
  const [locationFilter, setLocationFilter] = useState('All');
  const [selectedProperty, setSelectedProperty] = useState(null);

  const filteredProperties = properties.filter(p => {
    const matchCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchLocation = locationFilter === 'All' || p.location.toLowerCase() === locationFilter.toLowerCase();
    return matchCategory && matchLocation;
  });

  return (
    <section id="ventures" className="py-20 bg-[#0F1115] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#1A1D23] border border-[#F5A623]/30 text-[#F5A623] text-xs font-mono tracking-widest uppercase">
            FEATURED REAL ESTATE PROJECTS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Current &amp; Completed Landmark Projects
          </h2>
          <p className="text-sm text-slate-400">
            Explore DTCP &amp; VMRDA approved residential layouts, luxury villa plots, and investment lands.
          </p>
        </div>

        {/* Primary Project Status Tabs (Inspired by RS Property Developers) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
          <button
            onClick={() => setActiveCategory('current')}
            className={`px-6 py-3 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center space-x-2 ${
              activeCategory === 'current'
                ? 'bg-[#F5A623] text-[#0F1115] shadow-xl scale-105'
                : 'bg-[#1A1D23] border border-white/10 text-slate-300 hover:border-[#F5A623]/40'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Current Ongoing Projects</span>
          </button>

          <button
            onClick={() => setActiveCategory('completed')}
            className={`px-6 py-3 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center space-x-2 ${
              activeCategory === 'completed'
                ? 'bg-[#F5A623] text-[#0F1115] shadow-xl scale-105'
                : 'bg-[#1A1D23] border border-white/10 text-slate-300 hover:border-[#F5A623]/40'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Completed Projects</span>
          </button>

          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-3 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#F5A623] text-[#0F1115] shadow-xl scale-105'
                : 'bg-[#1A1D23] border border-white/10 text-slate-300 hover:border-[#F5A623]/40'
            }`}
          >
            <span>All Projects</span>
          </button>
        </div>

        {/* Secondary Location Sub-Filters */}
        <div className="flex items-center justify-center space-x-2 mt-4 text-xs font-mono">
          <Filter className="w-3.5 h-3.5 text-slate-500 mr-1" />
          <span className="text-slate-400 mr-2">Location:</span>
          {['All', 'Rajahmundry', 'Kakinada'].map(loc => (
            <button
              key={loc}
              onClick={() => setLocationFilter(loc)}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                locationFilter === loc
                  ? 'bg-slate-800 text-[#F5A623] border border-[#F5A623]/40 font-bold'
                  : 'text-slate-400 hover:text-white'
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
              className="bg-[#1A1D23] rounded-3xl overflow-hidden border border-white/10 hover:border-[#F5A623]/40 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Image & Badge */}
                <div className="relative h-56 overflow-hidden bg-[#0F1115]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0F1115]/90 border border-white/10 text-[#F5A623] text-[11px] font-mono font-bold">
                    {item.location}
                  </div>
                  
                  <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-white text-[10px] font-mono font-bold ${
                    item.category === 'completed' ? 'bg-slate-700' : 'bg-[#10B981]'
                  }`}>
                    {item.status}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center text-xs text-[#F5A623] font-mono space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{item.approval}</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white font-heading leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-slate-500 shrink-0" />
                    {item.area}
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-mono">
                    <div className="bg-[#0F1115] p-2.5 rounded-xl border border-white/5">
                      <span className="text-[9px] text-slate-500 block uppercase">Plot Sizes</span>
                      <span className="font-bold text-slate-200">{item.plotSizes}</span>
                    </div>
                    <div className="bg-[#0F1115] p-2.5 rounded-xl border border-white/5">
                      <span className="text-[9px] text-slate-500 block uppercase">Road Width</span>
                      <span className="font-bold text-slate-200">{item.roadWidth}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-white/5 mt-4 flex items-center space-x-2">
                <button
                  onClick={() => setSelectedProperty(item)}
                  className="flex-1 py-3 rounded-xl bg-[#0F1115] hover:bg-[#20242C] border border-white/10 text-slate-200 text-xs font-extrabold transition-all flex items-center justify-center space-x-1 cursor-pointer font-mono"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F5A623]" />
                </button>

                <a
                  href={`https://wa.me/919851633333?text=Hi%20Siva%20Telugu%20Estates,%20I%20am%20interested%20in%20${encodeURIComponent(item.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-[#10B981] hover:bg-[#0D9668] text-white text-xs font-bold transition-all flex items-center justify-center font-mono"
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
