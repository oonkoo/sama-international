"use client";

import Image from "next/image";
import CountUp from "@/components/CountUp";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#fafbfc] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-200 h-200 bg-gradient-to-bl from-[#1a365d]/[0.03] to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-150 h-150 bg-gradient-to-tr from-[#d4a853]/[0.05] to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-[#d4a853]"></div>
              <span className="text-[#d4a853] font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1a365d] leading-tight">
              Building Saudi Arabia&apos;s
              <br />
              <span className="text-gray-400">Future Since 2019</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-md lg:text-right text-lg">
            Excellence in construction, MEP solutions, and facility management across the Kingdom.
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Column - Story Content */}
          <div className="space-y-8">
            {/* Company Identity Card */}
            <div className="bg-gradient-to-br from-[#1a365d] to-[#0f2440] rounded-3xl p-10 relative overflow-hidden">
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "20px 20px",
              }} />
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4a853]/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 border border-white/5 rounded-full" />

              <div className="relative">
                {/* Logo & Badge */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-white font-bold text-lg">SAMA Service Co. LTD</p>
                      <p className="text-white/50 text-sm">Est. 2019 • Jeddah, KSA</p>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-[#d4a853] rounded-full hidden sm:block">
                    <p className="text-[#1a365d] font-bold text-sm">Vision 2030</p>
                  </div>
                </div>

                {/* Arabic Name */}
                <p className="text-[#d4a853] text-2xl sm:text-3xl font-semibold mb-6" dir="rtl">
                  شركة سما سيرفيس المحدودة
                </p>

                {/* Tagline */}
                <p className="text-white/90 text-xl font-medium leading-relaxed">
                  Engineered for Excellence, Designed for Your Needs
                </p>
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                <span className="text-[#1a365d] font-semibold">SAMA Service Company Ltd.</span> has been a trusted name in the Saudi construction and
                facility management sector since 2019. With a strong foundation built on integrity,
                technical excellence, and client-focused solutions, we deliver comprehensive services
                that meet the diverse needs of our clients.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Headquartered in Jeddah, we combine expertise, innovation, and dedication to provide
                complete solutions for complex projects across the Kingdom. Our commitment to quality
                and safety has made us a trusted partner for government and private sector organizations.
              </p>
            </div>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-3">
              {["General Contracting", "Civil Construction", "MEP Solutions", "Facility Management"].map((tag) => (
                <span
                  key={tag}
                  className="px-5 py-2.5 rounded-full bg-white border border-gray-200 text-[#1a365d] text-sm font-medium shadow-sm hover:border-[#d4a853]/50 hover:shadow-md transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#d4a853] text-[#1a365d] px-8 py-4 rounded-xl font-bold hover:bg-[#e8c878] transition-all group shadow-lg shadow-[#d4a853]/20"
            >
              Start Your Project
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right Column - Visual & Stats */}
          <div className="space-y-6">
            {/* Featured Image */}
            <div className="relative h-[400px] rounded-3xl overflow-hidden group">
              <Image
                src="/about/about.png"
                alt="SAMA Construction Project"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/80 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute top-6 left-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-white text-base">ISO Certified</p>
                      <p className="text-white/70 text-sm">Quality • Safety • Environmental</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {/* Stat 1 */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 hover:shadow-xl hover:border-[#d4a853]/30 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1a365d]/10 rounded-xl flex items-center justify-center group-hover:bg-[#1a365d] transition-all duration-300">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#1a365d] group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-[#1a365d] mb-1">
                  <CountUp to={50} duration={2} onStart={undefined} onEnd={undefined} />+
                </p>
                <p className="text-gray-600 font-medium text-sm sm:text-base">Projects</p>
              </div>

              {/* Stat 2 */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 hover:shadow-xl hover:border-[#d4a853]/30 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1a365d]/10 rounded-xl flex items-center justify-center group-hover:bg-[#1a365d] transition-all duration-300">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#1a365d] group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-[#1a365d] mb-1">
                  <CountUp to={200} duration={2} onStart={undefined} onEnd={undefined} />+
                </p>
                <p className="text-gray-600 font-medium text-sm sm:text-base">Team Members</p>
              </div>

              {/* Stat 3 */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 hover:shadow-xl hover:border-[#d4a853]/30 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1a365d]/10 rounded-xl flex items-center justify-center group-hover:bg-[#1a365d] transition-all duration-300">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#1a365d] group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-[#1a365d] mb-1">
                  <CountUp to={15} duration={2} onStart={undefined} onEnd={undefined} />+
                </p>
                <p className="text-gray-600 font-medium text-sm sm:text-base">Major Clients</p>
              </div>

              {/* Stat 4 */}
              <div className="bg-gradient-to-br from-[#059669] to-[#047857] rounded-2xl p-4 sm:p-6 text-white">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-3xl sm:text-4xl font-bold mb-1">
                  <CountUp to={100} duration={2} onStart={undefined} onEnd={undefined} />%
                </p>
                <p className="text-white/80 font-medium text-sm sm:text-base">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
