"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Sparkles, ChevronRight, Info } from "lucide-react";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "complete",
      tag: "Full Care Option",
      title: "Complete Grooming",
      description: "Contact Comfort Grooming to discuss grooming options suitable for your dog's current coat and grooming needs.",
      actionText: "Call to Discuss Options",
      image: "/images/poodle_grooming.jpg",
      alt: "Groomed apricot poodle companion",
    },
    {
      id: "tidy",
      tag: "Maintenance Care",
      title: "Bath & Tidy",
      description: "Ask about available bathing, coat-care and general tidying options between fuller grooming appointments.",
      actionText: "Ask About Tidying Options",
      image: "/images/candidates/apricot_doodle_candidate_b.jpg",
      alt: "Apricot teddy doodle coat maintenance",
    },
    {
      id: "salon",
      tag: "Personalized Discussion",
      title: "Talk With the Salon",
      description: "Every dog can have different grooming needs. Call or message Comfort Grooming to discuss current options for your dog.",
      actionText: "Contact Comfort Grooming",
      image: "/images/poodle_grooming.jpg",
      alt: "Salon discussion and care planning",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#F9F6F0] text-slate-900 border-t border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-900/5 border border-amber-900/15 text-amber-900 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Grooming Services</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-slate-900 tracking-tight">
            Grooming options for your dog.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Explore available options and contact Comfort Grooming directly to discuss your companion's needs.
          </p>
        </div>

        {/* Editorial Storytelling Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-4">
          {/* Left Column: Coherent Pet Imagery */}
          <div className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border border-amber-900/10 bg-slate-900">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={services[activeTab].image}
                  alt={services[activeTab].alt}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-300">
                    {services[activeTab].tag}
                  </span>
                  <p className="font-serif text-xl sm:text-2xl font-medium">
                    {services[activeTab].title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Editorial Service Options */}
          <div className="lg:col-span-6 space-y-4">
            {services.map((service, idx) => {
              const isActive = activeTab === idx;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveTab(idx)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border ${
                    isActive
                      ? "bg-white border-amber-900/20 shadow-lg"
                      : "bg-amber-900/5 hover:bg-white/60 border-transparent"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                      {service.tag}
                    </span>
                    <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? "text-amber-800 rotate-90" : "text-slate-400"}`} />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-slate-900 mt-1">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
                    {service.description}
                  </p>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="pt-4 flex items-center gap-4"
                    >
                      <a
                        href="tel:+12056237991"
                        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-amber-900 hover:bg-amber-950 text-amber-50 font-medium text-sm shadow-md transition-all"
                      >
                        <Phone className="w-4 h-4 text-amber-300" />
                        <span>{service.actionText}</span>
                      </a>
                    </motion.div>
                  )}
                </div>
              );
            })}

            {/* Mandatory Factual Notice (Part 14) */}
            <div className="p-4 rounded-xl bg-amber-100/50 border border-amber-900/10 text-xs text-amber-950 flex items-start gap-2.5 leading-relaxed mt-4">
              <Info className="w-4 h-4 text-amber-800 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Available grooming services may vary.</strong> Contact Comfort Grooming directly for current options.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
