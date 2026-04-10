"use client";

import { useEffect, useRef, useState } from "react";

const equipmentCategories = [
  {
    title: "Earthmoving Equipment",
    items: ["Excavators", "Bulldozers", "Graders", "Backhoe Loaders"],
    count: "25+",
  },
  {
    title: "Concrete Works",
    items: ["Batching Plants", "Concrete Pumps", "Mixers", "Vibrators"],
    count: "15+",
  },
  {
    title: "Lifting Equipment",
    items: ["Mobile Cranes", "Forklifts", "Hoisting Systems", "Tower Cranes"],
    count: "20+",
  },
  {
    title: "Transportation Fleet",
    items: ["Dump Trucks", "Flatbed Trailers", "Service Vehicles", "Tankers"],
    count: "40+",
  },
  {
    title: "MEP Tools",
    items: ["Electrical Testing", "HVAC Tools", "Plumbing Equipment", "Welding Sets"],
    count: "50+",
  },
  {
    title: "Support Equipment",
    items: ["Generators", "Compressors", "Scaffolding", "Site Offices"],
    count: "30+",
  },
];

function AnimatedCounter({ value, duration = 2000 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const numericValue = parseInt(value.replace(/\D/g, ""));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const increment = numericValue / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= numericValue) {
              setCount(numericValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numericValue, duration]);

  return (
    <span ref={ref}>
      {count}
      {value.includes("+") && "+"}
    </span>
  );
}

export default function Equipment() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#d4a853] font-semibold text-sm uppercase tracking-wider">
            Our Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a365d] mt-2 mb-4">
            Equipment & Resources
          </h2>
          <p className="text-gray-600">
            A comprehensive fleet of modern construction equipment and skilled personnel,
            maintained to the highest standards to ensure reliable project delivery.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden">
          {equipmentCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white p-8 relative group cursor-default"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                backgroundColor: hoveredIndex === index ? "#fafbfc" : "white",
              }}
            >
              {/* Number badge */}
              <div className="flex items-start justify-between mb-6">
                <span className="text-4xl font-bold text-[#1a365d]/10">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div
                  className="px-3 py-1.5 rounded text-sm font-semibold transition-all duration-300"
                  style={{
                    backgroundColor: hoveredIndex === index ? "#1a365d" : "#1a365d10",
                    color: hoveredIndex === index ? "white" : "#1a365d",
                  }}
                >
                  {category.count} Units
                </div>
              </div>

              {/* Title */}
              <h3
                className="text-xl font-bold mb-4 transition-colors duration-300"
                style={{
                  color: hoveredIndex === index ? "#1a365d" : "#374151",
                }}
              >
                {category.title}
              </h3>

              {/* Items */}
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-gray-600 text-sm transition-all duration-300"
                    style={{
                      transform: hoveredIndex === index ? "translateX(4px)" : "translateX(0)",
                      transitionDelay: `${itemIndex * 50}ms`,
                    }}
                  >
                    <span
                      className="w-1 h-1 rounded-full transition-all duration-300"
                      style={{
                        backgroundColor: hoveredIndex === index ? "#d4a853" : "#9CA3AF",
                        transform: hoveredIndex === index ? "scale(1.5)" : "scale(1)",
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>

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
          {[
            { value: "180+", label: "Total Equipment Units" },
            { value: "200+", label: "Skilled Personnel" },
            { value: "99%", label: "Equipment Uptime" },
            { value: "24/7", label: "Maintenance Support" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-[#1a365d] mb-1">
                {stat.value === "24/7" ? stat.value : <AnimatedCounter value={stat.value} />}
              </p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Workforce Section */}
        <div className="mt-16 bg-white border border-gray-200 rounded-2xl p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            {/* Left content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1a365d] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#d4a853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a365d]">Professional Workforce</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our team comprises experienced engineers, certified project managers, licensed equipment operators,
                and skilled technicians. Every team member undergoes continuous professional development
                in construction quality standards, safety protocols, and technical excellence.
              </p>
            </div>

            {/* Right stats */}
            <div className="flex gap-8 lg:gap-12 flex-shrink-0">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#1a365d]">50+</p>
                <p className="text-gray-500 text-sm">Engineers</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <p className="text-3xl font-bold text-[#1a365d]">30+</p>
                <p className="text-gray-500 text-sm">Operators</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <p className="text-3xl font-bold text-[#1a365d]">120+</p>
                <p className="text-gray-500 text-sm">Technicians</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
