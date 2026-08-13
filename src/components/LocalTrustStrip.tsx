"use client";

import React from "react";
import { HeartHandshake, Shield, Sparkles, Clock } from "lucide-react";

export default function LocalTrustStrip() {
  const pillars = [
    {
      icon: HeartHandshake,
      title: "One-on-One Attention",
      desc: "No loud chaotic assembly line. Your pet has our groomer's complete focus.",
    },
    {
      icon: Shield,
      title: "Low-Stress Environment",
      desc: "Specialized calm handling techniques tailored for anxious or sensitive pups.",
    },
    {
      icon: Sparkles,
      title: "All Sizes Welcome",
      desc: "From delicate Chihuahuas to Goldendoodles and large family companions.",
    },
    {
      icon: Clock,
      title: "Direct Scheduling",
      desc: "Call or text directly at (205) 623-7991 to find the perfect grooming time.",
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
            Local Care in Pinson, Alabama
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-stone-50 border border-stone-200/60 hover:border-amber-700/30 hover:bg-amber-50/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-amber-800 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-serif text-stone-900 mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
