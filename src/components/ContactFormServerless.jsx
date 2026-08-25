import React, { useState } from 'react';
import { Phone, Send, MapPin, Clock, CheckCircle2, MessageSquare } from 'lucide-react';
import { translations } from '../data/translations';

export default function ContactFormServerless({ lang }) {
  const t = translations[lang].contact;

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

    const waMessage = `Hi Siva Telugu Estates, my name is ${encodeURIComponent(formData.name)}. Phone: ${encodeURIComponent(formData.phone)}. Preferred Office/Venture: ${encodeURIComponent(formData.location)}. Note: ${encodeURIComponent(formData.message || 'I would like to book a site visit.')}`;
    
    setTimeout(() => {
      window.open(`https://wa.me/919851633333?text=${waMessage}`, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-[#F9F7F2] relative border-t border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with luxury line indicator */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <div className="h-px w-8 bg-[#4A5D4E]"></div>
            <span className="eyebrow-tag text-[#4A5D4E]">
              {t.badge}
            </span>
            <div className="h-px w-8 bg-[#4A5D4E]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#1B1C1C] tracking-tight font-serif">
            {t.heading}
          </h2>
          <p className="text-sm text-[#636863]">
            {t.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E0D5] space-y-6 shadow-sm">
              
              <div>
                <span className="text-[11px] font-sans font-medium text-[#4A5D4E] uppercase tracking-[0.2em] block mb-1">
                  DIRECT CONSULTATION HOTLINE
                </span>
                <a
                  href="tel:+919851633333"
                  className="text-3xl font-bold text-[#1B1C1C] hover:text-[#4A5D4E] font-serif flex items-center mt-1 transition-colors"
                >
                  <Phone className="w-7 h-7 text-[#4A5D4E] mr-3 animate-pulse" />
                  +91 98516 33333
                </a>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#E5E0D5] text-xs text-[#2D2D2D]">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#4A5D4E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1B1C1C] block font-serif">Rajahmundry Head Office:</strong>
                    Main Road, Morampudi Junction, Rajahmundry AP.
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1B1C1C] block font-serif">Kakinada Branch Office:</strong>
                    Ramanayyapeta Commercial Center, Kakinada AP.
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-[#4A5D4E] shrink-0" />
                  <div>
                    <strong className="text-[#1B1C1C] block">{t.officeHours}</strong>
                    Free AC Car Facility Available for Site Visits
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F9F7F2] border border-[#E5E0D5] text-[#2D2D2D] text-xs font-sans space-y-1">
                <div className="flex items-center text-[#4A5D4E] font-bold">
                  <MessageSquare className="w-4 h-4 mr-1.5" />
                  <span>Instant Lead Dispatch</span>
                </div>
                <p className="text-[11px] text-[#636863]">
                  Submissions automatically notify Director Mr. Siva Yedida via email and direct WhatsApp lead routing.
                </p>
              </div>

            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E0D5] shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div>
                <label className="block text-xs font-sans font-bold text-[#2D2D2D] uppercase mb-2">
                  {t.name} *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Siva Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#F9F7F2] border border-[#E5E0D5] text-[#1B1C1C] placeholder-[#636863] focus:outline-none focus:border-[#4A5D4E] text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans font-bold text-[#2D2D2D] uppercase mb-2">
                    {t.phone} *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98516 33333"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#F9F7F2] border border-[#E5E0D5] text-[#1B1C1C] placeholder-[#636863] focus:outline-none focus:border-[#4A5D4E] text-sm font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans font-bold text-[#2D2D2D] uppercase mb-2">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. siva@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#F9F7F2] border border-[#E5E0D5] text-[#1B1C1C] placeholder-[#636863] focus:outline-none focus:border-[#4A5D4E] text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans font-bold text-[#2D2D2D] uppercase mb-2">
                  {t.preferredLocation}
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#F9F7F2] border border-[#E5E0D5] text-[#1B1C1C] focus:outline-none focus:border-[#4A5D4E] text-sm"
                >
                  <option value="Rajahmundry HQ">Rajahmundry Open Plots &amp; Villa Layouts</option>
                  <option value="Kakinada Branch">Kakinada Smart City &amp; Port Belt Layouts</option>
                  <option value="Highway Commercial Lands">Highway Commercial Lands</option>
                  <option value="Agricultural Investment Lands">Agricultural Investment Lands</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-sans font-bold text-[#2D2D2D] uppercase mb-2">
                  {t.message}
                </label>
                <textarea
                  rows="3"
                  placeholder="Tell us about your plot requirement, preferred budget, or site visit date..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#F9F7F2] border border-[#E5E0D5] text-[#1B1C1C] placeholder-[#636863] focus:outline-none focus:border-[#4A5D4E] text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-[#4A5D4E] hover:bg-[#334537] text-white font-bold text-base shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer font-sans disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? "Submitting Inquiry..." : t.submit}</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-[#10B981]/20 text-[#10B981] text-xs text-center font-sans font-semibold flex items-center justify-center space-x-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Inquiry recorded! Redirecting to WhatsApp to complete direct messaging...</span>
                </div>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
