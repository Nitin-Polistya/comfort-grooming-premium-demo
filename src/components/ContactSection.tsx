"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, MessageSquare, Navigation } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-28 bg-[#0D0B0A] text-slate-100 relative overflow-hidden border-t border-stone-800">
      {/* Massive Background Typography (Part 20) */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none select-none overflow-hidden opacity-10">
        <div className="text-[20vw] font-serif font-black tracking-tighter text-amber-100 text-center leading-none">
          PINSON AL
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="location">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-semibold uppercase tracking-wider border border-amber-500/20">
            Contact Salon
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
            Contact Comfort Grooming today.
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Call or message Comfort Grooming directly to discuss currently available grooming options for your dog.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 bg-stone-900/90 rounded-3xl p-8 sm:p-10 border border-stone-800 space-y-8 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl font-bold font-serif text-white mb-1">
                Comfort Grooming
              </h3>
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                Pinson, Alabama
              </p>
            </div>

            <div className="space-y-6 text-slate-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-white text-base">Salon Address</p>
                  <p className="text-slate-300 text-base font-medium">4298 Main St</p>
                  <p className="text-slate-400 text-sm">Pinson, AL 35126</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-white text-base">Direct Phone</p>
                  <a href="tel:+12056237991" className="text-amber-300 font-bold hover:underline text-lg">
                    +1 (205) 623-7991
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Call to discuss grooming options</p>
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <a
                href="tel:+12056237991"
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-full bg-amber-900 hover:bg-amber-950 text-amber-50 font-medium text-base shadow-lg transition-all"
              >
                <Phone className="w-5 h-5 text-amber-300" />
                <span>Call (205) 623-7991</span>
              </a>

              <a
                href="https://www.facebook.com/p/Comfort-Grooming-and-Daycare-LLC-100047778857853/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm border border-slate-700 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <span>Message on Facebook</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 bg-stone-900/90 rounded-3xl p-8 sm:p-10 border border-stone-800 flex flex-col justify-between shadow-2xl"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-semibold uppercase tracking-wider border border-amber-500/20">
                <Navigation className="w-3.5 h-3.5" />
                <span>Directions & Map</span>
              </div>
              <h3 className="text-3xl font-bold font-serif text-white tracking-tight">
                4298 Main St, Pinson
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Comfort Grooming is located at 4298 Main St in Pinson, Alabama. Contact the salon directly for current grooming options and scheduling details.
              </p>
            </div>

            <div className="pt-8 space-y-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=4298+Main+St,+Pinson,+AL+35126"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-medium text-base shadow-lg transition-all"
              >
                <Navigation className="w-5 h-5 text-amber-800" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
