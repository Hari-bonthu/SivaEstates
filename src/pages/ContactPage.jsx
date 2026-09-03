import React, { useEffect } from 'react';
import { translations } from '../data/translations';
import { Phone, MapPin, MessageCircle, Clock } from 'lucide-react';
import ContactFormServerless from '../components/ContactFormServerless';
import SEOHead from '../components/SEOHead';

export default function ContactPage({ lang = 'en' }) {
  const t = translations[lang]?.contact || translations.en.contact;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <SEOHead
        title="Contact Us & Book Free Site Visit | Siva Telugu Estates | +91 98516 33333"
        description="Contact Siva Telugu Estates to book a free AC car site visit to any plot or villa venture in Rajahmundry and Kakinada. Call or WhatsApp Mr. Siva Yedida at +91 98516 33333."
        canonicalUrl="https://sivateluguestates.com/contact"
      />
      <div className="w-full bg-[#F5F0EB] text-[#1A1A1A] min-h-screen font-sans">
        <ContactFormServerless lang={lang} isPage={true} />
      </div>
    </>
  );
}
