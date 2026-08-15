"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, MoveHorizontal } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPos(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section id="transformation" className="py-24 bg-stone-900 text-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Grooming Example</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
              From heavy coat to fresh & comfortable.
            </h2>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed">
              Regular coat care prevents painful matting, keeps skin breathing, and lets your dog move with joyful ease.
            </p>

            <div className="p-4 rounded-2xl bg-stone-800/80 border border-stone-700/60 text-xs text-stone-400 space-y-2">
              <p className="font-semibold text-amber-300">💡 Visual Demo Example</p>
              <p>Drag the slider left or right to compare the coat condition before and after grooming.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full h-[400px] sm:h-[480px] rounded-3xl overflow-hidden select-none cursor-ew-resize border border-stone-700 shadow-2xl"
            >
              {/* AFTER IMAGE (Base Layer) */}
              <div className="absolute inset-0">
                <Image
                  src="/images/after_groom.jpg"
                  alt="After grooming - freshly washed and trimmed Goldendoodle"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-900/90 backdrop-blur-md text-emerald-200 text-xs font-bold tracking-wider shadow-md">
                  AFTER GROOMING
                </div>
              </div>

              {/* BEFORE IMAGE (Clipped Layer) */}
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <Image
                  src="/images/before_groom.jpg"
                  alt="Before grooming - overgrown fur coat"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-stone-950/90 backdrop-blur-md text-stone-200 text-xs font-bold tracking-wider shadow-md">
                  BEFORE GROOMING
                </div>
              </div>

              {/* HANDLE */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.9)] cursor-ew-resize"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white text-stone-900 shadow-2xl flex items-center justify-center font-bold">
                  <MoveHorizontal className="w-5 h-5 text-stone-900" />
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
