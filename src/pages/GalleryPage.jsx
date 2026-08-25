import React, { useState, useEffect } from 'react';
import { translations } from '../data/translations';
import { Camera, MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react';

const GALLERY_PHOTOS = [
  { src: './images/assets/20250604_152649.jpg', title: 'Jetty Mayfair - Grand Entrance Arch', location: 'Morampudi Lalacheruvu, Rajahmundry', tag: 'Infrastructure' },
  { src: './images/assets/20260814_103718.jpg', title: 'Blacktop 40ft Main Access Road', location: 'Siva Grand Corridor, Kakinada', tag: 'Roads' },
  { src: './images/assets/20260814_105640.jpg', title: 'Vastu Demarcated Corner Plots', location: 'Godavari Greens, Rajanagaram', tag: 'Plot Layout' },
  { src: './images/assets/20260814_110125(0).jpg', title: 'Avenue Plantation & Green Park', location: 'Sri Siva Residency, Samalkot', tag: 'Landscaping' },
  { src: './images/assets/20260814_111324.jpg', title: 'Underground Drainage & Electricity Grid', location: 'Siva Smart City, Kakinada', tag: 'Utilities' },
  { src: './images/assets/20260814_111610.jpg', title: 'Children Play Park & Walking Track', location: 'Royal Enclave, Diwancheruvu', tag: 'Amenities' },
  { src: './images/assets/IMG-20230709-WA0031.jpg', title: 'Plot Boundary Stones & Kerbing', location: 'Greenfield Layout, Korukonda', tag: 'Demarcation' },
  { src: './images/assets/IMG-20231027-WA0019.jpg', title: 'Compound Wall & 24/7 Security Gate', location: 'Jetty Mayfair Corridor', tag: 'Security' },
  { src: './images/luxury_villa_venture_1786442598108.jpg', title: 'Luxury Villa Gated Community Concept', location: 'Morampudi Corridor', tag: 'Villas' }
];

export default function GalleryPage({ lang = 'en' }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const tags = ['All', 'Infrastructure', 'Roads', 'Plot Layout', 'Landscaping', 'Amenities'];

  const filteredPhotos = filter === 'All'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(p => p.tag === filter);

  return (
    <div className="min-h-screen bg-[#F9F7F2] font-sans">
      {/* Header */}
      <section className="pt-16 pb-16 border-b border-[#E5E0D5] bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="brand-subtitle mb-2">SITE PROOF &amp; DEVELOPMENT GALLERY</span>
            <h1 className="text-4xl sm:text-5xl font-normal text-[#1B1C1C] font-serif tracking-tight leading-tight">
              Real Ground Reality — 100% Unfiltered Photos
            </h1>
            <p className="mt-4 text-base text-[#636863] leading-relaxed">
              Explore real development progress across our open plot layouts and gated communities in Rajahmundry, Kakinada, and surrounding growth corridors.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-8">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.05em] transition-all cursor-pointer ${
                  filter === tag
                    ? 'bg-[#1B1C1C] text-white shadow-xs'
                    : 'bg-white text-[#636863] border border-[#E5E0D5] hover:border-[#1B1C1C] hover:text-[#1B1C1C]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedPhoto(photo)}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E5E0D5] hover:border-[#4A5D4E] transition-all shadow-xs hover:shadow-md cursor-pointer flex flex-col"
              >
                <div className="relative h-60 overflow-hidden bg-[#F0EDED]">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-xs text-[10px] font-mono text-white">
                    {photo.tag}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#1B1C1C] font-serif group-hover:text-[#4A5D4E] transition-colors">
                      {photo.title}
                    </h3>
                    <p className="flex items-center text-xs text-[#636863] mt-1.5 font-sans">
                      <MapPin className="w-3.5 h-3.5 mr-1 shrink-0 text-[#4A5D4E]" />
                      <span>{photo.location}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="max-h-[70vh] w-full object-contain"
              />
            </div>
            <div className="p-6 bg-white">
              <span className="brand-subtitle">{selectedPhoto.tag}</span>
              <h3 className="text-xl font-bold text-[#1B1C1C] font-serif mt-1">{selectedPhoto.title}</h3>
              <p className="flex items-center text-xs text-[#636863] mt-1">
                <MapPin className="w-3.5 h-3.5 mr-1 text-[#4A5D4E]" />
                <span>{selectedPhoto.location}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
