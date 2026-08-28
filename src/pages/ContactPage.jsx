import React, { useEffect } from 'react';
import { translations } from '../data/translations';
import { Phone, MapPin, MessageCircle, Clock } from 'lucide-react';
import ContactFormServerless from '../components/ContactFormServerless';

export default function ContactPage({ lang = 'en' }) {
  const t = translations[lang]?.contact || translations.en.contact;

  useEffect(() => {
    document.title = "Contact Us & Book Free Site Visit | Siva Telugu Estates | +91 98516 33333";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="w-full bg-[#F5F0EB] text-[#1A1A1A] min-h-screen font-sans pt-6 sm:pt-10 pb-16 sm:pb-20">
      <ContactFormServerless lang={lang} />
    </div>
  );
}
