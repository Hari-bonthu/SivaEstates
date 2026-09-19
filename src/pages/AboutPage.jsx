import React, { useEffect } from 'react';
import { translations } from '../data/translations';
import { Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FourPillars from '../components/FourPillars';
import TrustSection from '../components/TrustSection';
import SEOHead from '../components/SEOHead';

export default function AboutPage({ lang = 'en' }) {
  const t = translations[lang]?.aboutPage || translations.en.aboutPage;
  const tHero = translations[lang]?.hero || translations.en.hero;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.sivateluguestates.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://www.sivateluguestates.com/about/"
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="About Us | Siva Telugu Estates | Director Mr. Siva Yedida – 12+ Years in Godavari Real Estate"
        description="Learn about Siva Telugu Estates, Rajahmundry's trusted real estate agency since 2014. Founded and led by Managing Director Mr. Siva Yedida. RUDA, KAUDA & AP RERA approved ventures across East Godavari."
        canonicalUrl="https://www.sivateluguestates.com/about/"
        schemaData={aboutSchema}
      />
      <div className="w-full bg-[#F5F0EB] text-[#1A1A1A] min-h-screen font-sans">
      
      {/* Hero Header */}
      <section className="pt-12 sm:pt-16 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] font-normal leading-tight mb-3 sm:mb-4 tracking-tight">
            {t.heading}
          </h1>
          <p className="text-[#6B6860] text-sm sm:text-base md:text-lg leading-relaxed">
            {t.subheading}
          </p>
        </div>
      </section>

      {/* Founder Spotlight & Heritage Section */}
      <section className="py-10 sm:py-16 bg-white border-y border-[#E8E2DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">

            {/* Left: Founder Photo Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md rounded-2xl sm:rounded-3xl overflow-hidden bg-[#F5F0EB] border border-[#E8E2DA] shadow-xl group">
                <div className="h-[280px] sm:h-[380px] md:h-[420px] overflow-hidden bg-[#E8E2DA]">
                  <img
                    src="/images/siva_profile_cutout.png"
                    alt="Mr. Siva Yedida - Managing Director"
                    width="448"
                    height="420"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 sm:p-6 bg-white border-t border-[#E8E2DA]">
                  <span className="eyebrow-tag text-[9px] sm:text-[10px]" style={{ color: '#C8312A', marginBottom: '2px' }}>
                    {tHero.directorTitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] font-serif">
                    {tHero.directorName}
                  </h3>
                  <p className="text-xs text-[#6B6860] mt-1.5 sm:mt-2 leading-relaxed">
                    {tHero.directorDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Heritage Narrative */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCECEA] text-[#C8312A] text-xs font-bold w-fit">
                <Award className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>12+ Years of Leadership in Godavari</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1A] font-normal leading-snug">
                {t.storyTitle}
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-[#6B6860] leading-relaxed">
                {t.storyP1}
              </p>

              <p className="text-xs sm:text-sm md:text-base text-[#6B6860] leading-relaxed">
                {t.storyP2}
              </p>

              {/* 4 Milestones */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-[#E8E2DA]">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F5F0EB]">
                  <CheckCircle2 className="w-5 h-5 text-[#C8312A] shrink-0" aria-hidden="true" />
                  <span className="text-xs font-bold text-[#1A1A1A]">{t.milestone1}</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F5F0EB]">
                  <CheckCircle2 className="w-5 h-5 text-[#C8312A] shrink-0" aria-hidden="true" />
                  <span className="text-xs font-bold text-[#1A1A1A]">{t.milestone2}</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F5F0EB]">
                  <CheckCircle2 className="w-5 h-5 text-[#C8312A] shrink-0" aria-hidden="true" />
                  <span className="text-xs font-bold text-[#1A1A1A]">{t.milestone3}</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F5F0EB]">
                  <CheckCircle2 className="w-5 h-5 text-[#C8312A] shrink-0" aria-hidden="true" />
                  <span className="text-xs font-bold text-[#1A1A1A]">{t.milestone4}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact/"
                  className="btn-red inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold cursor-pointer shadow-sm w-full sm:w-auto text-center"
                >
                  <span>Book Consultation With Director</span>
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Core Pillars */}
      <FourPillars lang={lang} />

      {/* Trust & Legal Verification */}
      <TrustSection lang={lang} />

      {/* Digital Infrastructure & Strategic Partners */}
      <section className="py-10 sm:py-14 bg-[#F5F0EB] border-t border-[#E8E2DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E2DA] shadow-xs max-w-4xl mx-auto text-center space-y-3">
            <span className="eyebrow-tag text-[9px] sm:text-[10px] text-[#C8312A] tracking-widest uppercase">
              Digital Infrastructure &amp; Growth
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A1A] font-normal">
              Technology &amp; Marketing Operations
            </h3>
            <p className="text-xs sm:text-sm text-[#6B6860] leading-relaxed max-w-2xl mx-auto">
              Digital marketing and website services by{' '}
              <a
                href="https://www.bhargavdigitalsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8312A] font-semibold hover:underline"
              >
                Bhargav Digital Solutions
              </a>
              , ensuring verified property discovery, fast search accessibility, and transparent investor engagement across Rajahmundry and Kakinada.
            </p>
          </div>
        </div>
      </section>

    </div>
  </>
  );
}
