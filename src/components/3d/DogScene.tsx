"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import InteractiveDog from "./InteractiveDog";

interface DogSceneProps {
  isCtaHovered?: boolean;
}

export default function DogScene({ isCtaHovered = false }: DogSceneProps) {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
  }, []);

  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-stone-100/60 rounded-3xl p-8 text-center border border-stone-200">
        <div>
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 font-bold text-3xl">
            🐕
          </div>
          <p className="font-serif text-stone-900 font-bold text-xl">Comfort Grooming</p>
          <p className="text-xs text-stone-600 max-w-xs mt-1">Interactive 3D experience requires WebGL support.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[460px] sm:h-[520px] lg:h-[600px] relative touch-none select-none">
      <Canvas
        shadows
        camera={{ position: [0, 0.4, 4.8], fov: 45 }}
        dpr={[1, Math.min(2, typeof window !== "undefined" ? window.devicePixelRatio : 1.5)]}
        style={{ pointerEvents: reducedMotion ? "none" : "auto" }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight
          position={[3, 5, 4]}
          intensity={1.4}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.0001}
        />
        <directionalLight position={[-3, 2, -2]} intensity={0.5} color="#FCE7F3" />
        <pointLight position={[0, -1, 2]} intensity={0.3} color="#FEF3C7" />

        <Suspense fallback={null}>
          <InteractiveDog isCtaHovered={isCtaHovered} />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-3 right-4 pointer-events-none opacity-70 hover:opacity-100 transition-opacity">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-stone-200/60 text-[11px] font-medium text-stone-600 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Interactive 3D • Move cursor to interact
        </span>
      </div>
    </div>
  );
}
