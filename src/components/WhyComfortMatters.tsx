"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Sparkles } from "lucide-react";

export default function WhyComfortMatters() {
  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-[#F9F6F0] text-slate-900 overflow-hidden border-t border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean 2-Column Editorial Grid (6 / 6 split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Grooming/Doodle Photograph (50% Viewport) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-amber-900/10 bg-slate-900"
          >
            <Image
              src="/images/poodle_grooming.jpg"
              alt="Groomed companion dog"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Right Column: Editorial Copy directly in page space (No white card container) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-900/5 border border-amber-900/15 text-amber-900 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Care Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif text-slate-900 tracking-tight leading-[1.12]">
              Looking good starts with feeling comfortable.
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-xl">
              Grooming needs can vary by coat, size and condition. Contact Comfort Grooming directly to discuss your dog and currently available grooming options.
            </p>

            <div className="pt-2">
              <a
                href="tel:+12056237991"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-amber-900 hover:bg-amber-950 text-amber-50 font-medium text-base shadow-lg shadow-amber-950/15 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-5 h-5 text-amber-300" />
                <span>Call (205) 623-7991</span>
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
