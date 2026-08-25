import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OfficesPage({ lang = 'en' }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const offices = [
    {
      type: 'HEADQUARTERS',
      name: 'Rajahmundry Main Office',
      tagline: 'Primary Hub for Legal Documentation, Registry Support & Land Consultation',
      address: 'Door No: 7-24-12, Main Road, Beside State Bank of India, Morampudi Junction, Rajahmundry, Andhra Pradesh - 533107',
      phone: '+91 98516 33333',
      altPhone: '+91 98516 44444',
      email: 'rajahmundry@sivateluguestates.com',
      hours: 'Monday – Sunday: 9:00 AM – 8:30 PM',
      mapUrl: 'https://maps.google.com/?q=Morampudi+Junction+Rajahmundry',
      image: './images/luxury_villa_venture_1786442598108.jpg'
    },
    {
      type: 'BRANCH OFFICE',
      name: 'Kakinada Smart City Office',
      tagline: 'Dedicated Branch for Port Corridor, Smart City Ventures & Coastal Layouts',
      address: 'Door No: 14-3-8, Smart City Commercial Center, Near Collectorate Junction, Main Road, Kakinada, Andhra Pradesh - 533001',
      phone: '+91 98516 55555',
      altPhone: '+91 98516 66666',
      email: 'kakinada@sivateluguestates.com',
      hours: 'Monday – Sunday: 9:00 AM – 8:00 PM',
      mapUrl: 'https://maps.google.com/?q=Collectorate+Junction+Kakinada',
      image: './images/kakinada_branch_venture_1786442659994.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F7F2] font-sans">
      {/* Header */}
      <section className="pt-16 pb-16 border-b border-[#E5E0D5] bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="brand-subtitle mb-2">OFFICE LOCATIONS &amp; REGIONAL PRESENCE</span>
            <h1 className="text-4xl sm:text-5xl font-normal text-[#1B1C1C] font-serif tracking-tight leading-tight">
              Visit Us in Rajahmundry &amp; Kakinada
            </h1>
            <p className="mt-4 text-base text-[#636863] leading-relaxed">
              Step into our regional branch offices for transparent title document inspection, venture layout master maps, and free site visit cab bookings.
            </p>
          </div>
        </div>
      </section>

      {/* Offices Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offices.map((office, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-[#E5E0D5] shadow-xs flex flex-col justify-between">
                <div className="relative h-64 overflow-hidden bg-[#F0EDED]">
                  <img
                    src={office.image}
                    alt={office.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-xs text-xs font-mono text-white">
                    {office.type}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-2xl font-normal text-[#1B1C1C] font-serif">{office.name}</h3>
                    <p className="text-xs text-[#636863] mt-1">{office.tagline}</p>
                    
                    <div className="mt-6 space-y-3 text-xs text-[#2D2D2D]">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-4 h-4 text-[#4A5D4E] shrink-0 mt-0.5" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-4 h-4 text-[#4A5D4E] shrink-0" />
                        <span>{office.phone} / {office.altPhone}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 text-[#4A5D4E] shrink-0" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-4 h-4 text-[#4A5D4E] shrink-0" />
                        <span>{office.hours}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E5E0D5] flex flex-wrap gap-3">
                    <a
                      href={`tel:${office.phone.replace(/\s+/g, '')}`}
                      className="px-5 py-2.5 rounded-xl bg-[#1B1C1C] hover:bg-[#334537] text-white text-xs font-bold tracking-[0.1em] transition-all shadow-xs"
                    >
                      Call Office
                    </a>
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl border border-[#E5E0D5] hover:border-[#1B1C1C] text-[#1B1C1C] text-xs font-bold tracking-[0.1em] transition-all flex items-center space-x-1.5"
                    >
                      <span>Get Map Directions</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
