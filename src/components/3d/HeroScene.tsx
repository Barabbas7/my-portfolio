"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { IcosahedronGeometry } from "three";
import * as THREE from "three";

function Icosahedron() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Smooth lerp toward mouse
    target.current.x += (mouse.current.x - target.current.x) * 0.05;
    target.current.y += (mouse.current.y - target.current.y) * 0.05;

    // Slow auto rotation
    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.2;

    // Subtle cursor tilt
    meshRef.current.rotation.x += target.current.y * 0.02;
    meshRef.current.rotation.y += target.current.x * 0.02;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.4, 1]} />
      <meshStandardMaterial
        color="#4db3ff"
        wireframe
        transparent
        opacity={0.35}
      />
    </mesh>
  );
}

function Ring() {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.x += delta * 0.08;
    ringRef.current.rotation.z += delta * 0.05;
  });

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 4, 0, 0]}>
      <torusGeometry args={[1.9, 0.008, 8, 80]} />
      <meshStandardMaterial color="#f0921e" transparent opacity={0.4} />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <div
      className="absolute right-0 top-0 h-full w-1/2 pointer-events-none hidden md:block"
      style={{ zIndex: 1 }}
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#4db3ff" />
        <pointLight position={[-5, -5, -5]} intensity={0.3} color="#f0921e" />
        <Icosahedron />
        <Ring />
      </Canvas>
    </div>
  );
}
