import Image from "next/image";

const stats = [
  { value: "50+", label: "Completed Projects" },
  { value: "5+", label: "Years of Experience" },
  { value: "15+", label: "Trusted Partners" },
  { value: "98%", label: "Client Satisfaction" },
];

const partners = [
  "NEOM",
  "Saudi Aramco",
  "Red Sea Global",
  "SABIC",
  "Nesma & Partners",
  "Tamimi Global",
];

export default function Hero() {
  return (
    <section className="relative pt-36 sm:pt-44 bg-white overflow-hidden">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-12">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#d4a853]/10 border border-[#d4a853]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-[#059669] rounded-full animate-pulse"></span>
              <span className="text-[#1a365d] text-sm font-medium">
                Established 2019 in Jeddah
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a365d] leading-tight mb-6">
              Engineered for{" "}
              <span className="relative">
                <span className="relative z-10">Excellence</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#d4a853]/30 -z-0"></span>
              </span>
              , Designed for{" "}
              <span className="relative">
                <span className="relative z-10">Your Needs</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#d4a853]/30 -z-0"></span>
              </span>
            </h1>

            {/* Arabic Name */}
            <p className="text-2xl md:text-6xl text-[#d4a853] font-semibold mb-4" dir="rtl">
              شركة سما سيرفيس المحدودة
            </p>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              We provide advanced construction, MEP, and facility management services to meet Saudi
              Arabia&apos;s infrastructure needs — with precision, quality, and reliability.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#d4a853] text-[#1a365d] px-6 py-3.5 rounded-lg text-base font-semibold hover:bg-[#e8c878] transition-colors shadow-lg shadow-[#d4a853]/20"
              >
                Get a Free Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-white text-[#1a365d] px-6 py-3.5 rounded-lg text-base font-semibold border-2 border-[#1a365d] hover:bg-[#1a365d] hover:text-white transition-colors"
              >
                View Our Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="text-3xl sm:text-4xl font-bold text-[#1a365d]">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="order-1 lg:order-2 relative">
            {/* Main Image */}
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#d4a853]/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#1a365d]/10 rounded-full blur-2xl"></div>

              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/constructions/service-1.png"
                      alt="Construction Work"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/facility-management/service-1.png"
                      alt="MEP Services"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/constructions/service-2.png"
                      alt="Civil Construction"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-[#1a365d] to-[#2d4a7c] flex items-center justify-center p-6">
                    <div className="text-center text-white">
                      <Image
                        src="/sama-logo.svg"
                        alt="SAMA"
                        width={60}
                        height={60}
                        className="mx-auto mb-3 brightness-0 invert w-auto h-auto"
                      />
                      <p className="font-bold text-lg">Vision 2030</p>
                      <p className="text-blue-200 text-sm">Partner</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-xl px-6 py-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#059669] rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#1a365d]">ISO Certified</p>
                    <p className="text-gray-500 text-sm">Quality Assured</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Strip */}
      <div className="border-t border-gray-100 bg-gray-50/50 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <p className="text-gray-500 text-sm font-medium whitespace-nowrap">Trusted by:</p>
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-8 sm:gap-12">
              {partners.map((partner) => (
                <span
                  key={partner}
                  className="text-gray-400 font-semibold text-sm sm:text-base hover:text-[#1a365d] transition-colors cursor-default"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
