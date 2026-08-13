"use client";

import React from "react";
import { Sparkles, Scissors, Bath, Check } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      badge: "Full Spa Day",
      title: "The Signature Bath & Groom",
      icon: Sparkles,
      desc: "Complete head-to-paw care designed to leave your dog refreshed, soft, and comfortable.",
      highlights: [
        "Hydro-surge relaxing bath with premium shampoos",
        "Gentle hand blow-dry & coat brush out",
        "Breed-specific styling or custom scissor trim",
        "Sanitary trim & paw pad tidy",
        "Nail clipping & ear cleaning",
      ],
    },
    {
      badge: "Maintenance Care",
      title: "Precision Tidy-Up & Scissoring",
      icon: Scissors,
      desc: "Ideal between full groomings to keep face, paws, and coat neat and manageable.",
      highlights: [
        "Face, eye, and muzzle scissor trimming",
        "Paw pad shaving & foot shaping",
        "Sanitary area cleanup",
        "Thorough deshedding coat brush out",
        "Refreshing coat mist & bandana finish",
      ],
    },
    {
      badge: "Gentle Care",
      title: "Spa Bath & Anxious Pet Care",
      icon: Bath,
      desc: "Patient handling tailored for dogs that need extra time, calm reassurance, or delicate touch.",
      highlights: [
        "Soothing bath with hypoallergenic formulas",
        "Low-noise dryer options for noise-sensitive dogs",
        "Gentle nail dremel filing (smooth edges)",
        "Nail trim with stress-free breaks",
        "Ear flush & skin inspection",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-warm-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            Personalized Grooming
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-stone-900 tracking-tight">
            A calmer grooming experience for every pet.
          </h2>
          <p className="text-lg text-stone-600">
            We tailor every session to your dog's unique breed, coat texture, temperament, and comfort level. Call us to discuss your pet's needs.
          </p>
        </div>

        {/* 3 Editorial Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-lg shadow-stone-900/5 flex flex-col justify-between hover:shadow-xl hover:border-amber-800/20 transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-bold tracking-wide">
                      {svc.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold font-serif text-stone-900 mb-3">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                      Includes:
                    </p>
                    <ul className="space-y-2.5">
                      {svc.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-stone-700">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-stone-100">
                  <a
                    href="tel:+12056237991"
                    className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl bg-stone-100 text-stone-900 font-semibold text-sm hover:bg-amber-800 hover:text-white transition-colors"
                  >
                    Call to Discuss Your Dog
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
