import React from 'react';
import { Star, Quote, UserCheck } from 'lucide-react';
import { translations } from '../data/translations';

export default function Testimonials({ lang }) {
  const t = translations[lang].testimonials;

  const reviews = [
    {
      name: "Venkateswara Rao (Software Architect)",
      location: "Rajahmundry • Jetty Mayfair Buyer",
      text: "Bought an East facing 200 Sq.Yd plot in Jetty Mayfair layout through Mr. Siva Yedida. The title verification was 100% clear and spot registration was handled within 3 days. Excellent service!",
      rating: 5
    },
    {
      name: "Srinivas & Sunitha (Business Owner)",
      location: "Kakinada • ADB Highway Layout",
      text: "Siva Telugu Estates YouTube channel gave us complete confidence. Visited their new Kakinada branch and booked an open plot near Samalkot road. The land value has already grown 25%!",
      rating: 5
    },
    {
      name: "Ramesh Babu (NRI Investor - Dallas, USA)",
      location: "Rajahmundry • Diwancheruvu Corridor",
      text: "Being an NRI, transparent legal documents are my main concern. Siva Yedida garu sent video tours and legal copies via WhatsApp. Everything was clear and bank loan got approved smoothly.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-[#0F1115] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#1A1D23] border border-[#F5A623]/30 text-[#F5A623] text-xs font-mono tracking-widest uppercase">
            {t.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            {t.heading}
          </h2>
          <p className="text-sm text-slate-400">
            {t.subheading}
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {reviews.map((rev, i) => (
            <div 
              key={i}
              className="bg-[#1A1D23] p-7 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-[#F5A623]/40 transition-all"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-[#F5A623] opacity-60" />
                
                <div className="flex items-center space-x-1 text-[#F5A623]">
                  {Array.from({ length: rev.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-[#F5A623]" />
                  ))}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 mt-6">
                <h4 className="text-sm font-bold text-white font-heading">
                  {rev.name}
                </h4>
                <p className="text-xs text-[#F5A623] font-mono mt-0.5">
                  {rev.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
