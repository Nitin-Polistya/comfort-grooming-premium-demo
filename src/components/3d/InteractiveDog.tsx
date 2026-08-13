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

    targetRotation.current.y = THREE.MathUtils.lerp(targetRotation.current.y, px * 0.45, delta * 4);
    targetRotation.current.x = THREE.MathUtils.lerp(targetRotation.current.x, -py * 0.35, delta * 4);

    if (headRef.current) {
      headRef.current.rotation.y = targetRotation.current.y;
      headRef.current.rotation.x = targetRotation.current.x;

      if (earLeftRef.current && earRightRef.current) {
        const earTilt = isCtaHovered ? -0.15 : Math.sin(state.clock.getElapsedTime() * 3) * 0.05;
        earLeftRef.current.rotation.z = THREE.MathUtils.lerp(earLeftRef.current.rotation.z, -0.2 + earTilt + px * 0.1, delta * 5);
        earRightRef.current.rotation.z = THREE.MathUtils.lerp(earRightRef.current.rotation.z, 0.2 - earTilt + px * 0.1, delta * 5);
      }
    }

    if (dogGroupRef.current) {
      const breath = Math.sin(state.clock.getElapsedTime() * 2.2) * 0.04;
      const hoverBoost = isCtaHovered ? 0.15 : 0;
      dogGroupRef.current.position.y = THREE.MathUtils.lerp(
        dogGroupRef.current.position.y,
        -0.4 + breath + hoverBoost,
        delta * 4
      );
    }

    if (tailRef.current) {
      const targetSpeed = isCtaHovered ? 14 : 5;
      tailWagSpeed.current = THREE.MathUtils.lerp(tailWagSpeed.current, targetSpeed, delta * 3);
      const wag = Math.sin(state.clock.getElapsedTime() * tailWagSpeed.current) * (isCtaHovered ? 0.45 : 0.22);
      tailRef.current.rotation.y = wag;
      tailRef.current.rotation.z = Math.abs(wag) * 0.15;
    }
  });

  const furColor = new THREE.Color("#E8CDB5");
  const furFluffColor = new THREE.Color("#F4E8DB");
  const noseColor = new THREE.Color("#1F1A17");
  const collarColor = new THREE.Color("#C8654B");
  const brassColor = new THREE.Color("#D99B26");

  return (
    <group ref={dogGroupRef} position={[0, -0.4, 0]} scale={1.1}>
      {/* BODY / CHEST */}
      <mesh position={[0, 0.2, 0]} castShadow receiveShadow>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshStandardMaterial
          color={furColor}
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      {/* FLUFFY CHEST TUFT */}
      <mesh position={[0, 0.35, 0.4]} scale={[0.7, 0.7, 0.5]} castShadow>
        <sphereGeometry args={[0.7, 24, 24]} />
        <meshStandardMaterial color={furFluffColor} roughness={0.9} />
      </mesh>

      {/* HEAD GROUP */}
      <group ref={headRef} position={[0, 1.25, 0.15]}>
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[0.72, 32, 32]} />
          <meshStandardMaterial color={furColor} roughness={0.85} />
        </mesh>

        <mesh position={[0, 0.65, -0.05]} scale={[0.55, 0.45, 0.5]} castShadow>
          <sphereGeometry args={[0.6, 24, 24]} />
          <meshStandardMaterial color={furFluffColor} roughness={0.95} />
        </mesh>

        <mesh position={[0, -0.1, 0.5]} scale={[0.42, 0.36, 0.45]} castShadow>
          <sphereGeometry args={[0.7, 24, 24]} />
          <meshStandardMaterial color={furFluffColor} roughness={0.8} />
        </mesh>

        <mesh position={[0, 0.05, 0.78]} scale={[0.16, 0.12, 0.14]} castShadow>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshStandardMaterial color={noseColor} roughness={0.2} metalness={0.2} />
        </mesh>

        {/* Left Eye */}
        <group position={[-0.26, 0.18, 0.55]}>
          <mesh>
            <sphereGeometry args={[0.11, 16, 16]} />
            <meshStandardMaterial color="#1A1615" roughness={0.1} />
          </mesh>
          <mesh position={[-0.03, 0.03, 0.09]}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshBasicMaterial color="#FFFFFF" />
          </mesh>
        </group>

        {/* Right Eye */}
        <group position={[0.26, 0.18, 0.55]}>
          <mesh>
            <sphereGeometry args={[0.11, 16, 16]} />
            <meshStandardMaterial color="#1A1615" roughness={0.1} />
          </mesh>
          <mesh position={[-0.03, 0.03, 0.09]}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshBasicMaterial color="#FFFFFF" />
          </mesh>
        </group>

        {/* Left Ear */}
        <group ref={earLeftRef} position={[-0.65, 0.25, 0]} rotation={[0, 0, -0.2]}>
          <mesh position={[0, -0.4, 0]} scale={[0.28, 0.6, 0.28]} castShadow>
            <sphereGeometry args={[0.8, 24, 24]} />
            <meshStandardMaterial color={furColor} roughness={0.9} />
          </mesh>
        </group>

        {/* Right Ear */}
        <group ref={earRightRef} position={[0.65, 0.25, 0]} rotation={[0, 0, 0.2]}>
          <mesh position={[0, -0.4, 0]} scale={[0.28, 0.6, 0.28]} castShadow>
            <sphereGeometry args={[0.8, 24, 24]} />
            <meshStandardMaterial color={furColor} roughness={0.9} />
          </mesh>
        </group>
      </group>

      {/* COLLAR */}
      <group position={[0, 0.65, 0.1]} rotation={[0.1, 0, 0]}>
        <mesh castShadow>
          <torusGeometry args={[0.68, 0.05, 16, 32]} />
          <meshStandardMaterial color={collarColor} roughness={0.4} />
        </mesh>
        <mesh position={[0, -0.15, 0.68]} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 0.02, 16]} />
          <meshStandardMaterial color={brassColor} metalness={0.8} roughness={0.2} />
        </mesh>
      </group>

      {/* TAIL */}
      <group ref={tailRef} position={[0, 0.2, -0.8]} rotation={[-0.4, 0, 0]}>
        <mesh position={[0, 0.4, -0.2]} scale={[0.22, 0.5, 0.22]} castShadow>
          <sphereGeometry args={[0.8, 24, 24]} />
          <meshStandardMaterial color={furFluffColor} roughness={0.9} />
        </mesh>
      </group>

      {/* SHADOW */}
      <ContactShadows
        position={[0, -0.9, 0]}
        opacity={0.45}
        scale={6}
        blur={2}
        far={3}
        color="#2B221E"
      />

      {/* BUBBLES */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.2}>
        <mesh position={[-1.4, 1.2, 0.6]}>
          <sphereGeometry args={[0.16, 24, 24]} />
          <meshPhysicalMaterial
            roughness={0.05}
            transmission={0.9}
            thickness={0.4}
            ior={1.2}
            color="#E0F2FE"
            transparent
            opacity={0.85}
          />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.5}>
        <mesh position={[1.5, 0.8, -0.4]}>
          <sphereGeometry args={[0.22, 24, 24]} />
          <meshPhysicalMaterial
            roughness={0.05}
            transmission={0.92}
            thickness={0.4}
            ior={1.2}
            color="#FCE7F3"
            transparent
            opacity={0.8}
          />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.9}>
        <mesh position={[-1.1, -0.2, 1.1]}>
          <sphereGeometry args={[0.12, 20, 20]} />
          <meshPhysicalMaterial
            roughness={0.05}
            transmission={0.88}
            thickness={0.3}
            ior={1.2}
            color="#FEF3C7"
            transparent
            opacity={0.8}
          />
        </mesh>
      </Float>
    </group>
  );
}
