"use client";

import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, ContactShadows, useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface InteractiveDogProps {
  isCtaHovered?: boolean;
}

function DogModel({ isCtaHovered }: { isCtaHovered: boolean }) {
  const { scene } = useGLTF("/models/dog.glb");
  const dogRef = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    const px = state.pointer.x;
    const py = state.pointer.y;

    targetRotation.current.y = THREE.MathUtils.lerp(targetRotation.current.y, px * 0.45, delta * 3.5);
    targetRotation.current.x = THREE.MathUtils.lerp(targetRotation.current.x, -py * 0.15, delta * 3.5);

    if (dogRef.current) {
      dogRef.current.rotation.y = targetRotation.current.y;
      dogRef.current.rotation.x = targetRotation.current.x;

      const breath = Math.sin(state.clock.getElapsedTime() * 2.2) * 0.03;
      const hoverLift = isCtaHovered ? 0.12 : 0;
      dogRef.current.position.y = THREE.MathUtils.lerp(
        dogRef.current.position.y,
        -0.48 + breath + hoverLift,
        delta * 4
      );
    }
  });

  return (
    <group ref={dogRef} position={[0, -0.48, 0]} scale={2.05}>
      <primitive object={scene} />
    </group>
  );
}

function ProceduralDog({ isCtaHovered }: { isCtaHovered: boolean }) {
  const dogGroupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const tailRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const px = state.pointer.x;
    const py = state.pointer.y;

    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, px * 0.5, delta * 4);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -py * 0.3, delta * 4);
    }

    if (dogGroupRef.current) {
      const breath = Math.sin(state.clock.getElapsedTime() * 2.4) * 0.05;
      dogGroupRef.current.position.y = THREE.MathUtils.lerp(
        dogGroupRef.current.position.y,
        -0.45 + breath + (isCtaHovered ? 0.15 : 0),
        delta * 4
      );
    }

    if (tailRef.current) {
      const wag = Math.sin(state.clock.getElapsedTime() * (isCtaHovered ? 14 : 5)) * 0.3;
      tailRef.current.rotation.y = wag;
    }
  });

  return (
    <group ref={dogGroupRef} position={[0, -0.45, 0]} scale={1.15}>
      <mesh position={[0, 0.25, 0]} castShadow receiveShadow>
        <sphereGeometry args={[0.92, 32, 32]} />
        <meshStandardMaterial color="#E5CBB4" roughness={0.8} />
      </mesh>

      <group ref={headRef} position={[0, 1.3, 0.16]}>
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[0.74, 32, 32]} />
          <meshStandardMaterial color="#E5CBB4" roughness={0.8} />
        </mesh>
        <mesh position={[0, -0.1, 0.52]} scale={[0.44, 0.38, 0.48]}>
          <sphereGeometry args={[0.72, 24, 24]} />
          <meshStandardMaterial color="#F6EDE4" roughness={0.9} />
        </mesh>
        <mesh position={[0, 0.06, 0.81]} scale={[0.17, 0.13, 0.15]}>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshStandardMaterial color="#1C1715" roughness={0.1} />
        </mesh>
      </group>

      <group ref={tailRef} position={[0, 0.22, -0.82]}>
        <mesh position={[0, 0.42, -0.2]} scale={[0.24, 0.52, 0.24]}>
          <sphereGeometry args={[0.8, 24, 24]} />
          <meshStandardMaterial color="#F6EDE4" roughness={0.9} />
        </mesh>
      </group>
    </group>
  );
}

export default function InteractiveDog({ isCtaHovered = false }: InteractiveDogProps) {
  const [useGltfModel] = useState(true);

  return (
    <group>
      {useGltfModel ? (
        <DogModel isCtaHovered={isCtaHovered} />
      ) : (
        <ProceduralDog isCtaHovered={isCtaHovered} />
      )}

      <ContactShadows
        position={[0, -0.9, 0]}
        opacity={0.5}
        scale={6.0}
        blur={2.2}
        far={3.0}
        color="#2B221E"
      />
    </group>
  );
}

useGLTF.preload("/models/dog.glb");
