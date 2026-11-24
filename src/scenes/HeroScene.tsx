import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Realistic, recognizable modern IT Setup (Workstation, Curved Ultrawide Display, Glass Gaming/Workstation PC Tower & Peripheral Hardware)
function ITWorkstationSetup() {
  const groupRef = useRef<THREE.Group>(null);
  const fanRef1 = useRef<THREE.Mesh>(null);
  const fanRef2 = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Gentle floating and subtle parallax responsive to mouse
      groupRef.current.rotation.y = -0.35 + Math.sin(state.clock.elapsedTime * 0.4) * 0.08 + (state.pointer.x * 0.25);
      groupRef.current.rotation.x = 0.12 + Math.cos(state.clock.elapsedTime * 0.3) * 0.04 - (state.pointer.y * 0.15);
    }
    // Rotate internal PC cooling fans
    if (fanRef1.current) fanRef1.current.rotation.z += delta * 6;
    if (fanRef2.current) fanRef2.current.rotation.z += delta * 6;
  });

  return (
    <group ref={groupRef} position={[0, -0.4, 0]} scale={1.25}>
      
      {/* 1. Sleek Aluminum Tech Desk Pedestal */}
      <mesh position={[0, -1.2, 0]} receiveShadow>
        <boxGeometry args={[4.2, 0.08, 2.2]} />
        <meshStandardMaterial color="#0b1322" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Subtle desk edge light strip */}
      <mesh position={[0, -1.17, 1.1]}>
        <boxGeometry args={[4.2, 0.02, 0.02]} />
        <meshStandardMaterial color="#20B9FF" emissive="#20B9FF" emissiveIntensity={2.5} />
      </mesh>

      {/* 2. Modern IT Curved Ultrawide Display Monitor */}
      <group position={[-0.4, -0.2, 0]}>
        {/* Monitor Stand Base & Pole */}
        <mesh position={[0, -0.95, -0.2]}>
          <cylinderGeometry args={[0.35, 0.4, 0.04, 32]} />
          <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.15} />
        </mesh>
        <mesh position={[0, -0.5, -0.2]}>
          <cylinderGeometry args={[0.04, 0.04, 0.9, 16]} />
          <meshStandardMaterial color="#334155" metalness={0.95} roughness={0.1} />
        </mesh>

        {/* Monitor Screen Frame */}
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[2.5, 1.4, 0.08]} />
          <meshStandardMaterial color="#0f172a" metalness={0.85} roughness={0.25} />
        </mesh>
        {/* Active Screen Display (Liquid Glass Cyber Interface) */}
        <mesh position={[0, 0, 0.045]}>
          <planeGeometry args={[2.42, 1.32]} />
          <meshStandardMaterial
            color="#087BFF"
            emissive="#087BFF"
            emissiveIntensity={0.65}
            roughness={0.1}
          />
        </mesh>
        {/* Terminal / Code / System Health UI Graphic Overlay on screen */}
        <mesh position={[-0.5, 0.2, 0.05]}>
          <planeGeometry args={[1.1, 0.6]} />
          <meshStandardMaterial color="#0C1424" emissive="#02142e" emissiveIntensity={0.8} />
        </mesh>
        {/* Code Lines on Screen */}
        {[-0.05, 0.1, 0.25, 0.4].map((y, idx) => (
          <mesh key={idx} position={[-0.5, y - 0.05, 0.055]}>
            <planeGeometry args={[0.85 - idx * 0.12, 0.03]} />
            <meshBasicMaterial color={idx === 0 ? "#20B9FF" : "#38bdf8"} />
          </mesh>
        ))}
        {/* Network & CPU telemetry chart on right side of monitor */}
        <mesh position={[0.55, 0.1, 0.05]}>
          <planeGeometry args={[0.85, 0.75]} />
          <meshStandardMaterial color="#070B14" emissive="#051226" emissiveIntensity={0.7} />
        </mesh>
        <mesh position={[0.55, 0.1, 0.055]}>
          <ringGeometry args={[0.2, 0.26, 32]} />
          <meshBasicMaterial color="#20B9FF" />
        </mesh>
        <mesh position={[0.55, 0.1, 0.055]}>
          <circleGeometry args={[0.14, 32]} />
          <meshBasicMaterial color="#087BFF" />
        </mesh>
      </group>

      {/* 3. High-Performance Enterprise Tower (Tempered Glass & RGB IT Server Rig) */}
      <group position={[1.4, -0.2, 0.2]}>
        {/* Main Chassis Frame (Dark Graphite) */}
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[0.7, 1.8, 1.4]} />
          <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.2} />
        </mesh>
        
        {/* Transparent Tempered Glass Side Panel */}
        <mesh position={[-0.355, 0, 0]}>
          <boxGeometry args={[0.02, 1.7, 1.3]} />
          <meshPhysicalMaterial
            color="#20B9FF"
            transparent
            opacity={0.4}
            transmission={0.85}
            roughness={0.08}
            metalness={0.1}
          />
        </mesh>

        {/* Interior GPU / Graphic Card (Silver & Illuminated) */}
        <mesh position={[0, -0.2, 0]}>
          <boxGeometry args={[0.5, 0.18, 0.9]} />
          <meshStandardMaterial color="#C8D5E8" metalness={0.9} roughness={0.15} />
        </mesh>
        {/* GPU Light Accent Bar */}
        <mesh position={[-0.26, -0.2, 0]}>
          <boxGeometry args={[0.02, 0.04, 0.85]} />
          <meshStandardMaterial color="#20B9FF" emissive="#20B9FF" emissiveIntensity={3.5} />
        </mesh>

        {/* Dual Liquid CPU Cooling Fans */}
        <mesh ref={fanRef1} position={[-0.2, 0.35, 0.2]}>
          <cylinderGeometry args={[0.22, 0.22, 0.04, 24]} />
          <meshStandardMaterial color="#1e293b" emissive="#20B9FF" emissiveIntensity={1.8} />
        </mesh>
        <mesh ref={fanRef2} position={[-0.2, 0.35, -0.3]}>
          <cylinderGeometry args={[0.22, 0.22, 0.04, 24]} />
          <meshStandardMaterial color="#1e293b" emissive="#087BFF" emissiveIntensity={1.8} />
        </mesh>

        {/* Front Panel Mesh & Power LED */}
        <mesh position={[0, 0, 0.705]}>
          <planeGeometry args={[0.62, 1.7]} />
          <meshStandardMaterial color="#090d16" metalness={0.8} roughness={0.4} />
        </mesh>
        <mesh position={[0, 0.75, 0.71]}>
          <circleGeometry args={[0.03, 16]} />
          <meshBasicMaterial color="#20B9FF" />
        </mesh>
      </group>

      {/* 4. Mechanical Keyboard with Backlight */}
      <group position={[-0.4, -1.13, 0.55]}>
        <mesh receiveShadow castShadow>
          <boxGeometry args={[1.3, 0.04, 0.45]} />
          <meshStandardMaterial color="#0f172a" metalness={0.85} roughness={0.3} />
        </mesh>
        {/* Keycap cluster */}
        <mesh position={[0, 0.03, 0]}>
          <boxGeometry args={[1.22, 0.02, 0.38]} />
          <meshStandardMaterial color="#1e293b" emissive="#20B9FF" emissiveIntensity={0.6} />
        </mesh>
      </group>

      {/* 5. Precision Wireless Mouse */}
      <group position={[0.55, -1.13, 0.55]}>
        <mesh castShadow>
          <capsuleGeometry args={[0.07, 0.15, 8, 16]} />
          <meshStandardMaterial color="#0f172a" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.07, 0.02]}>
          <boxGeometry args={[0.015, 0.02, 0.04]} />
          <meshBasicMaterial color="#20B9FF" />
        </mesh>
      </group>

      {/* 6. Precision Wi-Fi 6 / Network Router Node */}
      <group position={[-1.7, -1.1, -0.4]}>
        <mesh castShadow>
          <boxGeometry args={[0.65, 0.08, 0.5]} />
          <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Antennas */}
        {[-0.25, -0.08, 0.08, 0.25].map((x, i) => (
          <mesh key={i} position={[x, 0.22, -0.2]} rotation={[-0.15, 0, (i - 1.5) * 0.1]}>
            <cylinderGeometry args={[0.015, 0.015, 0.42, 12]} />
            <meshStandardMaterial color="#334155" metalness={0.9} />
          </mesh>
        ))}
        {/* Network Connectivity Status LEDs */}
        {[-0.18, -0.06, 0.06, 0.18].map((x, i) => (
          <mesh key={i} position={[x, 0.045, 0.22]}>
            <circleGeometry args={[0.015, 12]} />
            <meshBasicMaterial color="#20B9FF" />
          </mesh>
        ))}
      </group>

    </group>
  );
}

export function HeroScene() {
  return (
    <div className="w-full h-full min-h-[420px] md:min-h-[560px] relative">
      <Canvas
        camera={{ position: [0, 0.6, 5.2], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.8} />
        {/* Studio Overhead Key Light */}
        <directionalLight position={[4, 6, 5]} intensity={2.4} color="#F5F8FF" castShadow />
        {/* Cyber Cyan Accent Light */}
        <pointLight position={[-3, 1, 3]} intensity={3.0} color="#20B9FF" distance={10} />
        {/* Deep Royal Blue Back Light */}
        <pointLight position={[3, 2, -2]} intensity={2.8} color="#087BFF" distance={8} />

        <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.2}>
          <ITWorkstationSetup />
        </Float>
      </Canvas>
      {/* Ambient background glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[450px] md:h-[450px] bg-blue-600/15 rounded-full blur-[100px] pointer-events-none -z-10" />
    </div>
  );
}
