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
        -0.55 + breath + hoverLift,
        delta * 4
      );
    }
  });

  return (
    <group ref={dogRef} position={[0, -0.65, 0]} scale={2.1}>
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
  const [useGltfModel, setUseGltfModel] = useState(true);

  return (
    <group>
      {useGltfModel ? (
        <DogModel isCtaHovered={isCtaHovered} />
      ) : (
        <ProceduralDog isCtaHovered={isCtaHovered} />
      )}

      <ContactShadows
        position={[0, -0.9, 0]}
        opacity={0.45}
        scale={6.5}
        blur={2}
        far={3.2}
        color="#2B221E"
      />

      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.2}>
        <mesh position={[-1.45, 1.25, 0.65]}>
          <sphereGeometry args={[0.17, 24, 24]} />
          <meshPhysicalMaterial
            roughness={0.04}
            transmission={0.95}
            thickness={0.45}
            ior={1.3}
            color="#E0F2FE"
            transparent
            opacity={0.85}
          />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.5}>
        <mesh position={[1.55, 0.85, -0.45]}>
          <sphereGeometry args={[0.23, 24, 24]} />
          <meshPhysicalMaterial
            roughness={0.04}
            transmission={0.95}
            thickness={0.45}
            ior={1.3}
            color="#FCE7F3"
            transparent
            opacity={0.82}
          />
        </mesh>
      </Float>
    </group>
  );
}

useGLTF.preload("/models/dog.glb");
