"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-900 text-amber-300 flex items-center justify-center font-bold">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-white font-bold font-serif text-base block">Comfort Grooming</span>
              <span className="text-stone-500 text-[11px]">4298 Main St, Pinson, AL 35126</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="tel:+12056237991" className="hover:text-amber-400 transition-colors">
              Call (205) 623-7991
            </a>
            <a
              href="https://www.facebook.com/p/Comfort-Grooming-and-Daycare-LLC-100047778857853/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              Facebook Page
            </a>
            <a
              href="https://maps.google.com/?q=4298+Main+St,+Pinson,+AL+35126"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              Directions
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500">
          <p>© {new Date().getFullYear()} Comfort Grooming and Daycare LLC. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Website concept by</span>
            <span className="text-stone-300 font-semibold">Paldren</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
