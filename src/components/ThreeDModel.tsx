
import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  OrbitControls, 
  useGLTF, 
  Environment, 
  PresentationControls,
  Float,
  Text,
  Center
} from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';
import gsap from 'gsap';

// Moving shapes component with advanced animations
function MedicalModel() {
  const group = useRef<THREE.Group>(null);
  const sphere = useRef<THREE.Mesh>(null);
  const box = useRef<THREE.Mesh>(null);
  const cylinder = useRef<THREE.Mesh>(null);
  const torus = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  
  // Effect for hover animations
  useEffect(() => {
    if (!group.current) return;
    
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
    
    // Animate the hovered object
    if (hovered === 'sphere' && sphere.current) {
      gsap.to(sphere.current.scale, { x: 1.2, y: 1.2, z: 1.2, duration: 0.3 });
      gsap.to(sphere.current.material, { emissiveIntensity: 0.6, duration: 0.3 });
    } else if (sphere.current) {
      gsap.to(sphere.current.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
      gsap.to(sphere.current.material, { emissiveIntensity: 0.2, duration: 0.3 });
    }
    
    if (hovered === 'box' && box.current) {
      gsap.to(box.current.scale, { x: 1.2, y: 1.2, z: 1.2, duration: 0.3 });
      gsap.to(box.current.material, { emissiveIntensity: 0.6, duration: 0.3 });
    } else if (box.current) {
      gsap.to(box.current.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
      gsap.to(box.current.material, { emissiveIntensity: 0.2, duration: 0.3 });
    }
    
    if (hovered === 'cylinder' && cylinder.current) {
      gsap.to(cylinder.current.scale, { x: 1.2, y: 1.2, z: 1.2, duration: 0.3 });
      gsap.to(cylinder.current.material, { emissiveIntensity: 0.6, duration: 0.3 });
    } else if (cylinder.current) {
      gsap.to(cylinder.current.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
      gsap.to(cylinder.current.material, { emissiveIntensity: 0.2, duration: 0.3 });
    }
    
    if (hovered === 'torus' && torus.current) {
      gsap.to(torus.current.scale, { x: 1.2, y: 1.2, z: 1.2, duration: 0.3 });
      gsap.to(torus.current.material, { emissiveIntensity: 0.6, duration: 0.3 });
    } else if (torus.current) {
      gsap.to(torus.current.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
      gsap.to(torus.current.material, { emissiveIntensity: 0.2, duration: 0.3 });
    }
    
  }, [hovered]);
  
  useFrame((state) => {
    if (!group.current) return;
    
    // Main group rotation based on scroll and time
    group.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    
    // Individual object custom animations
    if (sphere.current) {
      sphere.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      sphere.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
    
    if (box.current) {
      box.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      box.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.3 + 1) * 0.1;
    }
    
    if (cylinder.current) {
      cylinder.current.rotation.x = state.clock.getElapsedTime() * 0.4;
      cylinder.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.6 + 2) * 0.15;
    }
    
    if (torus.current) {
      torus.current.rotation.z = state.clock.getElapsedTime() * 0.6;
      torus.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.4 + 3) * 0.1;
    }
  });

  return (
    <group ref={group}>
      {/* Sphere */}
      <mesh 
        ref={sphere}
        position={[0, 0, 0]} 
        castShadow 
        receiveShadow
        onPointerOver={() => setHovered('sphere')}
        onPointerOut={() => setHovered(null)}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color="#0088CC" 
          metalness={0.5} 
          roughness={0.2} 
          emissive="#0088CC"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Box */}
      <mesh 
        ref={box}
        position={[1.5, 0, 0]} 
        castShadow 
        receiveShadow
        onPointerOver={() => setHovered('box')}
        onPointerOut={() => setHovered(null)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color="#00B4D8" 
          metalness={0.3} 
          roughness={0.4}
          emissive="#00B4D8"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Cylinder */}
      <mesh 
        ref={cylinder}
        position={[-1.5, 0, 0]} 
        castShadow 
        receiveShadow
        onPointerOver={() => setHovered('cylinder')}
        onPointerOut={() => setHovered(null)}
      >
        <cylinderGeometry args={[0.5, 0.5, 1.5, 32]} />
        <meshStandardMaterial 
          color="#48CAE4" 
          metalness={0.4} 
          roughness={0.3}
          emissive="#48CAE4"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Torus */}
      <mesh 
        ref={torus}
        position={[0, 1.5, 0]} 
        castShadow 
        receiveShadow
        onPointerOver={() => setHovered('torus')}
        onPointerOut={() => setHovered(null)}
      >
        <torusGeometry args={[0.5, 0.2, 16, 100]} />
        <meshStandardMaterial 
          color="#ADE8F4" 
          metalness={0.2} 
          roughness={0.5}
          emissive="#ADE8F4"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Particles effect */}
      <Particles count={200} />
    </group>
  );
}

