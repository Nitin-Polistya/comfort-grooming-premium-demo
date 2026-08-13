"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

interface InteractiveDogProps {
  isCtaHovered?: boolean;
}

export default function InteractiveDog({ isCtaHovered = false }: InteractiveDogProps) {
  const dogGroupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const earLeftRef = useRef<THREE.Group>(null);
  const earRightRef = useRef<THREE.Group>(null);
  const tailRef = useRef<THREE.Group>(null);

  const targetRotation = useRef({ x: 0, y: 0 });
  const tailWagSpeed = useRef(4);

  useFrame((state, delta) => {
    const px = state.pointer.x;
    const py = state.pointer.y;

    targetRotation.current.y = THREE.MathUtils.lerp(targetRotation.current.y, px * 0.5, delta * 4);
    targetRotation.current.x = THREE.MathUtils.lerp(targetRotation.current.x, -py * 0.3, delta * 4);

    if (headRef.current) {
      headRef.current.rotation.y = targetRotation.current.y;
      headRef.current.rotation.x = targetRotation.current.x;

      if (earLeftRef.current && earRightRef.current) {
        const earTilt = isCtaHovered ? -0.2 : Math.sin(state.clock.getElapsedTime() * 3.5) * 0.06;
        earLeftRef.current.rotation.z = THREE.MathUtils.lerp(earLeftRef.current.rotation.z, -0.25 + earTilt + px * 0.1, delta * 5);
        earRightRef.current.rotation.z = THREE.MathUtils.lerp(earRightRef.current.rotation.z, 0.25 - earTilt + px * 0.1, delta * 5);
      }
    }

    if (dogGroupRef.current) {
      const breath = Math.sin(state.clock.getElapsedTime() * 2.4) * 0.05;
      const hoverLift = isCtaHovered ? 0.18 : 0;
      dogGroupRef.current.position.y = THREE.MathUtils.lerp(
        dogGroupRef.current.position.y,
        -0.45 + breath + hoverLift,
        delta * 4
      );
    }

    if (tailRef.current) {
      const targetSpeed = isCtaHovered ? 16 : 5;
      tailWagSpeed.current = THREE.MathUtils.lerp(tailWagSpeed.current, targetSpeed, delta * 3);
      const wag = Math.sin(state.clock.getElapsedTime() * tailWagSpeed.current) * (isCtaHovered ? 0.5 : 0.25);
      tailRef.current.rotation.y = wag;
      tailRef.current.rotation.z = Math.abs(wag) * 0.18;
    }
  });

  // Refined Boutique Fur Colors
  const furBaseColor = new THREE.Color("#E5CBB4");
  const furFluffColor = new THREE.Color("#F6EDE4");
  const noseColor = new THREE.Color("#1C1715");
  const collarColor = new THREE.Color("#C8654B");
  const brassColor = new THREE.Color("#D99B26");

  return (
    <group ref={dogGroupRef} position={[0, -0.45, 0]} scale={1.15}>
      
      {/* MAIN BODY SCULPTURE */}
      <mesh position={[0, 0.25, 0]} castShadow receiveShadow>
        <sphereGeometry args={[0.92, 32, 32]} />
        <meshStandardMaterial color={furBaseColor} roughness={0.82} metalness={0.05} />
      </mesh>

      {/* CHEST FUR FLUFF */}
      <mesh position={[0, 0.4, 0.42]} scale={[0.75, 0.72, 0.52]} castShadow>
        <sphereGeometry args={[0.72, 24, 24]} />
        <meshStandardMaterial color={furFluffColor} roughness={0.92} />
      </mesh>

      {/* HEAD ASSEMBLY */}
      <group ref={headRef} position={[0, 1.3, 0.16]}>
        {/* HEAD BASE */}
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[0.74, 32, 32]} />
          <meshStandardMaterial color={furBaseColor} roughness={0.82} />
        </mesh>

        {/* POODLE/DOODLE TOPKNOT CROWN */}
        <mesh position={[0, 0.68, -0.04]} scale={[0.58, 0.48, 0.52]} castShadow>
          <sphereGeometry args={[0.62, 24, 24]} />
          <meshStandardMaterial color={furFluffColor} roughness={0.95} />
        </mesh>

        {/* MUZZLE & SNOUT */}
        <mesh position={[0, -0.1, 0.52]} scale={[0.44, 0.38, 0.48]} castShadow>
          <sphereGeometry args={[0.72, 24, 24]} />
          <meshStandardMaterial color={furFluffColor} roughness={0.82} />
        </mesh>

        {/* WET GLOSSY NOSE */}
        <mesh position={[0, 0.06, 0.81]} scale={[0.17, 0.13, 0.15]} castShadow>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshStandardMaterial color={noseColor} roughness={0.15} metalness={0.3} />
        </mesh>

        {/* LEFT EYE */}
        <group position={[-0.27, 0.19, 0.57]}>
          <mesh>
            <sphereGeometry args={[0.115, 16, 16]} />
            <meshStandardMaterial color="#120E0D" roughness={0.08} />
          </mesh>
          <mesh position={[-0.035, 0.035, 0.095]}>
            <sphereGeometry args={[0.032, 8, 8]} />
            <meshBasicMaterial color="#FFFFFF" />
          </mesh>
          <mesh position={[0.02, -0.02, 0.09]}>
            <sphereGeometry args={[0.015, 8, 8]} />
            <meshBasicMaterial color="#FFFFFF" />
          </mesh>
        </group>

        {/* RIGHT EYE */}
        <group position={[0.27, 0.19, 0.57]}>
          <mesh>
            <sphereGeometry args={[0.115, 16, 16]} />
            <meshStandardMaterial color="#120E0D" roughness={0.08} />
          </mesh>
          <mesh position={[-0.035, 0.035, 0.095]}>
            <sphereGeometry args={[0.032, 8, 8]} />
            <meshBasicMaterial color="#FFFFFF" />
          </mesh>
          <mesh position={[0.02, -0.02, 0.09]}>
            <sphereGeometry args={[0.015, 8, 8]} />
            <meshBasicMaterial color="#FFFFFF" />
          </mesh>
        </group>

        {/* FLOPPY EARS */}
        <group ref={earLeftRef} position={[-0.68, 0.28, 0]} rotation={[0, 0, -0.22]}>
          <mesh position={[0, -0.42, 0]} scale={[0.3, 0.65, 0.3]} castShadow>
            <sphereGeometry args={[0.8, 24, 24]} />
            <meshStandardMaterial color={furBaseColor} roughness={0.9} />
          </mesh>
        </group>

        <group ref={earRightRef} position={[0.68, 0.28, 0]} rotation={[0, 0, 0.22]}>
          <mesh position={[0, -0.42, 0]} scale={[0.3, 0.65, 0.3]} castShadow>
            <sphereGeometry args={[0.8, 24, 24]} />
            <meshStandardMaterial color={furBaseColor} roughness={0.9} />
          </mesh>
        </group>
      </group>

      {/* LEATHER COLLAR & BRASS TAG */}
      <group position={[0, 0.68, 0.1]} rotation={[0.1, 0, 0]}>
        <mesh castShadow>
          <torusGeometry args={[0.7, 0.052, 16, 32]} />
          <meshStandardMaterial color={collarColor} roughness={0.35} />
        </mesh>
        <mesh position={[0, -0.16, 0.7]} castShadow>
          <cylinderGeometry args={[0.085, 0.085, 0.022, 16]} />
          <meshStandardMaterial color={brassColor} metalness={0.85} roughness={0.15} />
        </mesh>
      </group>

      {/* TAIL */}
      <group ref={tailRef} position={[0, 0.22, -0.82]} rotation={[-0.42, 0, 0]}>
        <mesh position={[0, 0.42, -0.2]} scale={[0.24, 0.52, 0.24]} castShadow>
          <sphereGeometry args={[0.8, 24, 24]} />
          <meshStandardMaterial color={furFluffColor} roughness={0.9} />
        </mesh>
      </group>

      {/* FLOOR SHADOW */}
      <ContactShadows
        position={[0, -0.92, 0]}
        opacity={0.45}
        scale={6.5}
        blur={2}
        far={3.2}
        color="#2B221E"
      />

      {/* REFRACTIVE FLOATING BUBBLES */}
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

      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.9}>
        <mesh position={[-1.15, -0.15, 1.15]}>
          <sphereGeometry args={[0.13, 20, 20]} />
          <meshPhysicalMaterial
            roughness={0.04}
            transmission={0.92}
            thickness={0.35}
            ior={1.3}
            color="#FEF3C7"
            transparent
            opacity={0.82}
          />
        </mesh>
      </Float>
    </group>
  );
}
