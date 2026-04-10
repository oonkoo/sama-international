"use client";

import { useState } from "react";

const certifications = [
  {
    name: "ISO 9001:2015",
    title: "Quality Management System",
    image: "https://www.isoqsltd.com/wp-content/uploads/2021/07/ISO-9001-2015.png",
  },
  {
    name: "ISO 45001:2018",
    title: "Occupational Health & Safety",
    image: "https://www.isoqsltd.com/wp-content/uploads/2021/07/ISO-45001-2018.png",
  },
  {
    name: "ISO 14001:2015",
    title: "Environmental Management",
    image: "https://www.isoqsltd.com/wp-content/uploads/2021/07/ISO-14001-2015.png",
  },
];

const compliance = [
  { name: "Saudi Building Code", abbr: "SBC" },
  { name: "MEP Standards", abbr: "MEP" },
  { name: "HSE Management", abbr: "HSE" },
];

export default function Certifications() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#1a365d] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4a853] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#d4a853] font-semibold text-sm uppercase tracking-wider">
            Quality Assurance
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            Certifications & Compliance
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Internationally certified and locally compliant, ensuring excellence in every project
          </p>
        </div>

        {/* ISO Certifications - Main Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="bg-white rounded-2xl p-8 text-center group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Badge Image */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                {/* Fallback */}
                <div className="hidden w-full h-full bg-[#1a365d] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{cert.name.split(':')[0]}</span>
                </div>
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-[#1a365d] mb-2">{cert.name}</h3>
              <p className="text-gray-600">{cert.title}</p>

              {/* Verified badge */}
              <div
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: hoveredIndex === index ? "#1a365d" : "#f3f4f6",
                  color: hoveredIndex === index ? "white" : "#6b7280",
                }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium">Certified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Local Compliance */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">Local Compliance</h3>
              <p className="text-blue-200 text-sm">
                Full adherence to Saudi regulations and industry standards
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {compliance.map((item) => (
                <div
                  key={item.abbr}
                  className="flex items-center gap-3 bg-white/10 rounded-xl px-5 py-3 hover:bg-white/15 transition-colors"
                >
                  <div className="w-10 h-10 bg-[#d4a853] rounded-lg flex items-center justify-center">
                    <span className="text-[#1a365d] font-bold text-sm">{item.abbr}</span>
                  </div>
                  <span className="text-white font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "100%", label: "Compliance Rate" },
            { value: "Zero", label: "Safety Incidents" },
            { value: "6+", label: "Active Certifications" },
            { value: "Annual", label: "Third-Party Audits" },
          ].map((stat) => (
            <div key={stat.label} className="text-center bg-white/5 rounded-xl py-6 px-4">
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-blue-200 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
