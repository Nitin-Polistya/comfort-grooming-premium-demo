"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, MessageSquare, Heart, ShieldCheck, MapPin } from "lucide-react";
import dynamic from "next/dynamic";

const DogScene = dynamic(() => import("./3d/DogScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[460px] sm:h-[520px] lg:h-[600px] flex items-center justify-center bg-stone-100/50 rounded-3xl animate-pulse text-stone-400 font-serif">
      <span>Loading 3D Salon Experience...</span>
    </div>
  ),
});

export default function Hero() {
  const [isCtaHovered, setIsCtaHovered] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.9, 0.65]);
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, -18]);

  return (
    <section ref={heroRef} className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24 bg-warm-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/5 border border-amber-900/10 text-amber-900 text-xs font-bold tracking-wider uppercase">
              <MapPin className="w-3.5 h-3.5 text-amber-800" />
              <span>PINSON, ALABAMA • PET GROOMING</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-stone-900 tracking-tight leading-[1.12]">
              Comfort they can feel. <br />
              <span className="text-amber-800 italic font-normal">Care you can see.</span>
            </h1>

            <p className="text-lg sm:text-xl text-stone-600 max-w-2xl leading-relaxed">
              Attentive local pet grooming in Pinson, Alabama. We provide individualized care tailored to your dog's specific coat and needs. Call or message us directly to discuss the right grooming option for your pet.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="tel:+12056237991"
                onMouseEnter={() => setIsCtaHovered(true)}
                onMouseLeave={() => setIsCtaHovered(false)}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-stone-900 text-white font-semibold text-base hover:bg-amber-800 active:scale-98 transition-all duration-200 shadow-lg shadow-stone-900/15 group"
              >
                <Phone className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                <span>Call to Book (+1 205-623-7991)</span>
              </a>

              <a
                href="https://www.facebook.com/p/Comfort-Grooming-and-Daycare-LLC-100047778857853/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-white border border-stone-300 text-stone-800 font-medium text-base hover:bg-stone-100 hover:border-stone-400 active:scale-98 transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-blue-600" />
                <span>Message on Facebook</span>
              </a>
            </div>

            <div className="pt-6 border-t border-stone-900/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-stone-700 text-xs font-semibold">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Local Pinson Salon</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Individualized Care</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-stone-700 shrink-0" />
                <span>4298 Main St, Pinson</span>
              </div>
            </div>

          </motion.div>

          <motion.div
            style={{ scale: sceneScale, y: sceneY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 bg-gradient-to-b from-stone-100/90 via-amber-50/40 to-stone-100/80 rounded-3xl p-2 border border-stone-200/80 shadow-2xl shadow-stone-900/5">
              <DogScene isCtaHovered={isCtaHovered} />
            </div>

            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-200/30 rounded-full blur-2xl pointer-events-none -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
