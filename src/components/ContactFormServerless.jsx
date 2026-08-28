import React, { useState } from 'react';
import { Phone, Send, MapPin, Clock, CheckCircle2, MessageSquare } from 'lucide-react';
import { translations } from '../data/translations';
import { properties } from '../data/properties';

export default function ContactFormServerless({ lang = 'en' }) {
  const t = translations[lang]?.contact || translations.en.contact;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Jetty Mayfair Luxury Villa Layout (Rajahmundry)',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formPayload = new FormData();
      formPayload.append("access_key", "55a4bf57-4cfb-4a58-8b9f-ba57dfc6bb64");
      formPayload.append("subject", `New Real Estate Inquiry from ${formData.name} (${formData.location})`);
      formPayload.append("from_name", "Siva Telugu Estates Web Lead");
      formPayload.append("name", formData.name);
      formPayload.append("phone", formData.phone);
      formPayload.append("email", formData.email || "Not Provided");
      formPayload.append("preferred_branch", formData.location);
      formPayload.append("message", formData.message || "Site visit request.");

      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload
      });
    } catch (err) {
      console.log("Form dispatch note: Proceeding to WhatsApp lead routing.");
    }

    setIsSubmitting(false);
    setSubmitted(true);

    const waMessage = `Hi Siva Telugu Estates, my name is ${encodeURIComponent(formData.name)}. Phone: ${encodeURIComponent(formData.phone)}. Preferred Location: ${encodeURIComponent(formData.location)}. Note: ${encodeURIComponent(formData.message || 'I would like to book a site visit.')}`;
    
    setTimeout(() => {
      window.open(`https://wa.me/919851633333?text=${waMessage}`, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-[#F5F0EB] relative border-t border-[#E8E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <div className="h-px w-8 bg-[#C8312A]"></div>
            <span className="eyebrow-tag" style={{ color: '#C8312A', display: 'inline' }}>
              {t.eyebrow}
            </span>
            <div className="h-px w-8 bg-[#C8312A]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#1A1A1A] tracking-tight font-serif">
            {t.heading}
          </h2>
          <p className="text-sm text-[#6B6860]">
            {t.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Big Profile + Direct Routing Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-[#E5E0D5] shadow-xs flex flex-col space-y-5">
            
            {/* Big Siva Profile Portrait Image */}
            <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden bg-[#F9F7F2] border border-[#E5E0D5] shadow-xs group">
              <img
                src="./images/siva_profile_cutout.png"
                alt="Mr. Siva Yedida - Managing Director"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              {/* Founder Tag Overlay at bottom of photo */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-4 text-white">
                <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#E8E2DA] block">
                  Founder &amp; Managing Director
                </span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-white mt-0.5">
                  Mr. Siva Yedida
                </h3>
              </div>
            </div>

            {/* Instant WhatsApp Routing Block */}
            <div className="p-5 rounded-2xl bg-[#F9F7F2] border border-[#E5E0D5] space-y-1.5">
              <span className="text-[10px] font-sans font-semibold text-[#6B6860] uppercase tracking-[0.2em] block">
                Instant WhatsApp Routing
              </span>
              <a
                href="tel:+919851633333"
                className="text-2xl sm:text-3xl font-bold text-[#1B1C1C] hover:text-[#3E5C49] font-serif flex items-center transition-colors"
              >
                <Phone className="w-6 h-6 text-[#3E5C49] mr-2.5 shrink-0" />
                <span>+91 98516 33333</span>
              </a>
            </div>

            {/* Instant Lead Dispatch Block */}
            <div className="p-5 rounded-2xl bg-[#F9F7F2] border border-[#E5E0D5] text-xs space-y-1.5">
              <div className="flex items-center text-[#3E5C49] font-bold font-sans">
                <MessageSquare className="w-4 h-4 mr-2 shrink-0" />
                <span className="text-sm font-serif">Instant Lead Dispatch</span>
              </div>
              <p className="text-xs text-[#6B6860] leading-relaxed">
                Submissions automatically notify Director Mr. Siva Yedida via email and direct WhatsApp lead routing.
              </p>
            </div>

          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8E2DA] shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div>
                <label className="block text-xs font-sans font-bold text-[#2D2D2D] uppercase mb-2">
                  {t.formName || 'Full Name'} *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Siva Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#F5F0EB] border border-[#E8E2DA] text-[#1A1A1A] placeholder-[#6B6860] focus:outline-none focus:border-[#C8312A] text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans font-bold text-[#2D2D2D] uppercase mb-2">
                    {t.formPhone || 'Phone Number'} *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98516 33333"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#F5F0EB] border border-[#E8E2DA] text-[#1A1A1A] placeholder-[#6B6860] focus:outline-none focus:border-[#C8312A] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans font-bold text-[#2D2D2D] uppercase mb-2">
                    {t.formEmail || 'Email Address'}
                  </label>
                  <input
                    type="email"
                    placeholder="name@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#F5F0EB] border border-[#E8E2DA] text-[#1A1A1A] placeholder-[#6B6860] focus:outline-none focus:border-[#C8312A] text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans font-bold text-[#2D2D2D] uppercase mb-2">
                  {t.formVenture || 'Preferred Venture / Location'}
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#F5F0EB] border border-[#E8E2DA] text-[#1A1A1A] focus:outline-none focus:border-[#C8312A] text-sm font-sans"
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
                <label className="block text-xs font-sans font-bold text-[#2D2D2D] uppercase mb-2">
                  {t.formMessage || 'Questions or Preferred Visit Date'}
                </label>
                <textarea
                  rows="3"
                  placeholder="Tell us about your budget, plot size preference or request a weekend car pickup..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#F5F0EB] border border-[#E8E2DA] text-[#1A1A1A] placeholder-[#6B6860] focus:outline-none focus:border-[#C8312A] text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl btn-red text-white font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer font-sans"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Submitting Request...' : (t.formSubmit || 'Book Free Site Visit & Cab')}</span>
              </button>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center space-x-2 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>{t.formSuccessDesc || 'Request received! Redirecting to WhatsApp consultation...'}</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
