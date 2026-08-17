"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useReducedMotion } from "framer-motion";
import { Phone, MessageSquare, MapPin } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isDogHovered, setIsDogHovered] = useState(false);

  // Scroll handoff setup (Scene 1 -> Scene 2)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const rearTextY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const rearTextOpacity = useTransform(scrollYProgress, [0, 0.7], [0.92, 0.15]);
  const mascotY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const mascotScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  // Subtle rightward scroll shift to reveal GROOMING as user scrolls
  const mascotScrollX = useTransform(scrollYProgress, [0, 0.7], [0, 32]);

  // Pointer depth interaction (desktop only)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const hoverXValue = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const mascotRotateX = useSpring(useTransform(mouseY, [-300, 300], [1.5, -1.5]), springConfig);
  const mascotRotateY = useSpring(useTransform(mouseX, [-400, 400], [-1.5, 1.5]), springConfig);
  const mascotTranslateX = useSpring(useTransform(mouseX, [-400, 400], [-8, 8]), springConfig);

  // Spring-animated rightward shift on hover (~30px reveal for "G")
  const mascotHoverX = useSpring(hoverXValue, springConfig);

  // Combined single X transform pipeline
  const mascotCombinedX = useTransform(
    [mascotScrollX, mascotHoverX, mascotTranslateX],
    ([scrollX, hX, transX]: number[]) => scrollX + hX + transX
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || window.innerWidth < 768) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMascotMouseEnter = () => {
    if (shouldReduceMotion || window.innerWidth < 768) return;
    setIsDogHovered(true);
    hoverXValue.set(30); // 30px rightward shift reveals "G"
  };

  const handleMascotMouseLeave = () => {
    setIsDogHovered(false);
    hoverXValue.set(0); // Smoothly return to resting position
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleContainerMouseLeave = () => {
    handleMascotMouseLeave();
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleContainerMouseLeave}
      className="relative min-h-[92vh] sm:min-h-screen bg-[#F9F6F0] text-slate-900 overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 pb-12"
    >
      {/* Background Soft Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] left-[20%] w-[600px] h-[600px] bg-amber-200/25 rounded-full blur-3xl" />
        <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-amber-300/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        
        {/* Factual Subheader Location Badge */}
        <div className="relative z-30 flex items-center gap-2 mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-900/5 border border-amber-900/15 text-amber-900 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
            <span>4298 MAIN ST • PINSON, AL</span>
          </div>
        </div>

        {/* Art-Directed 3-Layer Interlocking Editorial Composition */}
        <div className="relative min-h-[480px] sm:min-h-[580px] lg:min-h-[640px] flex flex-col sm:flex-row items-center sm:items-center">
          
          {/* Layer 1 (z-10): Rear Massive Editorial Typography */}
          <motion.div
            style={{
              y: shouldReduceMotion ? 0 : rearTextY,
              opacity: shouldReduceMotion ? 0.92 : rearTextOpacity,
            }}
            className="absolute inset-x-0 top-0 sm:top-0 z-10 select-none pointer-events-none"
          >
            <h1 className="font-serif tracking-tight text-amber-950 text-[14vw] sm:text-[11vw] lg:text-[9.5rem] font-bold leading-[0.82] uppercase text-left">
              Comfort
            </h1>
            <div className="font-serif tracking-tight text-amber-950/80 text-[13vw] sm:text-[10vw] lg:text-[8.5rem] font-medium leading-[0.85] uppercase text-left pl-[4vw] sm:pl-[8vw]">
              Grooming
            </div>
          </motion.div>

          {/* Layer 2 (z-20): Candidate B Apricot Doodle Character with Reveal Motion */}
          <motion.div
            onMouseEnter={handleMascotMouseEnter}
            onMouseLeave={handleMascotMouseLeave}
            style={{
              y: shouldReduceMotion ? 0 : mascotY,
              scale: shouldReduceMotion ? 1 : mascotScale,
              rotateX: shouldReduceMotion ? 0 : mascotRotateX,
              rotateY: shouldReduceMotion ? 0 : mascotRotateY,
              x: shouldReduceMotion ? 0 : mascotCombinedX,
            }}
            className="relative sm:absolute right-0 sm:right-[2%] lg:right-[6%] top-0 sm:top-[2%] z-20 w-[260px] sm:w-[440px] lg:w-[560px] h-[320px] sm:h-[520px] lg:h-[640px] pointer-events-auto flex items-center justify-center my-4 sm:my-0 cursor-pointer"
          >
            {/* Dynamic Radial Contact Shadow beneath Paws */}
            <div className="absolute bottom-[2%] left-[18%] right-[18%] h-[28px] sm:h-[32px] bg-amber-950/25 rounded-[100%] blur-md scale-y-50 translate-y-2 z-15" />
            
            {/* Transparent Master Character */}
            <div className="relative w-full h-full">
              <Image
                src="/images/character-hero.webp"
                alt="Comfort Grooming Mascot"
                fill
                className="object-contain drop-shadow-xl"
                priority
                unoptimized
              />
            </div>
          </motion.div>

          {/* Layer 3 (z-30): Foreground Editorial Accent Typography & Copy */}
          <div className="relative z-30 max-w-xl lg:max-w-2xl pt-2 sm:pt-40 lg:pt-44 space-y-5 sm:space-y-6 pointer-events-none">
            <div className="space-y-3 pointer-events-auto">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-amber-900 italic font-normal tracking-tight leading-[1.08] drop-shadow-sm">
                Care you can see.
                <br />
                <span className="text-slate-900 not-italic font-sans font-light text-2xl sm:text-4xl block pt-1.5">
                  Comfort they can feel.
                </span>
              </h2>
              <p className="text-slate-700 text-base sm:text-lg max-w-md leading-relaxed pt-1">
                Local dog grooming in Pinson, Alabama. Call or message Comfort Grooming to discuss currently available grooming options for your dog.
              </p>
            </div>

            {/* High-Contrast Action CTAs */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pointer-events-auto">
              <a
                href="tel:+12056237991"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-900 hover:bg-amber-950 text-amber-50 rounded-full font-medium text-base shadow-lg shadow-amber-950/15 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-5 h-5 text-amber-300" />
                <span>Call Comfort Grooming</span>
              </a>

              <a
                href="https://www.facebook.com/p/Comfort-Grooming-and-Daycare-LLC-100047778857853/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white/80 hover:bg-white text-slate-800 border border-slate-300/80 rounded-full font-medium text-base shadow-sm transition-all"
              >
                <MessageSquare className="w-5 h-5 text-amber-700" />
                <span>Message on Facebook</span>
              </a>
            </div>

            {/* Address bar footnote */}
            <div className="pt-1 flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium pointer-events-auto">
              <MapPin className="w-4 h-4 text-amber-700 flex-shrink-0" />
              <span>4298 Main St, Pinson, AL 35126</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
