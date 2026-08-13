"use client";

import React from "react";
import { Heart, ShieldAlert, Sparkles, Smile } from "lucide-react";

export default function WhyComfortMatters() {
  const points = [
    {
      icon: Heart,
      title: "Patient 1-on-1 Care",
      desc: "Every pet is cared for individually. We take breaks when needed to ensure your pet never feels rushed or overwhelmed.",
    },
    {
      icon: ShieldAlert,
      title: "Gentle for Anxious Pets",
      desc: "Dremel nail filing, quiet driers, and soft vocal reassurance create a calm atmosphere even for nervous dogs.",
    },
    {
      icon: Sparkles,
      title: "Sanitary & Clean Products",
      desc: "We use gentle, high-grade shampoos and conditioners that protect skin moisture and leave coat manageable.",
    },
    {
      icon: Smile,
      title: "Clear Communication",
      desc: "Speak directly with your groomer about specific haircuts, coat maintenance tips, or health observations.",
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
              At Comfort Grooming in Pinson, we believe grooming shouldn't be a stressful chore for your pet. Our dedicated one-on-one setup ensures your dog feels safe, respected, and pampered from start to finish.
            </p>

            <blockquote className="p-6 rounded-2xl bg-white border-l-4 border-amber-800 shadow-sm text-stone-700 italic font-serif text-lg">
              "Creating a quiet, low-stress space makes all the difference—especially for pups who get nervous around loud salons."
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
