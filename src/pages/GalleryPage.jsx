import React, { useState, useEffect } from 'react';
import { properties } from '../data/properties';
import { translations } from '../data/translations';
import { Images, Eye, ArrowRight } from 'lucide-react';
import ProjectGalleryModal from '../components/ProjectGalleryModal';
import YouTubeHub from '../components/YouTubeHub';

export default function GalleryPage({ lang = 'en' }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const t = translations[lang]?.galleryPage || translations.en.galleryPage;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filteredProperties = properties.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Villas') return (project.type || '').toLowerCase().includes('villa');
    if (activeFilter === 'Plots') return (project.type || '').toLowerCase().includes('plot');
    if (activeFilter === 'Completed') return project.category === 'completed';
    return true;
  });

  return (
    <div className="w-full bg-[#F5F0EB] text-[#1A1A1A] min-h-screen font-sans">

      {/* Hero Header */}
      <section className="pt-12 sm:pt-16 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          {/* <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <div className="h-px w-6 bg-[#C8312A]"></div>
            <span className="eyebrow-tag text-[10px] sm:text-xs" style={{ color: '#C8312A', display: 'inline' }}>
              {t.eyebrow}
            </span>
          </div> */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] font-normal leading-tight mb-3 sm:mb-4 tracking-tight">
            {t.heading}
          </h1>
          <p className="text-[#6B6860] text-sm sm:text-base md:text-lg leading-relaxed">
            {t.subheading}
          </p>
        </div>

        {/* Filter Pills with horizontal scroll support */}
        <div className="flex items-center gap-2 mt-6 sm:mt-8 overflow-x-auto pb-2 scrollbar-none">
          {[
            { key: 'All', label: t.filters.all },
            { key: 'Villas', label: t.filters.villas },
            { key: 'Plots', label: t.filters.plots },
            { key: 'Completed', label: t.filters.completed },
          ].map(({ key, label }) => {
            const isActive = activeFilter === key;
            return (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
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
      </section>

      {/* Gallery Grid: 1 col on xs, 2 col on sm/md, 3 col on lg */}
      <section className="pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProperties.map((project) => {
            const photoCount = project.gallery?.length || 1;
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="bg-white rounded-2xl overflow-hidden border border-[#E8E2DA] hover:border-[#F5C6C4] transition-all shadow-xs hover:shadow-xl group cursor-pointer active:scale-[0.99] flex flex-col justify-between"
              >
                {/* Main Card Image with overlay */}
                <div className="relative h-52 sm:h-60 overflow-hidden bg-[#E8E2DA]">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#C8312A] text-white text-[9px] sm:text-[10px] font-bold">
                    {project.location?.toUpperCase()}
                  </div>

                  <div className="absolute top-3 right-3 px-2.5 py-0.5 sm:py-1 rounded-full bg-black/70 backdrop-blur-xs text-white text-[9px] sm:text-[10px] font-semibold flex items-center gap-1">
                    <Images className="w-3 h-3 text-[#F5C6C4]" />
                    <span>{photoCount} Photos</span>
                  </div>

                  {/* Hover Popup Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3.5 sm:px-4 py-2 rounded-full bg-white text-[#1A1A1A] font-bold text-xs shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-4 h-4 text-[#C8312A]" />
                      <span>Open Photo Gallery</span>
                    </span>
                  </div>
                </div>

                {/* Card Meta */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-bold text-[#C8312A] uppercase tracking-wider block mb-1">
                      {project.displayType || 'PLOTS & VILLAS'}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1A1A1A] group-hover:text-[#C8312A] transition-colors leading-snug line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#6B6860] mt-1 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E8E2DA] flex items-center justify-between text-xs font-semibold text-[#1A1A1A]">
                    <span className="text-[#6B6860] truncate pr-2">{project.area}</span>
                    <span className="text-[#C8312A] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform shrink-0">
                      <span>View Album</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* YouTube Video Tour Hub Section */}
      <YouTubeHub lang={lang} />

      {/* Lightbox Pop-up Modal */}
      {selectedProject && (
        <ProjectGalleryModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </div>
  );
}
