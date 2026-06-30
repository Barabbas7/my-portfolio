"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function generatePositions(count: number) {
  const positions = new Float32Array(count * 3);
  const isCross = new Float32Array(count);
  const depth = new Float32Array(count);

  const crossCount = Math.floor(count * 0.12);

  // Cross particles — kept subtle, off-center so they don't fight the text
  for (let i = 0; i < crossCount; i++) {
    let x, y;
    if (i < crossCount * 0.6) {
      x = -2.4 + (Math.random() - 0.5) * 0.12;
      y = (Math.random() - 0.5) * 1.3;
    } else {
      x = -2.4 + (Math.random() - 0.5) * 0.7;
      y = 0.25 + (Math.random() - 0.5) * 0.12;
    }
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 1.0;
    isCross[i] = 1;
    depth[i] = (positions[i * 3 + 2] + 0.5) / 1.0;
  }

  // Scattered field — sparse center, denser edges
  for (let i = crossCount; i < count; i++) {
    let x, y;
    // Reject-sample to keep the center clear for text
    do {
      x = (Math.random() - 0.5) * 7;
      y = (Math.random() - 0.5) * 4;
    } while (Math.abs(x) < 1.6 && Math.abs(y) < 1.0 && Math.random() > 0.15);

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 3;
    isCross[i] = 0;
    depth[i] = (positions[i * 3 + 2] + 1.5) / 3;
  }

  return { positions, isCross, depth };
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const smoothMouse = useRef({ x: 0, y: 0 });

  const count = 220;
  const { positions, isCross, depth } = useMemo(
    () => generatePositions(count),
    [],
  );

  const colors = useMemo(() => {
    const c = new Float32Array(count * 3);
    const cyan = new THREE.Color("#4db3ff");
    const ice = new THREE.Color("#8ed4ff");
    const amber = new THREE.Color("#f0921e");
    for (let i = 0; i < count; i++) {
      const color = isCross[i] === 1 ? amber : i % 3 === 0 ? ice : cyan;
      c[i * 3] = color.r;
      c[i * 3 + 1] = color.g;
      c[i * 3 + 2] = color.b;
    }
    return c;
  }, [isCross]);

  const sizes = useMemo(() => {
    const s = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      s[i] = isCross[i] === 1 ? 0.05 : 0.025 + depth[i] * 0.035;
    }
    return s;
  }, [isCross, depth]);

  const linePositions = useMemo(() => {
    const lines: number[] = [];
    const maxDist = 0.85;
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < maxDist) {
          lines.push(
            positions[i * 3],
            positions[i * 3 + 1],
            positions[i * 3 + 2],
            positions[j * 3],
            positions[j * 3 + 1],
            positions[j * 3 + 2],
          );
        }
      }
    }
    return new Float32Array(lines);
  }, [positions]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    smoothMouse.current.x += (mouse.current.x - smoothMouse.current.x) * 0.03;
    smoothMouse.current.y += (mouse.current.y - smoothMouse.current.y) * 0.03;

    if (pointsRef.current) {
      pointsRef.current.rotation.y = smoothMouse.current.x * 0.12;
      pointsRef.current.rotation.x = smoothMouse.current.y * 0.08;
      pointsRef.current.position.x = smoothMouse.current.x * 0.15;
      pointsRef.current.position.y = smoothMouse.current.y * 0.1;

      // Gentle ambient drift on top of cursor parallax
      pointsRef.current.rotation.z =
        Math.sin(state.clock.elapsedTime * 0.05) * 0.02;
    }
    if (linesRef.current && pointsRef.current) {
      linesRef.current.rotation.copy(pointsRef.current.rotation);
      linesRef.current.position.copy(pointsRef.current.position);
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
          <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
        </bufferGeometry>
        <pointsMaterial
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          size={0.04}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#4db3ff" transparent opacity={0.08} />
      </lineSegments>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 60 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <ParticleField />
      </Canvas>
    </div>
  );
}
