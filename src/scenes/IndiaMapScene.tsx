import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import indiaShapeData from '../assets/india-shapes-optimized.json';

const scaleSpan = 29.2233;
const centerLon = 82.7837;
const centerLat = 22.5856;

function projectCoord(lon: number, lat: number): [number, number, number] {
  const x = ((lon - centerLon) / scaleSpan) * 10;
  const y = ((lat - centerLat) / scaleSpan) * 10;
  return [x, y, 0.35];
}

const NETWORK_HUBS = [
  { name: 'Mumbai', lon: 72.8777, lat: 19.0760 },
  { name: 'Pune', lon: 73.8567, lat: 18.5204 },
  { name: 'Bengaluru', lon: 77.5946, lat: 12.9716 },
  { name: 'Hyderabad', lon: 78.4867, lat: 17.3850 },
  { name: 'Chennai', lon: 80.2707, lat: 13.0827 },
  { name: 'Delhi NCR', lon: 77.1025, lat: 28.7041 },
  { name: 'Kolkata', lon: 88.3639, lat: 22.5726 },
  { name: 'Ahmedabad', lon: 72.5714, lat: 23.0225 },
  { name: 'Jaipur', lon: 75.7873, lat: 26.9124 },
  { name: 'Chandigarh', lon: 76.7794, lat: 30.7333 },
  { name: 'Lucknow', lon: 80.9462, lat: 26.8467 },
  { name: 'Guwahati', lon: 91.7362, lat: 26.1445 },
  { name: 'Kochi', lon: 76.2673, lat: 9.9312 },
  { name: 'Bhubaneswar', lon: 85.8245, lat: 20.2961 },
  { name: 'Nagpur', lon: 79.0882, lat: 21.1458 },
  { name: 'Indore', lon: 75.8577, lat: 22.7196 },
];

function IndiaExtrusion() {
  const meshGroup = useRef<THREE.Group>(null);
  const pulseGroup = useRef<THREE.Group>(null);

  const extrudeGeometries = useMemo(() => {
    return (indiaShapeData as number[][][]).map((ringCoords) => {
      const shape = new THREE.Shape();
      if (ringCoords.length < 3) return null;

      shape.moveTo(ringCoords[0][0], ringCoords[0][1]);
      for (let i = 1; i < ringCoords.length; i++) {
        shape.lineTo(ringCoords[i][0], ringCoords[i][1]);
      }
      shape.closePath();

      return new THREE.ExtrudeGeometry(shape, {
        depth: 0.3,
        bevelEnabled: true,
        bevelSegments: 4,
        steps: 1,
        bevelSize: 0.04,
        bevelThickness: 0.05,
      });
    }).filter(Boolean) as THREE.ExtrudeGeometry[];
  }, []);

  const networkArcs = useMemo(() => {
    const arcs: THREE.Vector3[][] = [];
    const hubPairs = [
      [0, 5], [0, 2], [1, 3], [2, 4], [3, 6], [5, 11],
      [0, 7], [5, 8], [5, 9], [5, 10], [2, 12], [6, 13], [0, 14], [14, 15]
    ];

    hubPairs.forEach(([i, j]) => {
      const p1 = projectCoord(NETWORK_HUBS[i].lon, NETWORK_HUBS[i].lat);
      const p2 = projectCoord(NETWORK_HUBS[j].lon, NETWORK_HUBS[j].lat);

      const v1 = new THREE.Vector3(p1[0], p1[1], p1[2]);
      const v2 = new THREE.Vector3(p2[0], p2[1], p2[2]);
      const mid = new THREE.Vector3().addVectors(v1, v2).multiplyScalar(0.5);
      const dist = v1.distanceTo(v2);
      mid.z += dist * 0.35 + 0.3;

      const curve = new THREE.QuadraticBezierCurve3(v1, mid, v2);
      arcs.push(curve.getPoints(24));
    });
    return arcs;
  }, []);

  useFrame((state) => {
    if (meshGroup.current) {
      meshGroup.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
      meshGroup.current.rotation.x = -0.45 + Math.cos(state.clock.elapsedTime * 0.25) * 0.08 + (state.pointer.y * 0.15);
      meshGroup.current.rotation.z = (state.pointer.x * 0.15);
    }
    if (pulseGroup.current) {
      pulseGroup.current.children.forEach((child, i) => {
        const s = 1 + Math.sin(state.clock.elapsedTime * 3 + i) * 0.3;
        child.scale.set(s, s, s);
      });
    }
  });

  return (
    <group ref={meshGroup} position={[0, -0.2, 0]}>
      {/* Dark Graphite / Metallic India Topography */}
      {extrudeGeometries.map((geom, index) => (
        <group key={index}>
          <mesh geometry={geom} castShadow receiveShadow>
            <meshStandardMaterial
              color="#0f1f38"
              metalness={0.88}
              roughness={0.25}
              envMapIntensity={1.2}
            />
          </mesh>
          <lineSegments>
            <edgesGeometry args={[geom]} />
            <lineBasicMaterial color="#20B9FF" transparent opacity={0.35} />
          </lineSegments>
        </group>
      ))}

      {/* Network Connection Lines (Data Pathways) */}
      {networkArcs.map((pts, idx) => {
        const lineGeom = new THREE.BufferGeometry().setFromPoints(pts);
        return (
          <primitive key={idx} object={new THREE.Line(
            lineGeom,
            new THREE.LineBasicMaterial({
              color: idx % 2 === 0 ? 0x20b9ff : 0x087bff,
              transparent: true,
              opacity: 0.65,
              linewidth: 2,
            })
          )} />
        );
      })}

      {/* Illuminated Network Hub Nodes */}
      <group ref={pulseGroup}>
        {NETWORK_HUBS.map((hub, idx) => {
          const [x, y, z] = projectCoord(hub.lon, hub.lat);
          return (
            <group key={idx} position={[x, y, z]}>
              <mesh>
                <sphereGeometry args={[0.07, 16, 16]} />
                <meshStandardMaterial
                  color="#20B9FF"
                  emissive="#20B9FF"
                  emissiveIntensity={3.5}
                />
              </mesh>
              <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[0.09, 0.14, 24]} />
                <meshBasicMaterial color="#20B9FF" transparent opacity={0.6} side={THREE.DoubleSide} />
              </mesh>
            </group>
          );
        })}
      </group>

      {/* Base Grid Pedestal */}
      <gridHelper
        args={[14, 28, '#087bff', '#0c1a30']}
        position={[0, 0, -0.05]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

export function IndiaMapScene() {
  return (
    <div className="w-full h-full min-h-[460px] md:min-h-[640px] relative">
      <Canvas
        camera={{ position: [0, 0, 9.8], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 7, 7]} intensity={2.0} color="#F5F8FF" />
        <pointLight position={[-4, -5, 4]} intensity={3.5} color="#20B9FF" distance={15} />
        <pointLight position={[5, 2, 3]} intensity={2.0} color="#C8D5E8" distance={12} />

        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.3}>
          <IndiaExtrusion />
        </Float>
      </Canvas>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[480px] md:h-[480px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
    </div>
  );
}
