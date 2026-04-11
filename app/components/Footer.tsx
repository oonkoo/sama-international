import Image from "next/image";

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "General Contracting",
  "Civil Construction",
  "MEP Solutions",
  "Facility Management",
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0f2440] to-[#091528] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#d4a853]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#1a365d]/20 rounded-full blur-3xl" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top Section - CTA */}
        <div className="py-12 border-b border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">Ready to Start Your Project?</h3>
              <p className="text-gray-400">Let&apos;s build something great together.</p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#d4a853] text-[#1a365d] px-8 py-4 rounded-xl font-bold hover:bg-[#e8c878] transition-all group w-fit"
            >
              Get in Touch
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Middle Section - Links Grid */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                <Image
                  src="/sama-logo.svg"
                  alt="SAMA Service Company"
                  width={36}
                  height={36}
                  className="brightness-0 invert"
                />
              </div>
              <div>
                <p className="font-bold text-xl">SAMA Service Co.</p>
                <p className="text-[#d4a853] text-sm" dir="rtl">شركة سما سيرفيس المحدودة</p>
              </div>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-sm">
              Building Saudi Arabia&apos;s future through excellence in construction, MEP
              solutions, and facility management services since 2019.
            </p>

            {/* Services Tags */}
            <div className="flex flex-wrap gap-2">
              {services.map((service) => (
                <span
                  key={service}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4a853]"></span>
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2 group"
                  >
                    <svg className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4a853]"></span>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+966920015391"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[#d4a853]/20 transition-colors">
                    <svg className="w-5 h-5 text-[#d4a853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span>+966-920015391</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:projects@samafms.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[#d4a853]/20 transition-colors">
                    <svg className="w-5 h-5 text-[#d4a853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span>projects@samafms.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#d4a853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>Jeddah, Saudi Arabia</span>
              </li>
            </ul>
          </div>

          {/* Vision 2030 */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-[#059669]/20 to-[#059669]/5 rounded-2xl p-6 border border-[#059669]/20">
              <div className="w-12 h-12 bg-[#059669] rounded-xl flex items-center justify-center mb-4">
                <span className="text-white font-bold text-sm">2030</span>
              </div>
              <p className="font-semibold text-white mb-1">Vision 2030</p>
              <p className="text-gray-400 text-sm">Partner in national development</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} SAMA Service Company LTD. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#d4a853] hover:text-[#1a365d] transition-all group"
                aria-label="Back to top"
              >
                <svg className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
