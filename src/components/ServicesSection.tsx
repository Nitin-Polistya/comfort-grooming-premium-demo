"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Phone } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-warm-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            Grooming & Pet Care
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-stone-900 tracking-tight">
            Tailored care for every coat & character.
          </h2>
          <p className="text-lg text-stone-600">
            We adapt every session to your pet's size, coat condition, and individual temperament.
          </p>
        </div>

        {/* Feature 1: Full Grooming (Asymmetric Photo Left) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-3xl p-8 lg:p-12 border border-stone-200/80 shadow-xl"
        >
          <div className="lg:col-span-6 relative h-[360px] sm:h-[420px] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/images/poodle_grooming.jpg"
              alt="Groomed companion dog example"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-bold uppercase">
              Full Care Service
            </span>
            <h3 className="text-3xl font-bold font-serif text-stone-900">
              Complete Grooming
            </h3>
            <p className="text-stone-600 text-base leading-relaxed">
              A grooming appointment structured around your dog's coat, size, and current grooming needs. Call or message the salon to discuss the most appropriate options for your pet.
            </p>
            <div className="pt-2">
              <a
                href="tel:+12056237991"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 text-white font-semibold text-sm hover:bg-amber-800 transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call to Discuss Your Dog</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Feature 2: Tidy-Up & Companion Care (Asymmetric Photo Right) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-3xl p-8 lg:p-12 border border-stone-200/80 shadow-xl"
        >
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-bold uppercase">
              Maintenance & Tidy-Up
            </span>
            <h3 className="text-3xl font-bold font-serif text-stone-900">
              Bath & Tidy Care
            </h3>
            <p className="text-stone-600 text-base leading-relaxed">
              For dogs needing light coat maintenance, bathing, or general tidying between fuller appointments.
            </p>
            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/60 text-xs text-amber-900 leading-relaxed">
              <strong>Available grooming services may vary.</strong> Contact Comfort Grooming directly to discuss your dog's needs.
            </div>
            <div>
              <a
                href="tel:+12056237991"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-stone-300 text-stone-800 font-semibold text-sm hover:bg-stone-100 transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-amber-600" />
                <span>Ask About Available Options</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[360px] sm:h-[420px] rounded-2xl overflow-hidden shadow-md order-1 lg:order-2">
            <Image
              src="/images/chihuahua_care.jpg"
              alt="Small companion dog resting comfortably"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
