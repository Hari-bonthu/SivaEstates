import React, { useState, useEffect } from 'react';
import { properties } from '../data/properties';
import { translations } from '../data/translations';
import { siteVisitsData } from '../data/siteVisits';
import { Images, Eye, ArrowRight, MapPin, Car, CheckCircle2, Phone, MessageCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectGalleryModal from '../components/ProjectGalleryModal';
import YouTubeHub from '../components/YouTubeHub';
import SEOHead from '../components/SEOHead';

export default function GalleryPage({ lang = 'en' }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedSiteVisitIdx, setSelectedSiteVisitIdx] = useState(null);
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
    <>
      <SEOHead
        title="Photo Gallery & Site Visits | Real Estate Ventures | Siva Telugu Estates Rajahmundry"
        description="Browse real photos from Siva Telugu Estates' gated community site visits across Rajahmundry and Kakinada. See Jetty Mayfair, Sreenivasam Lake View Villas, Seshadri Heights and more."
        canonicalUrl="https://sivateluguestates.com/gallery"
      />
      <div className="w-full bg-[#F5F0EB] text-[#1A1A1A] min-h-screen font-sans">

      {/* Hero Header */}
      <section className="pt-12 sm:pt-16 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] font-normal leading-tight mb-3 sm:mb-4 tracking-tight">
            {t.heading}
          </h1>
          <p className="text-[#6B6860] text-sm sm:text-base md:text-lg leading-relaxed">
            {t.subheading}
          </p>
        </div>

        {/* Filter Pills with horizontal scroll support */}
        <div className="flex items-center gap-2 mt-6 sm:mt-8 overflow-x-auto pb-2 no-scrollbar scrollbar-none">
          {[
            { key: 'All', label: t.filters?.all || 'All Ventures' },
            { key: 'Villas', label: t.filters?.villas || 'Luxury Villas' },
            { key: 'Plots', label: t.filters?.plots || 'Open Plots' },
            { key: 'Completed', label: t.filters?.completed || 'Completed' },
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

      {/* Venture Galleries Grid */}
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
                    <span>{photoCount} Verified Photos</span>
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

      {/* ─── Dedicated Site Visits & Ground Proof Section ─── */}
      <section className="py-16 sm:py-20 bg-white border-y border-[#E8E2DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="max-w-3xl mb-10 sm:mb-12">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <Car className="w-4 h-4 text-[#C8312A]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#C8312A]">
                REAL GROUND PROOF &amp; CUSTOMER VISITS
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1A1A1A] font-normal leading-tight tracking-tight">
              Customer Site Visits &amp; Ground Progress
            </h2>
            <p className="text-[#6B6860] text-xs sm:text-sm md:text-base mt-2 leading-relaxed">
              Authentic ground inspection moments from our complimentary AC car site visits with plot buyers, families, and NRI investors across Rajahmundry &amp; Kakinada.
            </p>
          </div>

          {/* Site Visits Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {siteVisitsData.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedSiteVisitIdx(idx)}
                className="bg-[#F5F0EB] rounded-2xl overflow-hidden border border-[#E8E2DA] hover:border-[#C8312A] transition-all shadow-xs hover:shadow-lg group cursor-pointer flex flex-col justify-between"
              >
                <div className="relative h-48 sm:h-52 overflow-hidden bg-[#E8E2DA]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-xs text-white text-[9px] font-bold">
                    {item.tag}
                  </div>
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-full bg-white text-[#1A1A1A] font-bold text-[11px] shadow flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-[#C8312A]" />
                      <span>View Full Image</span>
                    </span>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-sm sm:text-base font-bold text-[#1A1A1A] group-hover:text-[#C8312A] transition-colors leading-snug line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-[#6B6860] mt-1 line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-[#E8E2DA] flex items-center justify-between text-[11px] text-[#6B6860]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#C8312A]" />
                      <span className="truncate">{item.location}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Complimentary Car Transit Banner */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-[#1A1A1A] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8312A] text-white text-[10px] font-bold tracking-wide uppercase">
                <Car className="w-3 h-3" />
                <span>Complimentary Transit</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold">
                Book a Free AC Car Site Inspection
              </h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-xl leading-relaxed">
                Experience Rajahmundry &amp; Kakinada ventures firsthand. Free pickup and drop-off facility with legal document verification directly on location.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-center md:justify-end">
              <a
                href="https://wa.me/919851633333?text=Hello%20Siva%20Telugu%20Estates,%20I%20want%20to%20book%20a%20free%20AC%20car%20site%20visit."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red px-5 py-3 text-xs font-bold flex items-center gap-2 shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp to Book Visit</span>
              </a>
              <a
                href="tel:+919851633333"
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-2 border border-white/15 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#F5A623]" />
                <span>+91 98516 33333</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* YouTube Video Tour Hub Section */}
      <YouTubeHub lang={lang} />

      {/* Venture Gallery Modal */}
      {selectedProject && (
        <ProjectGalleryModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Site Visit Lightbox Modal */}
      {selectedSiteVisitIdx !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedSiteVisitIdx(null)}
        >
          <div 
            className="relative z-10 w-full max-w-4xl h-[90vh] sm:h-[86vh] max-h-[820px] bg-[#141414] text-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-3 sm:p-4 md:p-5 flex items-center justify-between border-b border-white/10 bg-[#161616] shrink-0">
              <div className="min-w-0 pr-2">
                <span className="px-2 py-0.5 rounded-full bg-[#C8312A] text-white text-[10px] font-bold tracking-wide uppercase">
                  {siteVisitsData[selectedSiteVisitIdx]?.tag}
                </span>
                <h3 className="text-sm sm:text-base md:text-lg font-serif font-bold text-white mt-1 truncate">
                  {siteVisitsData[selectedSiteVisitIdx]?.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedSiteVisitIdx(null)}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-[#C8312A] text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 active:scale-95"
                title="Close (Esc)"
                aria-label="Close"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Modal Image Display with Prev/Next Controls */}
            <div className="relative flex-1 min-h-0 bg-black flex items-center justify-center p-2 sm:p-4 overflow-hidden select-none">
              <img
                src={siteVisitsData[selectedSiteVisitIdx]?.image}
                alt={siteVisitsData[selectedSiteVisitIdx]?.title}
                className="max-w-full max-h-full w-auto h-auto object-contain select-none transition-all duration-200 drop-shadow-md pointer-events-none"
              />

              <button
                onClick={() => setSelectedSiteVisitIdx((prev) => (prev - 1 + siteVisitsData.length) % siteVisitsData.length)}
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-[#C8312A] text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs active:scale-90 z-10"
                title="Previous photo"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={() => setSelectedSiteVisitIdx((prev) => (prev + 1) % siteVisitsData.length)}
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-[#C8312A] text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs active:scale-90 z-10"
                title="Next photo"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Modal Footer Caption */}
            <div className="p-3 sm:p-4 bg-[#161616] border-t border-white/10 flex items-center justify-between text-xs shrink-0">
              <div className="flex items-center gap-2 text-[#9CA3AF]">
                <MapPin className="w-3.5 h-3.5 text-[#C8312A]" />
                <span className="truncate">{siteVisitsData[selectedSiteVisitIdx]?.location}</span>
                <span className="text-white/20 mx-1">•</span>
                <span className="font-mono text-white/70">{selectedSiteVisitIdx + 1} / {siteVisitsData.length}</span>
              </div>
              <a
                href="https://wa.me/919851633333?text=Hello%20Siva%20Telugu%20Estates,%20I%20am%20interested%20in%20a%20site%20visit."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red px-3.5 py-2 text-xs font-bold flex items-center gap-1.5 shrink-0"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Schedule Visit</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  </>
  );
}
