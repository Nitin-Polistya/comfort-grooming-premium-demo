"use client";

import React, { useState, useEffect } from "react";
import { Phone, Menu, X, Sparkles } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? "glass-header shadow-sm" : "bg-warm-ivory/95"
    }`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}>

        <a href="#" className="flex items-center gap-3 group focus:outline-none rounded-lg p-1">
          <div className="w-10 h-10 rounded-2xl bg-amber-800 text-stone-100 flex items-center justify-center font-bold shadow-md shadow-amber-900/10 group-hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <span className="block text-xl font-bold tracking-tight text-stone-900 font-serif group-hover:text-amber-800 transition-colors">
              Comfort Grooming
            </span>
            <span className="block text-[11px] font-medium tracking-wider uppercase text-amber-800/80 -mt-0.5">
              4298 Main St • Pinson, AL
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-700">
          <a href="#services" className="hover:text-amber-800 transition-colors py-2">
            Services
          </a>
          <a href="#transformation" className="hover:text-amber-800 transition-colors py-2">
            Before & After
          </a>
          <a href="#philosophy" className="hover:text-amber-800 transition-colors py-2">
            Care Philosophy
          </a>
          <a href="#location" className="hover:text-amber-800 transition-colors py-2">
            Contact & Directions
          </a>
        </nav>

        <div className="hidden sm:flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-200/60 border border-stone-300/40 text-xs font-medium text-stone-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Serving Pinson, Alabama</span>
          </div>

          <a
            href="tel:+12056237991"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 text-stone-100 text-sm font-semibold hover:bg-amber-800 active:scale-95 transition-all duration-200 shadow-sm"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>(205) 623-7991</span>
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl text-stone-700 hover:bg-stone-200/60 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-50/95 backdrop-blur-xl border-b border-stone-200 px-6 py-6 space-y-4 shadow-xl transition-all">
          <nav className="flex flex-col space-y-3 font-medium text-stone-800 text-base">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-stone-200/60 hover:text-amber-800"
            >
              Services
            </a>
            <a
              href="#transformation"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-stone-200/60 hover:text-amber-800"
            >
              Before & After
            </a>
            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-stone-200/60 hover:text-amber-800"
            >
              Care Philosophy
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-stone-200/60 hover:text-amber-800"
            >
              Contact & Directions
            </a>
          </nav>

          <div className="pt-3 flex flex-col gap-3">
            <a
              href="tel:+12056237991"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-stone-900 text-white font-semibold text-sm shadow-md"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call (205) 623-7991</span>
            </a>
            <a
              href="https://www.facebook.com/p/Comfort-Grooming-and-Daycare-LLC-100047778857853/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-sm"
            >
              <span>Message on Facebook</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
