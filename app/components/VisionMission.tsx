export default function VisionMission() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#d4a853] font-semibold text-sm uppercase tracking-wider">
            Our Purpose
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Vision & Mission</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-gradient-to-br from-[#1a365d] to-[#2d4a7c] rounded-2xl p-8 text-white">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-7 h-7 text-[#d4a853]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-white/90 leading-relaxed">
              To be a leading construction and facility management company in Saudi Arabia,
              renowned for excellence, reliability, and contribution to the nation&apos;s
              infrastructural growth. We aim to provide high-quality construction, MEP, and
              facility management solutions that exceed client expectations while ensuring safety,
              sustainability, and innovation in every project.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-gradient-to-br from-[#059669] to-[#10b981] rounded-2xl p-8 text-white">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-white/90 leading-relaxed">
              To deliver high-quality projects with safety, efficiency, and innovation. We are
              committed to contributing to Saudi Arabia&apos;s national development and Vision 2030
              objectives through transparent, professional partnerships built on trust, performance,
              and mutual growth with our clients and collaborators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
