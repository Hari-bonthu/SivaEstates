import React, { useState } from 'react';
import { properties } from '../data/properties';
import { translations } from '../data/translations';
import { Images, ArrowRight, Eye } from 'lucide-react';
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
            to="/gallery"
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
            return (
              <div
                key={item.id}
                onClick={() => setSelectedProject(item)}
                className="group cursor-pointer bg-white rounded-2xl p-2.5 border border-[#E8E2DA] hover:border-[#F5C6C4] transition-all shadow-xs hover:shadow-lg active:scale-[0.98]"
              >
                {/* Thumbnail with overlay */}
                <div className="relative rounded-xl overflow-hidden h-44 sm:h-48 md:h-52 bg-[#E8E2DA]">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Photo count badge */}
                  <div className="absolute top-2.5 right-2.5 px-2 py-1 rounded-lg bg-black/70 backdrop-blur-xs text-white text-[10px] font-sans font-semibold flex items-center gap-1">
                    <Images className="w-3 h-3 text-[#F5C6C4]" />
                    <span>{photoCount} Photos</span>
                  </div>

                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-[#C8312A]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-full bg-white text-[#1A1A1A] font-bold text-xs shadow-md flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-[#C8312A]" />
                      <span>View Album</span>
                    </span>
                  </div>
                </div>

                {/* Caption info */}
                <div className="mt-2.5 px-1 pb-1">
                  <p className="text-sm font-bold text-[#1A1A1A] font-sans leading-snug group-hover:text-[#C8312A] transition-colors line-clamp-1">
                    {item.title}
                  </p>
                  <p className="text-xs text-[#6B6860] font-sans mt-0.5 truncate">
                    {item.area || item.location}
                  </p>
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
