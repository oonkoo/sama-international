"use client";

import { useState } from "react";

const certifications = [
  {
    name: "ISO 9001:2015",
    title: "Quality Management",
    image: "https://isogulf.net/wp-content/uploads/2021/04/iso9001-2015-300x300.png",
  },
  {
    name: "ISO 45001:2018",
    title: "Health & Safety",
    image: "https://isogulf.net/wp-content/uploads/2021/04/iso45001-2018-300x300.png",
  },
  {
    name: "ISO 14001:2015",
    title: "Environmental",
    image: "https://isogulf.net/wp-content/uploads/2021/04/iso14001-2015-300x300.png",
  },
];

const localCompliance = [
  { name: "Saudi Building Code", abbr: "SBC", desc: "Construction standards" },
  { name: "MEP Certification", abbr: "MEP", desc: "Technical systems" },
  { name: "HSE Management", abbr: "HSE", desc: "Safety protocols" },
];

export default function Certifications() {
  const [hoveredISO, setHoveredISO] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-[#0f172a] to-[#1a365d] relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating geometric accents */}
      <div className="absolute top-20 left-10 w-72 h-72 border border-[#d4a853]/10 rounded-full" />
      <div className="absolute top-40 left-20 w-48 h-48 border border-[#d4a853]/5 rounded-full" />
      <div className="absolute bottom-20 right-10 w-96 h-96 border border-white/5 rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-32 h-32 border border-[#d4a853]/10 rotate-45" />

      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4a853]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="text-[#d4a853] font-semibold text-sm uppercase tracking-wider">
              Quality Assurance
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Certifications & Compliance
            </h2>
          </div>
          <p className="text-slate-400 max-w-md lg:text-right">
            Internationally certified. Locally compliant. Globally trusted.
          </p>
        </div>

        {/* Main Grid - Bento Style */}
        <div className="grid lg:grid-cols-12 gap-4">
          {/* ISO Certifications - 3 Cards */}
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="lg:col-span-4 bg-slate-800/50 backdrop-blur-sm rounded-3xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group"
              onMouseEnter={() => setHoveredISO(index)}
              onMouseLeave={() => setHoveredISO(null)}
            >
              <div className="flex flex-col items-center text-center">
                {/* Badge Image */}
                <div
                  className="w-28 h-28 mb-5 rounded-2xl bg-slate-700/30 p-3 flex items-center justify-center transition-transform duration-300"
                  style={{
                    transform: hoveredISO === index ? "scale(1.05)" : "scale(1)",
                  }}
                >
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                {/* Text */}
                <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{cert.title}</p>

                {/* Verified indicator */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Verified
                </div>
              </div>
            </div>
          ))}

          {/* Stats Row */}
          <div className="lg:col-span-3 bg-slate-800/50 backdrop-blur-sm rounded-3xl p-6 border border-slate-700/50 flex flex-col justify-center">
            <p className="text-4xl font-bold text-white mb-1">100%</p>
            <p className="text-slate-400 text-sm">Compliance Rate</p>
          </div>

          <div className="lg:col-span-3 bg-slate-800/50 backdrop-blur-sm rounded-3xl p-6 border border-slate-700/50 flex flex-col justify-center">
            <p className="text-4xl font-bold text-white mb-1">Zero</p>
            <p className="text-slate-400 text-sm">Safety Incidents</p>
          </div>

          <div className="lg:col-span-6 bg-gradient-to-r from-[#d4a853]/20 to-[#d4a853]/5 rounded-3xl p-6 border border-[#d4a853]/20">
            <div className="flex items-center justify-between h-full">
              <div>
                <p className="text-[#d4a853] font-semibold mb-1">Annual Third-Party Audits</p>
                <p className="text-slate-400 text-sm">Independent verification of all certifications</p>
              </div>
              <div className="w-12 h-12 bg-[#d4a853]/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-[#d4a853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Local Compliance - Bottom Row */}
          {localCompliance.map((item) => (
            <div
              key={item.abbr}
              className="lg:col-span-4 bg-slate-800/50 backdrop-blur-sm rounded-3xl p-6 border border-slate-700/50 group hover:border-slate-600/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center group-hover:bg-[#d4a853]/20 transition-colors duration-300">
                  <span className="text-[#d4a853] font-bold text-sm">{item.abbr}</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">{item.name}</h4>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
