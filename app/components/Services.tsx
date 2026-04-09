import Image from "next/image";

const services = [
  {
    id: "01",
    title: "General Contracting",
    description:
      "End-to-end project management for residential, commercial, and industrial developments with complete planning, execution, and timely delivery.",
    image: "/constructions/service-1.png",
    features: ["Project Planning", "Site Supervision", "Quality Control", "Timely Delivery"],
  },
  {
    id: "02",
    title: "Civil Construction",
    description:
      "Large-scale infrastructure and building projects including roads, landscaping, site development, and structural implementation.",
    image: "/constructions/service-2.png",
    features: ["Building Construction", "Road Works", "Landscaping", "Structural Design"],
  },
  {
    id: "03",
    title: "MEP Solutions",
    description:
      "Complete mechanical, electrical, and plumbing systems designed for optimal performance, efficiency, and sustainability.",
    image: "/facility-management/service-1.png",
    features: ["HVAC Systems", "Electrical Works", "Plumbing", "Energy Efficient"],
  },
  {
    id: "04",
    title: "Facility Management",
    description:
      "Comprehensive building maintenance and operational support to ensure your facilities run smoothly and efficiently.",
    image: "/facility-management/service-2.png",
    features: ["Preventive Maintenance", "Asset Management", "Operations", "24/7 Support"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-[#d4a853]"></div>
              <span className="text-[#d4a853] font-semibold text-sm uppercase tracking-wider">
                What We Do
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1a365d] leading-tight">
              Full-Service Solutions
              <br />
              <span className="text-gray-400">from Start to Finish</span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-md lg:text-right">
            We provide comprehensive construction, MEP, and facility management services tailored to
            meet your project requirements.
          </p>
        </div>

        {/* Services Grid - Bento Style */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Service 1 - Large */}
          <div className="lg:col-span-7 group">
            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
              <Image
                src={services[0].image}
                alt={services[0].title}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d] via-[#1a365d]/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-6xl font-bold text-white/20">{services[0].id}</span>
                  <div className="w-12 h-12 rounded-full bg-[#d4a853] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-[#1a365d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">{services[0].title}</h3>
                  <p className="text-gray-300 mb-4 max-w-md">{services[0].description}</p>
                  <div className="flex flex-wrap gap-2">
                    {services[0].features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm backdrop-blur-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2 - Stacked Right */}
          <div className="lg:col-span-5 group">
            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
              <Image
                src={services[1].image}
                alt={services[1].title}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d] via-[#1a365d]/40 to-transparent" />

              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-6xl font-bold text-white/20">{services[1].id}</span>
                  <div className="w-12 h-12 rounded-full bg-[#d4a853] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-[#1a365d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{services[1].title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{services[1].description}</p>
                  <div className="flex flex-wrap gap-2">
                    {services[1].features.slice(0, 2).map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm backdrop-blur-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="lg:col-span-5 group">
            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
              <Image
                src={services[2].image}
                alt={services[2].title}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d] via-[#1a365d]/40 to-transparent" />

              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-6xl font-bold text-white/20">{services[2].id}</span>
                  <div className="w-12 h-12 rounded-full bg-[#d4a853] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-[#1a365d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{services[2].title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{services[2].description}</p>
                  <div className="flex flex-wrap gap-2">
                    {services[2].features.slice(0, 2).map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm backdrop-blur-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 4 - Large */}
          <div className="lg:col-span-7 group">
            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
              <Image
                src={services[3].image}
                alt={services[3].title}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d] via-[#1a365d]/40 to-transparent" />

              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-6xl font-bold text-white/20">{services[3].id}</span>
                  <div className="w-12 h-12 rounded-full bg-[#d4a853] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-[#1a365d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">{services[3].title}</h3>
                  <p className="text-gray-300 mb-4 max-w-md">{services[3].description}</p>
                  <div className="flex flex-wrap gap-2">
                    {services[3].features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm backdrop-blur-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-[#fafbfc] rounded-full px-8 py-4 border border-gray-200">
            <p className="text-gray-600">
              Need a custom solution?{" "}
              <span className="text-[#1a365d] font-semibold">Let&apos;s discuss your project</span>
            </p>
            <a
              href="#contact"
              className="w-10 h-10 rounded-full bg-[#1a365d] flex items-center justify-center hover:bg-[#2d4a7c] transition-colors"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
