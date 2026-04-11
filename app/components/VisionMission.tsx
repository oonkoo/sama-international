const coreValues = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Integrity",
    description: "Honest and transparent in all dealings",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Excellence",
    description: "Committed to the highest standards",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Teamwork",
    description: "Collaborative approach to success",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Innovation",
    description: "Embracing modern solutions",
  },
];

export default function VisionMission() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#1a365d]/[0.02] to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#059669]/[0.03] to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-[#d4a853]"></div>
              <span className="text-[#d4a853] font-semibold text-sm uppercase tracking-wider">
                Our Purpose
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1a365d] leading-tight">
              Driven by Vision
              <br />
              <span className="text-gray-400">Guided by Mission</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-md lg:text-right text-lg">
            Our commitment to Saudi Arabia&apos;s growth and Vision 2030 defines everything we do.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {/* Vision Card */}
          <div className="group relative">
            <div className="bg-gradient-to-br from-[#1a365d] to-[#0f2440] rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden h-full">
              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 bg-[#d4a853]/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#d4a853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <span className="text-7xl font-bold text-white/5">01</span>
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold mb-6">Our Vision</h3>

                {/* Content */}
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  To be a leading construction and facility management company in Saudi Arabia,
                  renowned for excellence, reliability, and contribution to the nation&apos;s
                  infrastructural growth.
                </p>

                {/* Key Points */}
                <div className="space-y-3">
                  {["Industry Leadership", "Technical Excellence", "Sustainable Growth"].map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#d4a853]" />
                      <span className="text-white/70">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="group relative">
            <div className="bg-gradient-to-br from-[#059669] to-[#047857] rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden h-full">
              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-7xl font-bold text-white/5">02</span>
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold mb-6">Our Mission</h3>

                {/* Content */}
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  To deliver high-quality projects with safety, efficiency, and innovation,
                  contributing to Saudi Arabia&apos;s national development and Vision 2030 objectives.
                </p>

                {/* Key Points */}
                <div className="space-y-3">
                  {["Quality Delivery", "Safety First", "Client Partnership"].map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-white" />
                      <span className="text-white/70">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-[#fafbfc] rounded-3xl p-8 sm:p-10 border border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-[#1a365d] mb-2">Our Core Values</h3>
              <p className="text-gray-500">The principles that guide our every action</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4a853] animate-pulse" />
              <span className="text-sm text-gray-500 font-medium">Since 2019</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreValues.map((value, index) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#d4a853]/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[#1a365d]/10 rounded-xl flex items-center justify-center text-[#1a365d] group-hover:bg-[#1a365d] group-hover:text-[#d4a853] transition-all duration-300">
                    {value.icon}
                  </div>
                  <span className="text-4xl font-bold text-gray-100 group-hover:text-[#d4a853]/10 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h4 className="font-bold text-[#1a365d] mb-1">{value.title}</h4>
                <p className="text-gray-500 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
