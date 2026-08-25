import React, { useState, useEffect } from 'react';
import { Phone, Send, MapPin, Clock, CheckCircle2, MessageSquare } from 'lucide-react';
import { translations } from '../data/translations';

export default function ContactPage({ lang = 'en' }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const t = translations[lang]?.contact || translations.en.contact;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Rajahmundry Open Plots & Villa Layouts',
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
    <div className="min-h-screen bg-[#F9F7F2] py-16 sm:py-20 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching study template media_1787653798696.png */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-14">
          <div className="flex items-center justify-center space-x-3 mb-1">
            <div className="h-px w-8 bg-[#D4CEC6]"></div>
            <span className="brand-subtitle text-[10px] tracking-[0.25em] text-[#6B6860]">
              GET IN TOUCH
            </span>
            <div className="h-px w-8 bg-[#D4CEC6]"></div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1B1C1C] font-serif tracking-tight leading-tight">
            Schedule Your Free Site Visit
          </h1>

          <p className="text-sm sm:text-base text-[#6B6860] leading-relaxed">
            We provide free AC car facility for site visits in Rajahmundry &amp; Kakinada.
          </p>
        </div>

        {/* 2-Column Balanced Cards matching template */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Consultation Hotline Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E0D5] shadow-xs flex flex-col justify-between space-y-6">
            
            <div>
              <span className="text-[10px] font-sans font-semibold text-[#6B6860] uppercase tracking-[0.2em] block mb-1">
                DIRECT CONSULTATION HOTLINE
              </span>
              <a
                href="tel:+919851633333"
                className="text-2xl sm:text-3xl font-bold text-[#1B1C1C] hover:text-[#3E5C49] font-serif flex items-center mt-2 transition-colors"
              >
                <Phone className="w-6 h-6 text-[#3E5C49] mr-3 shrink-0" />
                <span>+91 98516 33333</span>
              </a>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#F0EBE3] text-xs text-[#333]">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#3E5C49] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1B1C1C] block font-serif text-sm">Rajahmundry Head Office:</strong>
                  <span className="text-[#666]">Main Road, Morampudi Junction, Rajahmundry AP.</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#3E5C49] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1B1C1C] block font-serif text-sm">Kakinada Branch Office:</strong>
                  <span className="text-[#666]">Ramanayyapeta Commercial Center, Kakinada AP.</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-[#3E5C49] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1B1C1C] block text-xs">Mon - Sun: 9:00 AM - 8:00 PM</strong>
                  <span className="text-[#666]">Free AC Car Facility Available for Site Visits</span>
                </div>
              </div>
            </div>

            {/* Instant Lead Dispatch Notice Box */}
            <div className="p-4 rounded-2xl bg-[#F9F7F2] border border-[#E5E0D5] text-xs space-y-1 mt-auto">
              <div className="flex items-center text-[#3E5C49] font-bold font-sans">
                <MessageSquare className="w-3.5 h-3.5 mr-1.5 shrink-0" />
                <span>Instant Lead Dispatch</span>
              </div>
              <p className="text-[11px] text-[#6B6860] leading-relaxed">
                Submissions automatically notify Director Mr. Siva Yedida via email and direct WhatsApp lead routing.
              </p>
            </div>

          </div>

          {/* Right Column: Form Card */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E0D5] shadow-xs flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-[10px] font-sans font-bold text-[#6B6860] uppercase tracking-[0.15em] mb-1.5">
                  YOUR FULL NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Siva Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-[#F9F7F2] border border-[#E5E0D5] text-[#1B1C1C] placeholder-[#999] focus:outline-none focus:border-[#3E5C49] text-sm transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-sans font-bold text-[#6B6860] uppercase tracking-[0.15em] mb-1.5">
                    PHONE / WHATSAPP NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98516 33333"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-[#F9F7F2] border border-[#E5E0D5] text-[#1B1C1C] placeholder-[#999] focus:outline-none focus:border-[#3E5C49] text-sm font-mono transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-sans font-bold text-[#6B6860] uppercase tracking-[0.15em] mb-1.5">
                    EMAIL ADDRESS (OPTIONAL)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. siva@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-[#F9F7F2] border border-[#E5E0D5] text-[#1B1C1C] placeholder-[#999] focus:outline-none focus:border-[#3E5C49] text-sm transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-sans font-bold text-[#6B6860] uppercase tracking-[0.15em] mb-1.5">
                  INTERESTED LOCATION
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-[#F9F7F2] border border-[#E5E0D5] text-[#1B1C1C] focus:outline-none focus:border-[#3E5C49] text-sm transition-colors cursor-pointer"
                >
                  <option value="Rajahmundry Open Plots & Villa Layouts">Rajahmundry Open Plots &amp; Villa Layouts</option>
                  <option value="Kakinada Smart City & Port Belt Layouts">Kakinada Smart City &amp; Port Belt Layouts</option>
                  <option value="Highway Commercial Lands">Highway Commercial Lands</option>
                  <option value="Agricultural Investment Lands">Agricultural Investment Lands</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-sans font-bold text-[#6B6860] uppercase tracking-[0.15em] mb-1.5">
                  YOUR REQUIREMENT / MESSAGE
                </label>
                <textarea
                  rows="3"
                  placeholder="Tell us about your plot requirement, preferred budget, or site visit date..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-[#F9F7F2] border border-[#E5E0D5] text-[#1B1C1C] placeholder-[#999] focus:outline-none focus:border-[#3E5C49] text-sm transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-[#3E5C49] hover:bg-[#2D4537] text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center space-x-2 cursor-pointer tracking-wider font-sans disabled:opacity-50 mt-2"
              >
                <Send className="w-4 h-4 mr-1.5" />
                <span>{isSubmitting ? "Submitting Inquiry..." : "Submit Consultation Request"}</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-[#10B981]/20 text-[#10B981] text-xs text-center font-sans font-semibold flex items-center justify-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Inquiry recorded! Redirecting to WhatsApp to complete direct messaging...</span>
                </div>
              )}

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
