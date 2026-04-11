import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#fafbfc] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#1a365d]/[0.03] to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#d4a853]/[0.05] to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-[#d4a853]"></div>
              <span className="text-[#d4a853] font-semibold text-sm uppercase tracking-wider">
                Get in Touch
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1a365d] leading-tight">
              Let&apos;s Build Something
              <br />
              <span className="text-gray-400">Great Together</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-md lg:text-right text-lg">
            Ready to start your next project? Our team is here to help bring your vision to life.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left - Large CTA Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#1a365d] to-[#0f2440] rounded-3xl p-8 sm:p-10 text-white h-full relative overflow-hidden">
              <div className="relative h-full flex flex-col">
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">Head Office</h3>
                  <p className="text-white/60">Jeddah, Kingdom of Saudi Arabia</p>
                </div>

                {/* Address */}
                <div className="space-y-6 flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#d4a853]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#d4a853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Address</p>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Office No. 1014, 10th Floor<br />
                        Andulus Business Center<br />
                        Al-Andulus Branch Road, Al-Ruwais District<br />
                        P.O. Box 23213
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#d4a853]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#d4a853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Business Hours</p>
                      <p className="text-white/70 text-sm">
                        Sunday - Thursday<br />
                        8:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Vision 2030 Badge */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="bg-white rounded-xl p-2">
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Saudi_Vision_2030_logo.svg/1280px-Saudi_Vision_2030_logo.svg.png"
                        alt="Saudi Vision 2030"
                        width={80}
                        height={45}
                        className="w-auto h-10"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Partner</p>
                      <p className="text-white/60 text-sm">Contributing to national development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Cards Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-[#d4a853]/30 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-[#1a365d]/10 rounded-xl flex items-center justify-center group-hover:bg-[#1a365d] transition-all duration-300">
                  <svg className="w-7 h-7 text-[#1a365d] group-hover:text-[#d4a853] transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-5xl font-bold text-gray-100 group-hover:text-[#d4a853]/10 transition-colors">01</span>
              </div>
              <h4 className="font-bold text-[#1a365d] text-lg mb-3">Call Us</h4>
              <div className="space-y-2">
                <a href="tel:+966920015391" className="block text-[#1a365d] font-semibold hover:text-[#d4a853] transition-colors">
                  +966-920015391
                </a>
                <a href="tel:+966501093444" className="block text-gray-500 hover:text-[#1a365d] transition-colors text-sm">
                  +966 50 109 3444
                </a>
                <a href="tel:+966562601028" className="block text-gray-500 hover:text-[#1a365d] transition-colors text-sm">
                  +966 56 260 1028
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-[#d4a853]/30 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-[#1a365d]/10 rounded-xl flex items-center justify-center group-hover:bg-[#1a365d] transition-all duration-300">
                  <svg className="w-7 h-7 text-[#1a365d] group-hover:text-[#d4a853] transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-5xl font-bold text-gray-100 group-hover:text-[#d4a853]/10 transition-colors">02</span>
              </div>
              <h4 className="font-bold text-[#1a365d] text-lg mb-3">Email Us</h4>
              <div className="space-y-2">
                <a href="mailto:projects@samafms.com" className="block text-[#1a365d] font-semibold hover:text-[#d4a853] transition-colors">
                  projects@samafms.com
                </a>
                <a href="mailto:sales@samafms.com" className="block text-gray-500 hover:text-[#1a365d] transition-colors text-sm">
                  sales@samafms.com
                </a>
                <a href="mailto:hr@samafms.com" className="block text-gray-500 hover:text-[#1a365d] transition-colors text-sm">
                  hr@samafms.com
                </a>
              </div>
            </div>

            {/* Website Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-[#d4a853]/30 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-[#1a365d]/10 rounded-xl flex items-center justify-center group-hover:bg-[#1a365d] transition-all duration-300">
                  <svg className="w-7 h-7 text-[#1a365d] group-hover:text-[#d4a853] transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <span className="text-5xl font-bold text-gray-100 group-hover:text-[#d4a853]/10 transition-colors">03</span>
              </div>
              <h4 className="font-bold text-[#1a365d] text-lg mb-3">Visit Website</h4>
              <a
                href="https://samafms.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#1a365d] font-semibold hover:text-[#d4a853] transition-colors"
              >
                www.samafms.com
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Quick Connect Card */}
            <div className="bg-gradient-to-br from-[#d4a853] to-[#c49843] rounded-2xl p-6 text-[#1a365d] group hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-[#1a365d]/10 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-[#1a365d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <span className="text-5xl font-bold text-[#1a365d]/10">04</span>
              </div>
              <h4 className="font-bold text-[#1a365d] text-lg mb-2">Quick Response</h4>
              <p className="text-[#1a365d]/70 text-sm mb-4">Get a response within 24 hours</p>
              <a
                href="mailto:projects@samafms.com"
                className="inline-flex items-center gap-2 bg-[#1a365d] text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-[#0f2440] transition-colors text-sm"
              >
                Send Inquiry
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
