import React, { useState } from 'react';
import { Phone, Send, MapPin, Clock, CheckCircle2, MessageSquare } from 'lucide-react';
import { translations } from '../data/translations';

export default function ContactFormServerless({ lang = 'en' }) {
  const t = translations[lang]?.contact || translations.en.contact;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Rajahmundry HQ',
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
      window.open(`https://wa.me/919876543210?text=${waMessage}`, '_blank');
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
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8E2DA] space-y-6 shadow-sm">
              
              <div>
                <span className="text-[11px] font-sans font-medium text-[#C8312A] uppercase tracking-[0.2em] block mb-1">
                  DIRECT CONSULTATION HOTLINE
                </span>
                <a
                  href="tel:+919876543210"
                  className="text-3xl font-bold text-[#1A1A1A] hover:text-[#C8312A] font-serif flex items-center mt-1 transition-colors"
                >
                  <Phone className="w-7 h-7 text-[#C8312A] mr-3 animate-pulse" />
                  +91 98765 43210
                </a>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#E8E2DA] text-xs text-[#2D2D2D]">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#C8312A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1A1A1A] block font-serif">Rajahmundry Head Office:</strong>
                    Danavaipeta, Rajahmundry, Andhra Pradesh - 533103.
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#C8312A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1A1A1A] block font-serif">Kakinada Branch Office:</strong>
                    Ramanayyapeta Commercial Center, Kakinada, Andhra Pradesh - 533003.
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-[#C8312A] shrink-0" />
                  <div>
                    <strong className="text-[#1A1A1A] block">Mon - Sun: 9:00 AM - 8:00 PM</strong>
                    Free AC Car Facility Available for Site Visits
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F5F0EB] border border-[#E8E2DA] text-[#2D2D2D] text-xs font-sans space-y-1">
                <div className="flex items-center text-[#C8312A] font-bold">
                  <MessageSquare className="w-4 h-4 mr-1.5" />
                  <span>Instant WhatsApp Routing</span>
                </div>
                <p className="text-[11px] text-[#6B6860]">
                  Submissions automatically notify our team and open a direct WhatsApp chat with project brochures.
                </p>
              </div>

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
                    placeholder="+91 98765 43210"
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
                  {t.formVenture || 'Preferred Location'}
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#F5F0EB] border border-[#E8E2DA] text-[#1A1A1A] focus:outline-none focus:border-[#C8312A] text-sm"
                >
                  <option value="Jetty Mayfair (Rajahmundry)">Jetty Mayfair Luxury Villas (Rajahmundry)</option>
                  <option value="Seshadri Heights (Rajahmundry)">Seshadri Heights Gated Plots (Rajahmundry)</option>
                  <option value="Kakinada Smart City Port Corridor">Kakinada Port & Smart City Layout (Kakinada)</option>
                  <option value="Sree Harivasam (Rajahmundry)">Sree Harivasam Open Plots (Rajahmundry)</option>
                  <option value="General Inquiry">General Real Estate Inquiry</option>
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
