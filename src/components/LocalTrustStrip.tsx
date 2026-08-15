"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, PhoneCall, Sparkles } from "lucide-react";

export default function LocalTrustStrip() {
  return (
    <section className="py-8 bg-white border-y border-stone-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 text-stone-800 text-sm font-medium text-center md:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-bold text-stone-900">Local Grooming Salon</span>
              <span className="text-stone-500 text-xs">4298 Main St, Pinson, AL 35126</span>
            </div>
          </div>

          <div className="hidden md:block w-px h-8 bg-stone-200" />

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-bold text-stone-900">Attentive & Individualized</span>
              <span className="text-stone-500 text-xs">Focused on your dog's unique needs</span>
            </div>
          </div>

          <div className="hidden md:block w-px h-8 bg-stone-200" />

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-bold text-stone-900">Direct Contact & Scheduling</span>
              <a href="tel:+12056237991" className="text-amber-800 font-bold hover:underline text-xs">
                Call or Text (205) 623-7991
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
