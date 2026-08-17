"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Sparkles } from "lucide-react";

export default function WhyComfortMatters() {
  return (
    <section id="philosophy" className="py-28 bg-[#F9F6F0] text-slate-900 overflow-hidden border-t border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Overlapping Composition */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Large Heroic Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative h-[420px] sm:h-[540px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-amber-900/10"
          >
            <Image
              src="/images/poodle_grooming.jpg"
              alt="Comfortable groomed companion dog"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </motion.div>

          {/* Overlapping Editorial Copy Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 lg:-ml-16 z-20 bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-amber-900/15 shadow-2xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-900/5 border border-amber-900/15 text-amber-900 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Care Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold font-serif text-slate-900 tracking-tight leading-[1.15]">
              Looking good starts with feeling comfortable.
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Grooming needs can vary by coat, size and condition. Contact Comfort Grooming directly to discuss your dog and currently available grooming options.
            </p>

            <div className="pt-2">
              <a
                href="tel:+12056237991"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-amber-900 hover:bg-amber-950 text-amber-50 font-medium text-base shadow-lg shadow-amber-950/15 transition-all"
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