// Floating text component - replaced Text3D with Text to avoid external font dependencies
function FloatingText() {
  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={1}
    >
      <Center position={[0, -2.5, 0]}>
        <Text
          fontSize={1}
          color="#0088CC"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          outlineWidth={0.02}
          outlineColor="#0088CC"
          material-toneMapped={false}
        >
          CliniSync
        </Text>
      </Center>
    </Float>
  );
}

// Particle system for added visual interest
function Particles({ count = 100 }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const { viewport, camera } = useThree();
  
  // This reference will give us direct access to our points
  const particlesPosition = useRef<Float32Array>(null);
  const dummy = useRef(new THREE.Object3D());
  
  const particles = useRef<{
    positions: number[][];
    speeds: number[];
  }>({
    positions: Array.from({ length: count }, () => [
      (Math.random() - 0.5) * 10, // x
      (Math.random() - 0.5) * 10, // y
      (Math.random() - 0.5) * 10  // z
    ]),
    speeds: Array.from({ length: count }, () => Math.random() * 0.01 + 0.002)
  });
  
  useFrame(() => {
    if (!mesh.current) return;
    
    particles.current.positions.forEach((pos, i) => {
      // Update position
      pos[1] -= particles.current.speeds[i];
      
      // Reset position if out of bounds
      if (pos[1] < -5) {
        pos[1] = 5;
        pos[0] = (Math.random() - 0.5) * 10;
        pos[2] = (Math.random() - 0.5) * 10;
      }
      
      // Update instance
      dummy.current.position.set(pos[0], pos[1], pos[2]);
      dummy.current.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.current.matrix);
    });
    
    mesh.current.instanceMatrix.needsUpdate = true;
  });
  
  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
    </instancedMesh>
  );
}

// Camera controller that responds to scroll
function CameraController() {
  const { camera } = useThree();
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    return scrollYProgress.onChange((scrollProgress) => {
      // Camera position based on scroll
      camera.position.z = 8 - scrollProgress * 2; // Move camera closer
      camera.position.y = scrollProgress * 2; // Move camera up
      camera.lookAt(0, 0, 0);
    });
  }, [scrollYProgress, camera]);
  
  return null;
}

export default function ThreeDModel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollRatio, setScrollRatio] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const rotation = useTransform(scrollYProgress, [0, 1], [0, Math.PI]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setScrollRatio(latest);
    });
  }, [scrollYProgress]);

  return (
    <motion.div 
      ref={containerRef}
      className="h-[500px] w-full md:h-[600px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      style={{ opacity }}
    >
      <Canvas 
        shadows 
        camera={{ position: [0, 0, 8], fov: 45 }} 
        dpr={[1, 2]}
        gl={{ antialias: true }}
      >
        <CameraController />
        
        <Suspense fallback={null}>
          <PresentationControls
            global
            rotation={[0, rotation.get() * 0.5, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 300 }}
          >
            <MedicalModel />
            <FloatingText />
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
        <pointLight position={[-10, -10, -10]} color="#48CAE4" intensity={1} />
      </Canvas>
    </motion.div>
  );
}
