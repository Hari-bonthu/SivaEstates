import React, { useEffect } from 'react';
import { translations } from '../data/translations';
import { ShieldCheck, Award, Users, CheckCircle2, MapPin, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage({ lang = 'en' }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const t = translations[lang] || translations.en;

  const milestones = [
    { year: '2008', title: 'Founded with Vision', desc: 'Started with single layout development in Rajahmundry with 100% legal title assurance.' },
    { year: '2014', title: 'Godavari Expansion', desc: 'Expanded across prime growth corridors in East & West Godavari districts.' },
    { year: '2020', title: '1,000+ Plot Owners', desc: 'Crossed milestone of 1,000 registered plot owners with zero litigations.' },
    { year: '2024+', title: 'Kakinada Smart City & Gated Villas', desc: 'Launched luxury gated villa layouts and new dedicated Kakinada branch office.' }
  ];

  return (
    <div className="min-h-screen bg-[#F9F7F2] font-sans">
      {/* Hero Header */}
      <section className="pt-16 pb-20 border-b border-[#E5E0D5] bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="brand-subtitle mb-2">ABOUT SIVA TELUGU ESTATES</span>
            <h1 className="text-4xl sm:text-5xl font-normal text-[#1B1C1C] font-serif tracking-tight leading-tight">
              Building Legacy, Trust &amp; Heritage in the Godavari Region
            </h1>
            <p className="mt-4 text-base text-[#636863] leading-relaxed">
              For over 15 years, Siva Telugu Estates has been the trusted real estate benchmark for residential open plots, luxury gated villa communities, and high-appreciation land assets across Rajahmundry and Kakinada.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 border-b border-[#E5E0D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#E5E0D5] bg-white shadow-md">
                <img
                  src="./images/siva_yedida_professional.jpg"
                  alt="Mr. Siva Yedida"
                  className="w-full h-[420px] object-cover object-top"
                />
                <div className="p-6 bg-white border-t border-[#E5E0D5]">
                  <span className="brand-subtitle">FOUNDER &amp; MANAGING DIRECTOR</span>
                  <h3 className="text-2xl font-bold text-[#1B1C1C] font-serif">Siva Yedida</h3>
                  <p className="text-xs text-[#636863] mt-1">15+ Years Experience in Land Scrutiny &amp; Community Development</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="brand-subtitle">LEADERSHIP MESSAGE</span>
              <h2 className="text-3xl sm:text-4xl font-normal text-[#1B1C1C] font-serif">
                "Our reputation is built on clear titles and honest handovers."
              </h2>
              <p className="text-sm sm:text-base text-[#636863] leading-relaxed">
                When you buy land with Siva Telugu Estates, you are not just purchasing square yards — you are securing your family’s generational heritage. We personally conduct comprehensive 30-year legal link title checks, obtain all DTCP &amp; VMRDA approvals, and ensure physical infrastructure is delivered before registration.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-[#E5E0D5]">
                <div>
                  <p className="text-3xl font-serif text-[#1B1C1C]">50+</p>
                  <p className="text-xs text-[#636863] mt-1 font-sans">Delivered Ventures</p>
                </div>
                <div>
                  <p className="text-3xl font-serif text-[#1B1C1C]">1500+</p>
                  <p className="text-xs text-[#636863] mt-1 font-sans">Plot Owners</p>
                </div>
                <div>
                  <p className="text-3xl font-serif text-[#1B1C1C]">100%</p>
                  <p className="text-xs text-[#636863] mt-1 font-sans">Clear Title Record</p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#1B1C1C] hover:bg-[#334537] text-white text-xs font-sans font-bold tracking-[0.1em] transition-all shadow-sm"
                >
                  <span>Request Direct Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Milestones / Journey */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="brand-subtitle">OUR JOURNEY</span>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#1B1C1C] font-serif mt-2">
              A Proven Track Record of Value Creation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {milestones.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-[#E5E0D5] shadow-xs space-y-3">
                <span className="text-2xl font-serif text-[#4A5D4E] font-bold">{item.year}</span>
                <h4 className="text-base font-bold text-[#1B1C1C] font-serif">{item.title}</h4>
                <p className="text-xs text-[#636863] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
