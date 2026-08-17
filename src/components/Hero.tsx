"use client";

import React from "react";
import Image from "next/image";
import { Phone, MessageSquare, MapPin, Sparkles, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen bg-[#F9F6F0] text-slate-900 overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 pb-12">
      {/* Background Soft Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] left-[20%] w-[600px] h-[600px] bg-amber-200/25 rounded-full blur-3xl" />
        <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-amber-300/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        
        {/* Top Editorial Subheader Badges */}
        <div className="relative z-30 flex flex-wrap items-center gap-3 mb-4 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-900/5 border border-amber-900/15 text-amber-900 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Pinson, AL’s Premier Pet Studio</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-900/5 border border-emerald-900/15 text-emerald-800 text-xs font-medium">
            <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
            <span>4.9 Star Rated • Gentle & Stress-Free</span>
          </div>
        </div>

        {/* Art-Directed 3-Layer Interlocking Editorial Composition */}
        <div className="relative min-h-[480px] sm:min-h-[580px] lg:min-h-[640px] flex flex-col sm:flex-row items-center sm:items-center">
          
          {/* Layer 1 (z-10): Rear Massive Editorial Typography */}
          <div className="absolute inset-x-0 top-0 sm:top-0 z-10 select-none pointer-events-none">
            <h1 className="font-serif tracking-tight text-amber-950 text-[14vw] sm:text-[11vw] lg:text-[9.5rem] font-bold leading-[0.82] uppercase text-left opacity-[0.92]">
              Comfort
            </h1>
            <div className="font-serif tracking-tight text-amber-950/80 text-[13vw] sm:text-[10vw] lg:text-[8.5rem] font-medium leading-[0.85] uppercase text-left pl-[4vw] sm:pl-[8vw]">
              Grooming
            </div>
          </div>

          {/* Layer 2 (z-20): Candidate B Apricot Doodle Character */}
          {/* Desktop & Tablet: Central-Right positioning overlapping rear text */}
          {/* Mobile: Centered responsive mascot below title */}
          <div className="relative sm:absolute right-0 sm:right-[2%] lg:right-[6%] top-0 sm:top-[2%] z-20 w-[260px] sm:w-[440px] lg:w-[560px] h-[320px] sm:h-[520px] lg:h-[640px] pointer-events-none flex items-center justify-center my-4 sm:my-0">
            {/* Dynamic Radial Contact Shadow beneath Paws */}
            <div className="absolute bottom-[2%] left-[18%] right-[18%] h-[28px] sm:h-[32px] bg-amber-950/25 rounded-[100%] blur-md scale-y-50 translate-y-2 z-15" />
            
            {/* Transparent Master Character */}
            <div className="relative w-full h-full">
              <Image
                src="/images/character-hero.webp"
                alt="Comfort Grooming Apricot Teddy Doodle Mascot"
                fill
                className="object-contain drop-shadow-xl"
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Layer 3 (z-30): Foreground Editorial Accent Typography & Copy */}
          <div className="relative z-30 max-w-xl lg:max-w-2xl pt-2 sm:pt-40 lg:pt-44 space-y-5 sm:space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-amber-900 italic font-normal tracking-tight leading-[1.08] drop-shadow-sm">
                Care you can see.
                <br />
                <span className="text-slate-900 not-italic font-sans font-light text-2xl sm:text-4xl block pt-1.5">
                  Comfort they can feel.
                </span>
              </h2>
              <p className="text-slate-700 text-base sm:text-lg max-w-md leading-relaxed pt-1">
                Thoughtful, one-on-one pet grooming designed for nervous & sensitive companions. Every bath, trim, and style delivered with patience and love.
              </p>
            </div>

            {/* High-Contrast Action CTAs */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <a
                href="tel:2056830220"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-900 hover:bg-amber-950 text-amber-50 rounded-full font-medium text-base shadow-lg shadow-amber-950/15 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-5 h-5 text-amber-300" />
                <span>Call (205) 683-0220</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white/80 hover:bg-white text-slate-800 border border-slate-300/80 rounded-full font-medium text-base shadow-sm transition-all"
              >
                <MessageSquare className="w-5 h-5 text-amber-700" />
                <span>Request Appointment</span>
              </a>
            </div>

            {/* Address bar footnote */}
            <div className="pt-1 flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
              <MapPin className="w-4 h-4 text-amber-700 flex-shrink-0" />
              <span>4720 Center Point Rd, Pinson, AL 35126 • Open Mon–Sat</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
