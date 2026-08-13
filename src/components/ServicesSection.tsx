"use client";

import React from "react";
import { Sparkles, Scissors, Bath, Check } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      badge: "Full Service",
      title: "Bath & Complete Grooming",
      icon: Sparkles,
      desc: "Thorough coat bath, drying, coat brushing, and overall pet care tailored to your dog.",
      highlights: [
        "Soothing coat bath & gentle drying",
        "Thorough coat brush out",
        "Neat scissor styling trim",
        "Clean ear inspection",
        "Nail trim care",
      ],
    },
    {
      badge: "Maintenance",
      title: "Tidy-Up & Scissoring",
      icon: Scissors,
      desc: "Great for keeping face, paws, and coat neat and manageable between full appointments.",
      highlights: [
        "Face & eye area scissor touch-up",
        "Paw & pad cleanup",
        "Deshedding coat brush out",
        "Sanitary trim care",
        "Refreshing finish",
      ],
    },
    {
      badge: "Gentle Care",
      title: "Attentive Care Session",
      icon: Bath,
      desc: "Personalized attention tailored for pets needing extra patience, reassurance, or soft handling.",
      highlights: [
        "Gentle bathing formulas",
        "Low-noise handling techniques",
        "Nail care breaks as needed",
        "Calm salon atmosphere",
        "Individualized pet focus",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-warm-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            Personalized Pet Grooming
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-stone-900 tracking-tight">
            Attentive care for every dog.
          </h2>
          <p className="text-lg text-stone-600">
            Call or message Comfort Grooming to discuss your dog's coat type, temperament, and specific grooming options.
          </p>
        </div>

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
                      Care Features:
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
