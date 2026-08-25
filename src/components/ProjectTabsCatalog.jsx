import React, { useState } from 'react';
import { properties } from '../data/properties';
import { translations } from '../data/translations';
import { ArrowRight } from 'lucide-react';
import VentureCard from './VentureCard';
import PropertyModal from './PropertyModal';
import { Link } from 'react-router-dom';

export default function ProjectTabsCatalog({ lang = 'en' }) {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const t = translations[lang]?.developments || translations.en.developments;

  // Use the first 3 featured properties from the data
  const featuredVentures = properties.filter(p => p.featured).slice(0, 3);

  return (
    <section id="ventures" className="py-20 bg-[#F5F0EB] relative border-t border-[#E8E2DA] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="eyebrow-tag mb-2" style={{ color: '#C8312A' }}>
              {t.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] font-normal tracking-tight mt-1">
              {t.heading}
            </h2>
          </div>

          <Link
            to="/properties"
            className="text-sm font-semibold text-[#C8312A] hover:text-[#A82822] transition-colors flex items-center space-x-1.5 shrink-0"
          >
            <span>{t.viewAll}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Horizontal scroll on mobile, 3-col grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVentures.map((project) => (
            <VentureCard
              key={project.id}
              project={project}
              onInspect={(p) => {
                const fullProp = properties.find((item) => item.id === p.id) || p;
                setSelectedProperty(fullProp);
              }}
            />
          ))}
        </div>

        {/* Inspect Modal */}
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
