import React from 'react';

const stats = [
  { number: '50+', label: 'Ventures' },
  { number: '1500+', label: 'Plot Owners' },
  { number: '12', label: 'Years' },
  { number: '100%', label: 'Clear Title' },
];

export default function StatsStrip() {
  return (
    <section className="bg-white border-y border-[#E8E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#E8E2DA]">
          {stats.map((stat, i) => (
            <div key={i} className="py-7 px-6 text-center">
              <p className="text-4xl sm:text-5xl font-normal text-[#1A1A1A] font-serif leading-none">
                {stat.number}
              </p>
              <p className="text-xs text-[#6B6860] font-sans mt-2 tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
