"use client";

import { useState } from "react";

const certifications = [
  {
    name: "ISO 9001:2015",
    title: "Quality Management",
    desc: "International standard for quality management systems ensuring consistent delivery of products and services.",
  },
  {
    name: "ISO 45001:2018",
    title: "Occupational Health & Safety",
    desc: "Framework for managing occupational health and safety risks and improving workplace safety.",
  },
  {
    name: "ISO 14001:2015",
    title: "Environmental Management",
    desc: "Standards for effective environmental management systems to minimize environmental impact.",
  },
  {
    name: "Saudi Building Code",
    title: "SBC Compliance",
    desc: "Full compliance with Saudi Building Code regulations for construction and structural safety.",
  },
  {
    name: "MEP Standards",
    title: "Technical Certification",
    desc: "Certified mechanical, electrical, and plumbing installations meeting international standards.",
  },
  {
    name: "HSE Management",
    title: "Health, Safety & Environment",
    desc: "Comprehensive HSE policies with regular audits, risk assessments, and safety training programs.",
  },
];

const complianceStats = [
  { value: "100%", label: "Compliance Rate" },
  { value: "0", label: "Safety Incidents" },
  { value: "6", label: "Certifications" },
  { value: "12+", label: "Annual Audits" },
];

export default function Certifications() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#1a365d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#d4a853] font-semibold text-sm uppercase tracking-wider">
            Compliance & Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            Certifications & Quality Assurance
          </h2>
          <p className="text-blue-200">
            We maintain rigorous compliance with international standards and local regulations,
            ensuring the highest levels of quality, safety, and environmental responsibility.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="p-8 relative cursor-default transition-all duration-400"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                backgroundColor: hoveredIndex === index ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)",
              }}
            >
              {/* Index number */}
              <div className="flex items-start justify-between mb-6">
                <span className="text-4xl font-bold text-white/10">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor: hoveredIndex === index ? "#d4a853" : "rgba(255,255,255,0.1)",
                  }}
                >
                  <svg
                    className="w-4 h-4 transition-colors duration-300"
                    style={{ color: hoveredIndex === index ? "#1a365d" : "#d4a853" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              {/* Certification name */}
              <p
                className="text-sm font-semibold mb-1 transition-colors duration-300"
                style={{ color: hoveredIndex === index ? "#d4a853" : "rgba(255,255,255,0.5)" }}
              >
                {cert.name}
              </p>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">{cert.title}</h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed transition-all duration-300"
                style={{
                  color: hoveredIndex === index ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.5)",
                }}
              >
                {cert.desc}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 h-0.5 bg-[#d4a853] transition-all duration-500"
                style={{
                  width: hoveredIndex === index ? "100%" : "0%",
                }}
              />
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {complianceStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-blue-200 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Commitment Section */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            {/* Left content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#d4a853] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#1a365d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Our Commitment</h3>
              </div>
              <p className="text-blue-100 leading-relaxed">
                Safety and quality are foundational to every project we undertake. We conduct regular inspections,
                comprehensive risk assessments, and maintain strict adherence to Saudi labor, safety, and
                environmental regulations. Our goal is zero incidents and 100% client satisfaction.
              </p>
            </div>

            {/* Right - CTA */}
            <div className="flex-shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#d4a853] text-[#1a365d] px-6 py-3 rounded-lg font-semibold hover:bg-[#e8c878] transition-colors"
              >
                Request Certification Details
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
