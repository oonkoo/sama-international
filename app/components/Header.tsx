"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#clients", label: "Clients" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo - Large and Prominent */}
            <a href="#" className="relative group">
              <div
                className={`absolute inset-0 bg-[#d4a853]/20 rounded-full blur-xl group-hover:bg-[#d4a853]/30 transition-all ${
                  scrolled ? "scale-50" : "scale-100"
                }`}
              ></div>
              <Image
                src="/sama-logo.svg"
                alt="SAMA Service Company"
                width={120}
                height={120}
                className={`relative transition-all duration-300 ${
                  scrolled ? "w-32 h-auto" : "w-32 h-auto sm:w-32 sm:h-auto"
                }`}
                priority
              />
            </a>

            {/* Desktop Navigation - Pill Style */}
            <div className="hidden md:flex items-center">
              <div
                className={`flex items-center gap-1 rounded-full px-2 py-2 transition-all ${
                  scrolled ? "bg-gray-100" : "bg-white/10 backdrop-blur-sm"
                }`}
              >
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                      scrolled
                        ? "text-gray-600 hover:text-[#1a365d] hover:bg-white"
                        : "text-gray-700 hover:text-[#1a365d] hover:bg-white/80"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Side - CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+966920015391"
                className={`flex items-center gap-2 transition-colors ${
                  scrolled ? "text-gray-600 hover:text-[#1a365d]" : "text-gray-700 hover:text-[#1a365d]"
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-[#1a365d]/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#1a365d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
              </a>
              <a
                href="#contact"
                className="group relative overflow-hidden bg-[#d4a853] text-[#1a365d] px-6 py-3 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-[#d4a853]/30 transition-all"
              >
                <span className="relative z-10">Get a Quote</span>
                <div className="absolute inset-0 bg-[#e8c878] translate-y-full group-hover:translate-y-0 transition-transform"></div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                scrolled ? "bg-gray-100 hover:bg-gray-200" : "bg-white/20 hover:bg-white/30 backdrop-blur-sm"
              }`}
              aria-label="Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Slide from Right */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500"
          onClick={() => setMobileMenuOpen(false)}
        ></div>

        {/* Menu Panel - Slide from Right */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-gradient-to-b from-[#1a365d] to-[#0f2440] shadow-2xl transition-transform duration-500 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#d4a853]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-32 h-32 bg-[#d4a853]/5 rounded-full blur-2xl"></div>

          {/* Content */}
          <div className="relative h-full flex flex-col p-8 pt-24">
            {/* Navigation Links */}
            <nav className="flex-1">
              <div className="space-y-1">
                {navLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center gap-4 py-4 border-b border-white/10 hover:border-[#d4a853]/50 transition-all"
                  >
                    <span className="text-[#d4a853]/50 text-sm font-mono">
                      0{index + 1}
                    </span>
                    <span className="text-xl font-semibold text-white group-hover:text-[#d4a853] transition-colors">
                      {link.label}
                    </span>
                    <svg
                      className="w-4 h-4 text-white/30 ml-auto group-hover:text-[#d4a853] group-hover:translate-x-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </nav>

            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <p className="text-white/40 text-xs uppercase tracking-wider">Get in Touch</p>
              <a
                href="tel:+966920015391"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span className="text-sm">+966-920015391</span>
              </a>
              <a
                href="mailto:info@sama-service.com"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-sm">info@sama-service.com</span>
              </a>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-[#d4a853] text-[#1a365d] text-center py-4 rounded-xl text-base font-bold hover:bg-[#e8c878] transition-colors"
            >
              Get a Free Quote
            </a>

            {/* Bottom Tagline */}
            <p className="text-center text-white/30 text-xs mt-6">
              Building Saudi Arabia&apos;s Future
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
