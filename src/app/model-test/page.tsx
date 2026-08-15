"use client";

import React, { Suspense, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";
import * as THREE from "three";

interface ModelViewerProps {
  modelPath: string;
}

function Model({ modelPath }: ModelViewerProps) {
  const { scene } = useGLTF(modelPath);
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={ref}>
      <Center>
        <primitive object={scene} />
      </Center>
    </group>
  );
}

const CANDIDATES = [
  {
    id: "verified_shiba",
    name: "Verified 3D Companion Dog (dog.glb)",
    path: "/models/dog.glb",
    source: "https://github.com/hana67277/ThreejsShibadoganimation",
    license: "CC-BY 4.0 / Open Source",
    creator: "Vazxmv / Open Source 3D",
  },
];

export default function ModelTestPage() {
  const [selectedCandidate, setSelectedCandidate] = useState(CANDIDATES[0]);

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "#1e1e24", color: "#ffffff", display: "flex", flexDirection: "column" }}>
      <header style={{ padding: "16px 24px", backgroundColor: "#121216", borderBottom: "1px solid #333", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: "20px", fontWeight: "bold" }}>Isolated 3D Dog Model Tester</h1>
          <p style={{ margin: "4px 0 0", fontSize: "13px", color: "#aaa" }}>
            PHASE 3 Visual Gate — Testing candidate models before hero integration
          </p>
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          {CANDIDATES.map((cand) => (
            <button
              key={cand.id}
              onClick={() => setSelectedCandidate(cand)}
              style={{
                padding: "8px 16px",
                borderRadius: "6px",
                border: "none",
                backgroundColor: selectedCandidate.id === cand.id ? "#e5a93c" : "#33333d",
                color: selectedCandidate.id === cand.id ? "#000" : "#fff",
                fontWeight: selectedCandidate.id === cand.id ? "bold" : "normal",
                cursor: "pointer",
              }}
            >
              {cand.name}
            </button>
          ))}
        </div>
      </header>

      <div style={{ flex: 1, position: "relative" }}>
        <Canvas camera={{ position: [0, 1.5, 4], fov: 45 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 10, 5]} intensity={2} castShadow />
          <directionalLight position={[-5, 5, -5]} intensity={0.8} />

          <Suspense fallback={null}>
            <Model key={selectedCandidate.path} modelPath={selectedCandidate.path} />
          </Suspense>

          <OrbitControls makeDefault enableZoom enablePan />
        </Canvas>

        <div style={{ position: "absolute", bottom: "20px", left: "20px", background: "rgba(0,0,0,0.8)", padding: "16px 20px", borderRadius: "8px", maxWidth: "400px", border: "1px solid #444" }}>
          <h3 style={{ margin: "0 0 8px", fontSize: "16px", color: "#e5a93c" }}>{selectedCandidate.name}</h3>
          <p style={{ margin: "4px 0", fontSize: "13px" }}><strong>Path:</strong> {selectedCandidate.path}</p>
          <p style={{ margin: "4px 0", fontSize: "13px" }}><strong>Source:</strong> {selectedCandidate.source}</p>
          <p style={{ margin: "4px 0", fontSize: "13px" }}><strong>License:</strong> {selectedCandidate.license}</p>
          <p style={{ margin: "4px 0", fontSize: "13px" }}><strong>Creator:</strong> {selectedCandidate.creator}</p>
        </div>
      </div>
    </div>
  );
}
