import React from 'react';
import { Star, Quote } from 'lucide-react';
import { translations } from '../data/translations';

export default function Testimonials({ lang = 'en' }) {
  const t = translations[lang]?.testimonials || translations.en.testimonials;

  const reviews = [
    {
      name: "Venkateswara Rao",
      role: "Software Architect",
      location: "Rajahmundry • Jetty Mayfair Buyer",
      text: "Bought an East facing 200 Sq.Yd plot in Jetty Mayfair layout through Mr. Siva Yedida. The title verification was 100% clear and spot registration was handled within 3 days. Excellent service!",
      rating: 5
    },
    {
      name: "Srinivas & Sunitha",
      role: "Business Owners",
      location: "Kakinada • ADB Highway Layout",
      text: "Siva Telugu Estates YouTube channel gave us complete confidence. Visited their new Kakinada branch and booked an open plot near Samalkot road. The land value has already grown 25%!",
      rating: 5
    },
    {
      name: "Ramesh Babu",
      role: "NRI Investor — Dallas, USA",
      location: "Rajahmundry • Diwancheruvu Corridor",
      text: "Being an NRI, transparent legal documents are my main concern. Siva Yedida garu sent video tours and legal copies via WhatsApp. Everything was clear and bank loan got approved smoothly.",
      rating: 5
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-white relative border-t border-[#E8E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="flex items-center justify-center space-x-3">
            <div className="h-px w-8 bg-[#C8312A]"></div>
            <span className="eyebrow-tag text-[10px] sm:text-xs" style={{ display: 'inline', color: '#C8312A' }}>
              {t.badge}
            </span>
            <div className="h-px w-8 bg-[#C8312A]"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1A1A1A] tracking-tight font-serif">
            {t.heading}
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6860] font-sans max-w-2xl mx-auto">
            {t.subheading}
          </p>
        </div>

        {/* Reviews Cards Grid: 1 col on mobile, 3 col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="bg-[#F5F0EB] p-5 sm:p-7 rounded-2xl border border-[#E8E2DA] flex flex-col justify-between hover:border-[#F5C6C4] transition-all shadow-xs"
            >
              <div className="space-y-3 sm:space-y-4">
                <Quote className="w-6 h-6 sm:w-7 sm:h-7 text-[#C8312A] opacity-60" />

                <div className="flex items-center space-x-1 text-[#F5A623]">
                  {Array.from({ length: rev.rating }).map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-[#F5A623]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#2D2D2D] leading-relaxed font-sans">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 sm:pt-5 border-t border-[#E8E2DA] mt-4 sm:mt-5">
                <h4 className="text-xs sm:text-sm font-bold text-[#1A1A1A] font-sans">
                  {rev.name}
                </h4>
                <p className="text-[10px] sm:text-[11px] text-[#6B6860] font-sans mt-0.5">{rev.role}</p>
                <p className="text-[10px] sm:text-[11px] text-[#C8312A] font-sans mt-0.5">{rev.location}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
