import React, { useState, useEffect } from 'react';
import { properties } from '../data/properties';
import VentureCard from '../components/VentureCard';
import PropertyModal from '../components/PropertyModal';

const FILTERS = ['All', 'Plots', 'Villas', 'Farmland', 'Apartments'];

function matchesTypeFilter(project, filter) {
  if (filter === 'All') return true;
  const typeStr = (project.displayType || project.type || '').toLowerCase();
  switch (filter) {
    case 'Plots': return typeStr.includes('plot') || typeStr.includes('open plot') || typeStr.includes('gated plot');
    case 'Villas': return typeStr.includes('villa');
    case 'Farmland': return typeStr.includes('farmland') || typeStr.includes('farm');
    case 'Apartments': return typeStr.includes('apartment');
    default: return true;
  }
}

export default function PropertiesPage({ lang = 'en' }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filteredProjects = properties.filter((project) =>
    matchesTypeFilter(project, selectedFilter)
  );

  return (
    <div className="w-full bg-[#F5F0EB] text-[#1A1A1A] min-h-screen font-sans">

      {/* Page Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-6 bg-[#C8312A]"></div>
            <span className="eyebrow-tag" style={{ color: '#C8312A', display: 'inline' }}>
              PORTFOLIO
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] font-normal leading-tight mb-4 tracking-tight">
            Every address we build, in one place
          </h1>
          <p className="text-[#6B6860] text-sm sm:text-base leading-relaxed font-sans">
            Filter by what you are looking for. Each project page carries approvals, pricing and amenities.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#E8E2DA]"></div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap items-center gap-2">
          {FILTERS.map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-sans font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#C8312A] text-white shadow-sm'
                    : 'bg-white text-[#6B6860] border border-[#E8E2DA] hover:border-[#C8312A] hover:text-[#C8312A]'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <VentureCard
                key={project.id}
                project={project}
                onInspect={(p) => setSelectedProperty(p)}
              />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="text-[#9CA3AF] font-sans text-base">
              No projects in this category yet. Check back soon.
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
