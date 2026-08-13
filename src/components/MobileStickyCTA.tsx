"use client";

import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="sm:hidden fixed bottom-4 left-4 right-4 z-40 transition-all duration-300">
      <a
        href="tel:+12056237991"
        className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-stone-900 text-white font-bold text-sm shadow-2xl border border-stone-700 active:scale-98"
      >
        <Phone className="w-4 h-4 text-amber-400" />
        <span>Call to Book: (205) 623-7991</span>
      </a>
    </div>
  );
}
