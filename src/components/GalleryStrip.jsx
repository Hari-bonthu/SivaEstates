import React from 'react';

// Use real project site photos from the assets folder
const galleryItems = [
  {
    src: './images/luxury_villa_venture_1786442598108.jpg',
    project: 'Jetty Mayfair Luxury Villa Layout',
    location: 'Rajahmundry',
  },
  {
    src: './images/assets/20250604_152649.jpg',
    project: 'Seshadri Heights Gated Community',
    location: 'Rajahmundry',
  },
  {
    src: './images/kakinada_branch_venture_1786442659994.jpg',
    project: 'Kakinada Port & Smart City Layout',
    location: 'Kakinada',
  },
  {
    src: './images/assets/20260814_100950.jpg',
    project: 'Sreenivasam Landmark Venture',
    location: 'Rajahmundry',
  },
];

export default function GalleryStrip() {
  return (
    <section className="py-20 bg-[#F5F0EB] border-t border-[#E8E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-px w-6 bg-[#C8312A]"></div>
            <span className="eyebrow-tag" style={{ color: '#C8312A', display: 'inline' }}>
              SITE GALLERY
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-normal tracking-tight max-w-xl">
            See the land before you see the paperwork
          </h2>
        </div>

        {/* Horizontal scroll gallery */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, i) => (
            <div key={i} className="group">
              <div className="rounded-2xl overflow-hidden h-48 sm:h-56 bg-[#E8E2DA]">
                <img
                  src={item.src}
                  alt={item.project}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-3 px-1">
                <p className="text-sm font-semibold text-[#1A1A1A] font-sans leading-snug">
                  {item.project}
                </p>
                <p className="text-xs text-[#6B6860] font-sans mt-0.5">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
