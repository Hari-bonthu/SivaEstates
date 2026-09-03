import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { translations } from '../data/translations';
import { properties } from '../data/properties';

export default function ContactForm({ lang }) {
  const t = translations[lang]?.contact || translations.en.contact;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Jetty Mayfair Luxury Villa Layout (Rajahmundry)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const waMessage = `Hi Siva Telugu Estates, my name is ${encodeURIComponent(formData.name)}. Phone: ${encodeURIComponent(formData.phone)}. Preferred Location: ${encodeURIComponent(formData.location)}. Note: ${encodeURIComponent(formData.message || 'I would like to book a site visit.')}`;
    
    window.open(`https://wa.me/919851633333?text=${waMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#0F1115] relative border-t border-white/5">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 bg-[#1A1D23] p-6 sm:p-7 rounded-3xl border border-white/10 space-y-5">

            {/* Big Siva Profile Image Card */}
            <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden bg-[#0F1115] border border-white/10 shadow-lg group">
              <img
                src="/images/siva_profile_cutout.png"
                alt="Mr. Siva Yedida - Managing Director"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#F5A623] block">
                  Founder &amp; Managing Director
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white font-heading mt-0.5">
                  Mr. Siva Yedida
                </h3>
              </div>
            </div>

            {/* Instant WhatsApp Routing Block */}
            <div className="p-5 rounded-2xl bg-[#0F1115] border border-white/10 space-y-1.5">
              <span className="text-[11px] font-mono font-bold text-[#F5A623] uppercase tracking-wider block">
                Instant WhatsApp Routing
              </span>
              <a
                href="tel:+919851633333"
                className="text-2xl sm:text-3xl font-extrabold text-white hover:text-[#F5A623] font-heading flex items-center transition-colors"
              >
                <Phone className="w-6 h-6 text-[#F5A623] mr-2.5 shrink-0" />
                <span>+91 98516 33333</span>
              </a>
            </div>

            {/* Instant Lead Dispatch Block */}
            <div className="p-5 rounded-2xl bg-[#0F1115] border border-white/10 text-xs space-y-1.5">
              <div className="flex items-center text-[#F5A623] font-bold font-heading">
                <MessageSquare className="w-4 h-4 mr-2 shrink-0" />
                <span className="text-sm">Instant Lead Dispatch</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Submissions automatically notify Director Mr. Siva Yedida via email and direct WhatsApp lead routing.
              </p>
            </div>

          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-[#1A1D23] p-6 sm:p-8 rounded-3xl border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">
                  {t.name} *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Siva Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#0F1115] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#F5A623] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">
                  {t.phone} *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98516 33333"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#0F1115] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#F5A623] text-sm font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">
                  {t.formVenture || t.preferredLocation || 'Preferred Venture / Location'}
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#0F1115] border border-white/10 text-white focus:outline-none focus:border-[#F5A623] text-sm"
                >
                  <optgroup label="Ongoing Ventures">
                    {properties.filter(p => p.category === 'ongoing').map((p) => (
                      <option key={p.id} value={`${p.title} (${p.location})`}>
                        {p.title} ({p.location})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Completed Ventures">
                    {properties.filter(p => p.category !== 'ongoing').map((p) => (
                      <option key={p.id} value={`${p.title} (${p.location})`}>
                        {p.title} ({p.location})
                      </option>
                    ))}
                  </optgroup>
                  <option value="General Real Estate / Advisory Inquiry">
                    General Real Estate / Advisory Inquiry
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">
                  {t.message}
                </label>
                <textarea
                  rows="3"
                  placeholder="Tell us about your plot requirement, preferred budget, or site visit date..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#0F1115] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#F5A623] text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#F5A623] hover:bg-[#E0951C] text-[#0F1115] font-extrabold text-base shadow-xl transition-all flex items-center justify-center space-x-2 cursor-pointer font-mono"
              >
                <Send className="w-5 h-5" />
                <span>{t.submit}</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-[#10B981]/20 text-[#10B981] text-xs text-center font-mono font-semibold flex items-center justify-center space-x-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Redirecting to WhatsApp to send your inquiry...</span>
                </div>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
