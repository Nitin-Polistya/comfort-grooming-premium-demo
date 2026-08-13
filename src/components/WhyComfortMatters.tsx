"use client";

import React from "react";
import { Heart, ShieldCheck, Sparkles, PhoneCall } from "lucide-react";

export default function WhyComfortMatters() {
  const points = [
    {
      icon: Heart,
      title: "Attentive Pet Care",
      desc: "Every pet is handled with patience and care to keep their grooming session positive.",
    },
    {
      icon: ShieldCheck,
      title: "Individualized Focus",
      desc: "We focus on your dog's comfort and take breaks whenever necessary.",
    },
    {
      icon: Sparkles,
      title: "Quality Grooming Care",
      desc: "Using gentle shampoos and coat care techniques appropriate for your pet.",
    },
    {
      icon: PhoneCall,
      title: "Direct Contact",
      desc: "Call or message Comfort Grooming directly to discuss your pet's needs.",
    },
  ];

  return (
    <section id="philosophy" className="py-20 bg-warm-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              Care Philosophy
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-stone-900 tracking-tight leading-tight">
              Looking good starts with feeling comfortable.
            </h2>

            <p className="text-lg text-stone-600 leading-relaxed">
              At Comfort Grooming in Pinson, we focus on providing attentive, individualized pet grooming in a welcoming salon setting.
            </p>

            <blockquote className="p-6 rounded-2xl bg-white border-l-4 border-amber-800 shadow-sm text-stone-700 italic font-serif text-lg">
              "Every pet deserves patient care, gentle handling, and a groomer who truly listens to their needs."
            </blockquote>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((pt, i) => {
              const Icon = pt.icon;
              return (
                <div key={i} className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm space-y-3 hover:border-amber-700/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-serif text-stone-900">
                    {pt.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
