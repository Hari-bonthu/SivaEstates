import React, { useState } from 'react';
import { properties } from '../data/properties';
import { translations } from '../data/translations';
import { Images, ArrowRight, Eye, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectGalleryModal from './ProjectGalleryModal';

export default function GalleryStrip({ lang = 'en' }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const t = translations[lang]?.gallerySection || translations.en.gallerySection;

  const galleryVentures = properties.slice(0, 4);

  return (
    <section className="py-14 sm:py-20 bg-[#F5F0EB] border-t border-[#E8E2DA] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-px w-6 bg-[#C8312A]"></div>
              <span className="eyebrow-tag text-[10px] sm:text-xs" style={{ color: '#C8312A', display: 'inline' }}>
                {t.eyebrow}
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1A1A1A] font-normal tracking-tight max-w-xl">
              {t.heading}
            </h2>
            <p className="text-xs text-[#6B6860] mt-1">
              {t.clickPrompt}
            </p>
          </div>

          <Link
            to="/gallery/"
            className="text-xs sm:text-sm font-semibold text-[#C8312A] hover:text-[#A82822] transition-colors flex items-center space-x-1.5 shrink-0"
          >
            <span>{t.viewAll}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Responsive Gallery Grid: 1 col on xs, 2 col on sm/md, 4 col on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryVentures.map((item) => {
            const photoCount = item.gallery?.length || 1;
            const locationTag = (item.location || 'Rajahmundry').toUpperCase();
            return (
              <div
                key={item.id}
                onClick={() => setSelectedProject(item)}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#E8E2DA] hover:border-[#F5C6C4] transition-all duration-300 shadow-xs hover:shadow-xl active:scale-[0.98] flex flex-col justify-between h-full"
              >
                {/* Edge-to-edge Responsive Thumbnail with overlay */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#E8E2DA]">
                  <img
                    src={item.thumbnail}
                    alt={`${item.title} — Real Estate Site Progress in ${item.area || item.location}`}
                    width="400"
                    height="250"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Location badge — top-left */}
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#C8312A] text-white text-[9px] font-sans font-bold tracking-wide shadow-sm uppercase">
                    {locationTag.includes('KAKINADA') ? 'KAKINADA' : 'RAJAHMUNDRY'}
                  </div>

                  {/* Photo count badge — top-right */}
                  <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-xs text-white text-[9px] font-sans font-semibold flex items-center gap-1 shadow-sm">
                    <Images className="w-3 h-3 text-[#F5C6C4]" />
                    <span>{photoCount} Photos</span>
                  </div>

                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-3.5 py-1.5 rounded-full bg-white text-[#1A1A1A] font-bold text-xs shadow-lg flex items-center gap-1.5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5 text-[#C8312A]" />
                      <span>View Album</span>
                    </span>
                  </div>
                </div>

                {/* Caption info & Actions */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-[#6B6860] text-xs font-sans mb-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C8312A] shrink-0" aria-hidden="true" />
                      <span className="truncate">{item.area || item.location}</span>
                    </div>

                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#1A1A1A] leading-snug group-hover:text-[#C8312A] transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                  </div>

                  <div className="mt-3 pt-3 border-t border-[#E8E2DA] flex items-center justify-between text-xs font-semibold">
                    <span className="text-[#C8312A] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>Open Gallery</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                    <span className="text-[10px] text-[#9CA3AF] font-sans font-normal uppercase tracking-wider">
                      {item.category === 'completed' ? '100% Sold Out' : 'Plots Ready'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Pop-up Mini Window Lightbox */}
      {selectedProject && (
        <ProjectGalleryModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
