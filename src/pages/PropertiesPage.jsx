import React, { useState, useEffect } from 'react';
import { properties } from '../data/properties';
import { translations } from '../data/translations';
import VentureCard from '../components/VentureCard';
import PropertyModal from '../components/PropertyModal';

function matchesTypeFilter(project, filter) {
  if (filter === 'All' || filter === 'all') return true;
  const typeStr = (project.displayType || project.type || '').toLowerCase();
  switch (filter) {
    case 'Plots':
    case 'plots': 
      return typeStr.includes('plot') || typeStr.includes('open plot') || typeStr.includes('gated plot');
    case 'Villas':
    case 'villas': 
      return typeStr.includes('villa');
    case 'Farmland':
    case 'farmland': 
      return typeStr.includes('farmland') || typeStr.includes('farm');
    case 'Apartments':
    case 'apartments': 
      return typeStr.includes('apartment');
    default: return true;
  }
}

export default function PropertiesPage({ lang = 'en' }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const t = translations[lang]?.propertiesPage || translations.en.propertiesPage;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filterTabs = [
    { key: 'All', label: t.filters.all },
    { key: 'Plots', label: t.filters.plots },
    { key: 'Villas', label: t.filters.villas },
    { key: 'Farmland', label: t.filters.farmland },
    { key: 'Apartments', label: t.filters.apartments },
  ];

  const filteredProjects = properties.filter((project) =>
    matchesTypeFilter(project, selectedFilter)
  );

  return (
    <div className="w-full bg-[#F5F0EB] text-[#1A1A1A] min-h-screen font-sans">

      {/* Page Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 sm:pb-12">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-2 sm:mb-4">
            <div className="h-px w-6 bg-[#C8312A]"></div>
            <span className="eyebrow-tag text-[10px] sm:text-xs" style={{ color: '#C8312A', display: 'inline' }}>
              {t.eyebrow}
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] font-normal leading-tight mb-3 sm:mb-4 tracking-tight">
            {t.heading}
          </h1>
          <p className="text-[#6B6860] text-sm sm:text-base leading-relaxed font-sans">
            {t.subheading}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#E8E2DA]"></div>

      {/* Filter Tabs with horizontal scrolling support on small phones */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {filterTabs.map(({ key, label }) => {
            const isActive = selectedFilter === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedFilter(key)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-sans font-medium transition-all duration-200 cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-[#C8312A] text-white shadow-sm'
                    : 'bg-white text-[#6B6860] border border-[#E8E2DA] hover:border-[#C8312A] hover:text-[#C8312A]'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid: 1 col on xs, 2 col on sm/md, 3 col on lg */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <VentureCard
                key={project.id}
                project={project}
                onInspect={(p) => setSelectedProperty(p)}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 sm:py-24 text-center">
            <p className="text-[#9CA3AF] font-sans text-sm sm:text-base">
              {t.empty}
            </p>
          </div>
        )}
      </div>

      {/* Inspect Modal */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </div>
  );
}
