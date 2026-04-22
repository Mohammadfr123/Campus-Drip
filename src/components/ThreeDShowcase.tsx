import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

interface ModelProps {
  color: string;
}

function Scene({ color }: ModelProps) {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = Math.cos(t / 4) / 4;
    mesh.current.rotation.y = Math.sin(t / 4) / 4;
    mesh.current.rotation.z = Math.sin(t / 4) / 4;
    mesh.current.position.y = Math.sin(t / 1.5) / 10;
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh ref={mesh}>
          {/* Using a rounded box-like shape to represent a generic clothing item/vibe */}
          <boxGeometry args={[1.5, 2, 0.4]} />
          <MeshDistortMaterial
            color={color}
            speed={2}
            distort={0.2}
            radius={1}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>
      
      {/* Decorative floating points/grid for urban vibe */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={100}
            array={new Float32Array(300).map(() => (Math.random() - 0.5) * 10)}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.02} color="#ffffff" opacity={0.3} transparent />
      </points>
    </group>
  );
}

export default function ThreeDShowcase({ color }: { color: string }) {
  return (
    <div className="w-full h-full min-h-[300px] cursor-grab active:cursor-grabbing">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Scene color={color} />
        
        <OrbitControls 
          enableZoom={true} 
          enablePan={true}
          maxPolarAngle={Math.PI / 1.1}
          minPolarAngle={Math.PI / 8}
          minDistance={3}
          maxDistance={8}
        />
      </Canvas>
    </div>
  );
}
