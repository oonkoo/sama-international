import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#d4a853] font-semibold text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for construction, infrastructure, and facility management
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* General Contracting */}
          <div className="group relative rounded-2xl overflow-hidden h-80 lg:h-96 shadow-lg">
            <Image
              src="/constructions/service-1.png"
              alt="General Contracting"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/95 via-[#1a365d]/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="w-12 h-12 bg-[#d4a853] rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#1a365d]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">General Contracting</h3>
              <p className="text-gray-200">
                Residential, commercial, and industrial projects with complete project planning,
                execution, supervision, and timely delivery.
              </p>
            </div>
          </div>

          {/* Civil Construction */}
          <div className="group relative rounded-2xl overflow-hidden h-80 lg:h-96 shadow-lg">
            <Image
              src="/constructions/service-2.png"
              alt="Civil Construction"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/95 via-[#1a365d]/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="w-12 h-12 bg-[#d4a853] rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#1a365d]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Civil Construction</h3>
              <p className="text-gray-200">
                Building construction, roads, landscaping, site development, and structural design
                implementation.
              </p>
            </div>
          </div>

          {/* MEP Solutions */}
          <div className="group relative rounded-2xl overflow-hidden h-80 lg:h-96 shadow-lg">
            <Image
              src="/facility-management/service-1.png"
              alt="MEP Solutions"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/95 via-[#1a365d]/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="w-12 h-12 bg-[#d4a853] rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#1a365d]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">MEP Solutions</h3>
              <p className="text-gray-200">
                HVAC systems, electrical installations, plumbing solutions, and energy-efficient
                sustainable system design.
              </p>
            </div>
          </div>

          {/* Facility Management */}
          <div className="bg-gradient-to-br from-[#1a365d] to-[#2d4a7c] rounded-2xl p-8 flex flex-col justify-between h-80 lg:h-96 shadow-lg">
            <div className="w-14 h-14 bg-[#d4a853] rounded-xl flex items-center justify-center">
              <svg
                className="w-7 h-7 text-[#1a365d]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Facility Management</h3>
              <p className="text-blue-100 mb-4">
                Comprehensive building maintenance, preventive and corrective programs, asset
                management, and operational support.
              </p>
              <ul className="text-blue-200 text-sm space-y-1">
                <li>• Preventive & Corrective Maintenance</li>
                <li>• Asset & Building Management</li>
                <li>• Housekeeping & Operations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
