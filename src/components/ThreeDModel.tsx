
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, PresentationControls } from '@react-three/drei';
import { motion } from 'framer-motion';

function MedicalModel() {
  const group = useRef<any>();
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });
  
  // Since we don't have a real GLTF model, we'll create a 3D shape
  return (
    <group ref={group}>
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#0088CC" metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh position={[1.5, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#00B4D8" metalness={0.3} roughness={0.4} />
      </mesh>
      <mesh position={[-1.5, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.5, 0.5, 1.5, 32]} />
        <meshStandardMaterial color="#48CAE4" metalness={0.4} roughness={0.3} />
      </mesh>
      <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
        <torusGeometry args={[0.5, 0.2, 16, 100]} />
        <meshStandardMaterial color="#ADE8F4" metalness={0.2} roughness={0.5} />
      </mesh>
    </group>
  );
}

export default function ThreeDModel() {
  return (
    <motion.div 
      className="h-[400px] w-full md:h-[500px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
        <Suspense fallback={null}>
          <PresentationControls
            global
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 300 }}
          >
            <MedicalModel />
          </PresentationControls>
          <Environment preset="city" />
        </Suspense>
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 10]} 
          intensity={1} 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024} 
        />
      </Canvas>
    </motion.div>
  );
}
