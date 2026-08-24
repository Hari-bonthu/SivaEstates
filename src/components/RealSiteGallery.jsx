import React, { useState } from 'react';
import { Camera, MapPin, CheckCircle, ExternalLink, X, ChevronLeft, ChevronRight, MessageCircle, ShieldCheck } from 'lucide-react';
import { galleryImages } from '../data/galleryImages';
import { translations } from '../data/translations';

export default function RealSiteGallery({ lang }) {
  const t = translations[lang]?.gallery || {
    badge: "100% REAL GROUND PROOF",
    heading: "Live Venture Developments & Customer Moments",
    subheading: "Browse verified ground photos of our active gated layouts, blacktop roads, infrastructure work, and customer site visits across Godavari.",
    all: "All Photos",
    ongoing: "Ongoing Layouts",
    visits: "Customer Visits",
    completed: "Completed Projects",
    inquirePhoto: "Inquire About This Location",
    viewPhoto: "Inspect High-Res Photo"
  };

  const [activeTab, setActiveTab] = useState('all');
  const [activeModalImage, setActiveModalImage] = useState(null);

  const filteredImages = activeTab === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeTab);

  const openModal = (img) => {
    setActiveModalImage(img);
  };

  const closeModal = () => {
    setActiveModalImage(null);
  };

  const nextModal = () => {
    if (!activeModalImage) return;
    const currentIndex = filteredImages.findIndex(i => i.id === activeModalImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setActiveModalImage(filteredImages[nextIndex]);
  };

  const prevModal = () => {
    if (!activeModalImage) return;
    const currentIndex = filteredImages.findIndex(i => i.id === activeModalImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setActiveModalImage(filteredImages[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-[#F9F7F2] relative border-t border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-[#EAF0EC] border border-[#4A5D4E]/30 text-[#334537] text-xs font-mono tracking-widest uppercase shadow-sm">
            <Camera className="w-3.5 h-3.5 text-[#4A5D4E]" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#1B1C1C] tracking-tight font-serif">
            {t.heading}
          </h2>
          <p className="text-sm text-[#636863]">
            {t.subheading}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-10 font-mono text-xs">
          {[
            { id: 'all', label: t.all, count: galleryImages.length },
            { id: 'ongoing', label: t.ongoing, count: galleryImages.filter(i => i.category === 'ongoing').length },
            { id: 'visits', label: t.visits, count: galleryImages.filter(i => i.category === 'visits').length },
            { id: 'completed', label: t.completed, count: galleryImages.filter(i => i.category === 'completed').length }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl font-bold transition-all cursor-pointer flex items-center space-x-2 ${
                activeTab === tab.id
                  ? 'bg-[#4A5D4E] text-white shadow-md'
                  : 'bg-white border border-[#E5E0D5] text-[#2D2D2D] hover:bg-[#F0EDED]'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-[#F0EDED] text-[#636863]'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Photo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredImages.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E5E0D5] hover:border-[#DBCBB0] transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div>
                {/* Image Box */}
                <div 
                  className="relative h-60 overflow-hidden bg-[#F0EDED] cursor-pointer"
                  onClick={() => openModal(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1C1C]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md text-[#1B1C1C] text-xs font-mono font-bold flex items-center space-x-1 shadow-lg">
                      <Camera className="w-3.5 h-3.5 text-[#4A5D4E]" />
                      <span>{t.viewPhoto}</span>
                    </span>
                  </div>

                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#334537] text-[10px] font-mono font-bold border border-[#E5E0D5]">
                    {item.categoryName}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-2">
                  <div className="flex items-center text-xs text-[#4A5D4E] font-mono font-bold">
                    <MapPin className="w-3.5 h-3.5 mr-1" />
                    <span>{item.location}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1B1C1C] font-serif leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#636863] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer WhatsApp CTA */}
              <div className="p-6 pt-0 border-t border-[#E5E0D5] mt-4 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#636863] font-semibold">
                  Venture: <strong className="text-[#1B1C1C]">{item.venture}</strong>
                </span>

                <a
                  href={`https://wa.me/919851633333?text=Hi%20Siva%20Telugu%20Estates,%20I%20am%20interested%20in%20visiting%20the%20${encodeURIComponent(item.venture)}%20venture%20shown%20in%20your%20photo%20gallery.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-[#EAF0EC] hover:bg-[#4A5D4E] hover:text-white text-[#4A5D4E] text-xs font-mono font-bold transition-all flex items-center space-x-1.5"
                  title="Inquire about this photo"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Inquire</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeModalImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#E5E0D5]">
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev / Next controls */}
              <button
                onClick={prevModal}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 hover:bg-white text-[#1B1C1C] shadow-lg transition-transform hover:scale-110"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextModal}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 hover:bg-white text-[#1B1C1C] shadow-lg transition-transform hover:scale-110"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Modal Image */}
              <div className="relative h-[360px] sm:h-[500px] w-full bg-[#1B1C1C]">
                <img
                  src={activeModalImage.image}
                  alt={activeModalImage.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Modal Details Bar */}
              <div className="p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#E5E0D5]">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-xs font-mono text-[#4A5D4E] font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{activeModalImage.location} • {activeModalImage.venture}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1B1C1C] font-serif">
                    {activeModalImage.title}
                  </h3>
                  <p className="text-xs text-[#636863]">
                    {activeModalImage.desc}
                  </p>
                </div>

                <a
                  href={`https://wa.me/919851633333?text=Hi%20Siva%20Telugu%20Estates,%20I%20saw%20this%20photo%20of%20${encodeURIComponent(activeModalImage.title)}%20and%20want%20to%20schedule%20a%20site%20visit.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-[#4A5D4E] hover:bg-[#334537] text-white font-mono font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-2 shrink-0"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.inquirePhoto}</span>
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
