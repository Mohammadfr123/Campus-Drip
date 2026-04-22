import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, Text } from '@react-three/drei';
import * as THREE from 'three';

function RotatingLogo() {
  const mesh = useRef<THREE.Mesh>(null!);
  const texture = useLoader(THREE.TextureLoader, '/logo.png');
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.y = t * 0.5;
    mesh.current.position.y = Math.sin(t) * 0.2;
  });

  return (
    <Float speed={1.5} rotationIntensity={1.2} floatIntensity={1.5}>
      <mesh ref={mesh} position={[0, 0, 0]}>
        <planeGeometry args={[3, 3]} />
        <meshBasicMaterial map={texture} transparent side={THREE.DoubleSide} />
      </mesh>
    </Float>
  );
}

export default function ThreeDHeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      {/* Base Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
        style={{ backgroundImage: 'url("/street_bg.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-transparent"></div>
      </div>

      {/* 3D Scene Layer */}
      <div className="absolute inset-0 opacity-80">
        <Canvas shadows dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#FF7043" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#FF5722" />
          <RotatingLogo />
          <Environment preset="city" />
        </Canvas>
      </div>
    </div>
  );
}
