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
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo - Large and Prominent */}
            <a href="#" className="relative group">
              <div
                className={`absolute inset-0 bg-[#d4a853]/20 rounded-full blur-xl group-hover:bg-[#d4a853]/30 transition-all ${
                  scrolled ? "scale-75" : "scale-100"
                }`}
              ></div>
              <Image
                src="/sama-logo.svg"
                alt="SAMA Service Company"
                width={120}
                height={120}
                className={`relative transition-all duration-300 ${
                  scrolled ? "w-16 h-16" : "w-28 h-28 sm:w-32 sm:h-32"
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

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#1a365d]/95 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        ></div>

        {/* Menu Content */}
        <div
          className={`absolute inset-x-0 top-0 p-6 transition-transform duration-300 ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-12">
            <Image
              src="/sama-logo.svg"
              alt="SAMA"
              width={100}
              height={100}
              className="w-24 h-24"
            />
          </div>

          {/* Nav Links */}
          <div className="space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center text-2xl font-bold text-white py-4 hover:text-[#d4a853] transition-colors"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 space-y-4">
            <a
              href="tel:+966920015391"
              className="flex items-center justify-center gap-3 text-white py-4"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-lg">+966-920015391</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-[#d4a853] text-[#1a365d] text-center py-4 rounded-full text-lg font-bold"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
