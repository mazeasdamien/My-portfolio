import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

interface SphereData {
    position: [number, number, number];
    velocity: [number, number, number];
    size: number;
    color: string;
}

function LiquidGlassSphere({
    initialPosition,
    initialVelocity,
    size,
    color,
    mousePosition
}: {
    initialPosition: [number, number, number];
    initialVelocity: [number, number, number];
    size: number;
    color: string;
    mousePosition: React.MutableRefObject<[number, number]>;
}) {
    const meshRef = useRef<THREE.Mesh>(null);
    const velocity = useRef(initialVelocity);
    const position = useRef(initialPosition);

    useFrame((state, delta) => {
        if (!meshRef.current) return;

        // Get mouse position in 3D space
        const mouseX = (mousePosition.current[0] - 0.5) * 10;
        const mouseY = -(mousePosition.current[1] - 0.5) * 6;

        // Calculate distance to mouse
        const dx = mouseX - position.current[0];
        const dy = mouseY - position.current[1];
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Repulsion from mouse
        const repelStrength = 3;
        const maxDistance = 4;

        if (distance < maxDistance && distance > 0) {
            const force = (1 - distance / maxDistance) * repelStrength;
            velocity.current[0] -= (dx / distance) * force * delta;
            velocity.current[1] -= (dy / distance) * force * delta;
        }

        // Update position
        position.current[0] += velocity.current[0] * delta;
        position.current[1] += velocity.current[1] * delta;
        position.current[2] += velocity.current[2] * delta;

        // Boundary bouncing
        const bounds = { x: 5, y: 3, z: 2 };

        if (position.current[0] < -bounds.x || position.current[0] > bounds.x) {
            velocity.current[0] *= -0.95;
            position.current[0] = Math.max(-bounds.x, Math.min(bounds.x, position.current[0]));
        }
        if (position.current[1] < -bounds.y || position.current[1] > bounds.y) {
            velocity.current[1] *= -0.95;
            position.current[1] = Math.max(-bounds.y, Math.min(bounds.y, position.current[1]));
        }
        if (position.current[2] < -bounds.z || position.current[2] > bounds.z) {
            velocity.current[2] *= -0.95;
            position.current[2] = Math.max(-bounds.z, Math.min(bounds.z, position.current[2]));
        }

        // Slow rotation
        meshRef.current.rotation.x += delta * 0.2;
        meshRef.current.rotation.y += delta * 0.3;

        // Update mesh position
        meshRef.current.position.set(...position.current);
    });

    return (
        <mesh ref={meshRef} position={initialPosition}>
            <sphereGeometry args={[size, 64, 64]} />
            <MeshTransmissionMaterial
                backside
                samples={16}
                resolution={1024}
                transmission={0.95}
                roughness={0.1}
                thickness={1.2}
                ior={1.5}
                chromaticAberration={0.5}
                anisotropy={1}
                distortion={0.3}
                distortionScale={0.5}
                temporalDistortion={0.1}
                clearcoat={1}
                attenuationDistance={0.5}
                attenuationColor={color}
                color={color}
                transparent
                opacity={0.8}
            />
        </mesh>
    );
}

function Scene() {
    const mousePosition = useRef<[number, number]>([0.5, 0.5]);

    // Color palette from profile photo
    const colors = [
        '#B8D4E8', // Light blue
        '#A8CAE0', // Medium blue  
        '#C8DCF0', // Pale blue
        '#E8D8C8', // Beige
        '#F0E8D8', // Light beige
        '#E0D0B8', // Warm beige
        '#F0F0F0', // Soft white
        '#C0D0E0', // Cool blue-gray
    ];

    const spheres = useMemo<SphereData[]>(() => {
        return Array.from({ length: 12 }, () => ({
            position: [
                (Math.random() - 0.5) * 8,
                (Math.random() - 0.5) * 5,
                (Math.random() - 0.5) * 3
            ] as [number, number, number],
            velocity: [
                (Math.random() - 0.5) * 0.5,
                (Math.random() - 0.5) * 0.5,
                (Math.random() - 0.5) * 0.3
            ] as [number, number, number],
            size: 0.4 + Math.random() * 0.6,
            color: colors[Math.floor(Math.random() * colors.length)]
        }));
    }, []);

    React.useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePosition.current = [
                e.clientX / window.innerWidth,
                e.clientY / window.innerHeight
            ];
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <directionalLight position={[-10, -10, -5]} intensity={0.3} />
            <pointLight position={[0, 5, 0]} intensity={0.5} color="#ffffff" />

            {spheres.map((sphere, i) => (
                <LiquidGlassSphere
                    key={i}
                    initialPosition={sphere.position}
                    initialVelocity={sphere.velocity}
                    size={sphere.size}
                    color={sphere.color}
                    mousePosition={mousePosition}
                />
            ))}

            <Environment preset="apartment" />
        </>
    );
}

export const FloatingShapes: React.FC = () => {
    return (
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            <Canvas
                camera={{ position: [0, 0, 8], fov: 45 }}
                gl={{ alpha: true, antialias: true }}
                style={{ background: 'transparent' }}
            >
                <Scene />
            </Canvas>
        </div>
    );
};
