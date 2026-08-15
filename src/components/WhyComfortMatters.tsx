"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Phone } from "lucide-react";

export default function WhyComfortMatters() {
  return (
    <section id="philosophy" className="py-24 bg-warm-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative h-[450px] sm:h-[540px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/chihuahua_care.jpg"
              alt="Pet care philosophy - small companion dog resting peacefully"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">Pinson Salon Philosophy</span>
              <p className="text-lg font-serif italic">"Patient care makes all the difference."</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-8"
          >
            <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              Care Philosophy
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-stone-900 tracking-tight leading-tight">
              Looking good starts with feeling comfortable.
            </h2>

            <p className="text-lg text-stone-600 leading-relaxed">
              At Comfort Grooming in Pinson, we believe a thoughtful grooming experience starts with understanding the individual dog. Call or message us directly to discuss your pet's coat and grooming options.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-md text-stone-800 font-serif text-lg leading-relaxed">
              Attentive local pet grooming focused on quality coat care and companion dog comfort in a welcoming salon setting.
            </div>

            <div className="pt-2">
              <a
                href="tel:+12056237991"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-stone-900 text-white font-semibold text-base hover:bg-amber-800 transition-colors shadow-lg shadow-stone-900/10"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Comfort Grooming ((205) 623-7991)</span>
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
