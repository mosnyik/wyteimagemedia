"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import type * as THREE from "three";

function FloatingShape({
  position,
  color,
  scale = 1,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={color} transparent opacity={0.3} />
      </mesh>
    </Float>
  );
}

export function Background3D() {
  return (
    <Canvas className="absolute inset-0 z-10">
      <Environment preset="city" />
      <ambientLight intensity={0.7} />
      <pointLight position={[10, 10, 10]} />

      <FloatingShape position={[-4, 2, -5]} color="#16a34a" scale={0.8} />
      <FloatingShape position={[4, -2, -8]} color="#ea580c" scale={1.2} />
      <FloatingShape position={[2, 4, -6]} color="#15803d" scale={0.6} />
      <FloatingShape position={[-3, -3, -7]} color="#c2410c" scale={0.9} />
      <FloatingShape position={[6, 1, -9]} color="#166534" scale={0.7} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
      />
    </Canvas>
  );
}
