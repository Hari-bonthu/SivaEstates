import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Site selection',
    desc: 'We show you options that match your budget, purpose, and preferred corridor. No pressure — just land.'
  },
  {
    number: '02',
    title: 'Legal due diligence',
    desc: 'EC check, patta verification, survey number mapping — every document verified before you sign anything.'
  },
  {
    number: '03',
    title: 'Registration',
    desc: 'Spot registration at the sub-registrar\'s office. You walk out with your title deed in hand, same day.'
  },
  {
    number: '04',
    title: 'Delivery',
    desc: 'Layout handover with all amenities complete — roads, drainage, plantation, electricity connection.'
  },
];

export default function FourSteps() {
  return (
    <section className="py-20 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-px w-6 bg-[#C8312A]"></div>
            <span className="eyebrow-tag" style={{ color: '#C8312A', display: 'inline' }}>
              OUR PROCESS
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight leading-tight max-w-xl">
            From first call to registered title in four steps
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col gap-4">
              {/* Step number */}
              <span className="text-5xl font-serif font-normal text-[#C8312A] leading-none">
                {step.number}
              </span>

              {/* Divider */}
              <div className="h-px w-12 bg-[#2E2E2E]"></div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-sans font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#9CA3AF] font-sans leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
