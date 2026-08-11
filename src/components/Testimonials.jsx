import React from 'react';
import { Star, Quote, Sparkles, UserCheck } from 'lucide-react';
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
    <section className="py-20 bg-navy-950 relative border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            {t.heading}
          </h2>
          <p className="text-base text-slate-300">
            {t.subheading}
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {reviews.map((rev, i) => (
            <div 
              key={i}
              className="glass-card p-6 rounded-3xl border border-slate-800 flex flex-col justify-between hover:border-gold-500/40 transition-all"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-gold-400 opacity-60" />
                
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 text-gold-400">
                  {Array.from({ length: rev.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-gold-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-200 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/60 mt-4">
                <h4 className="text-sm font-bold text-white font-heading">
                  {rev.name}
                </h4>
                <p className="text-xs text-gold-400 font-medium">
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
