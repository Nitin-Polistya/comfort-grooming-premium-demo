"use client";

import React, { useState, useRef } from "react";
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
    <section id="transformation" className="py-20 bg-stone-900 text-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Explanation */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Grooming Transformations</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
              From overgrown coat to clean & joyful.
            </h2>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed">
              Regular professional grooming isn't just about looking handsome—it prevents coat matting, keeps skin healthy, and lets your dog feel lighter and happier.
            </p>

            <div className="p-4 rounded-2xl bg-stone-800/80 border border-stone-700/60 text-sm text-stone-300 space-y-2">
              <p className="font-semibold text-amber-300">💡 Interactive Demo Slider</p>
              <p>Drag the slider left or right to explore the transformation visual example.</p>
            </div>
          </div>

          {/* Right Draggable Reveal Canvas */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full h-[380px] sm:h-[460px] rounded-3xl overflow-hidden select-none cursor-ew-resize border border-stone-700 shadow-2xl"
            >
              {/* AFTER STATE (Full Width Base) */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-stone-800 to-emerald-950/40 flex items-center justify-center p-8 text-center">
                <div className="space-y-3">
                  <span className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center text-2xl mx-auto font-bold">
                    ✨
                  </span>
                  <span className="block text-2xl sm:text-3xl font-bold font-serif text-white">
                    After Grooming
                  </span>
                  <p className="text-sm text-emerald-200/90 max-w-xs mx-auto">
                    Fluffy, soft coat, scissoring precision, clean eyes & cheerful smile.
                  </p>
                </div>

                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-900/80 backdrop-blur-md text-emerald-300 text-xs font-bold tracking-wider">
                  AFTER GROOM
                </div>
              </div>

              {/* BEFORE STATE (Clipped Top Layer) */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-900 to-amber-950 flex items-center justify-center p-8 text-center"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <div className="space-y-3">
                  <span className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center text-2xl mx-auto font-bold">
                    🐾
                  </span>
                  <span className="block text-2xl sm:text-3xl font-bold font-serif text-amber-100">
                    Before Grooming
                  </span>
                  <p className="text-sm text-amber-200/80 max-w-xs mx-auto">
                    Overgrown fur, heavy shedding, face hair blocking eyes.
                  </p>
                </div>

                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-stone-950/80 backdrop-blur-md text-stone-300 text-xs font-bold tracking-wider">
                  BEFORE GROOM
                </div>
              </div>

              {/* DRAG HANDLE BAR */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] cursor-ew-resize"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-stone-900 shadow-xl flex items-center justify-center font-bold">
                  <MoveHorizontal className="w-5 h-5 text-stone-900" />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
