import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Vector3, Group } from 'three';
import { ICONS } from '../mockData';

type ExclusionBox = {
  x: number;
  y: number;
  z: number;
};

interface Background3DProps {
  exclusionBox?: ExclusionBox;
};

function generateRandomPositionAvoidingCenter(exclusionBox: ExclusionBox, existingPositions: Vector3[], minDistance: number): Vector3 {
  let pos: Vector3;
  let attempts = 0;
  do {
    pos = new Vector3(
      (Math.random() - 0.5) * 30,
      (Math.random() - 0.5) * 24,
      (Math.random() - 0.5) * 24
    );
    attempts++;
    if (attempts > 1000) {
      // If too many attempts, break to avoid infinite loop
      break;
    }
  } while (
    Math.abs(pos.x) < exclusionBox.x &&
    Math.abs(pos.y) < exclusionBox.y &&
    Math.abs(pos.z) < exclusionBox.z ||
    existingPositions.some(existingPos => pos.distanceTo(existingPos) < minDistance)
  );

  return pos;
}

function generateVelocity(): Vector3 {
  const speed = 0.3 + Math.random() * 0.1;
  const direction = new Vector3(
    Math.random() - 0.5,
    Math.random() - 0.5,
    Math.random() - 0.5
  ).normalize();
  return direction.multiplyScalar(speed);
}

function FloatingTechIcons({ exclusionBox }: { exclusionBox: ExclusionBox }) {
  const groupRef = useRef<Group>(null);
  const minDistance = 3; // Minimum distance between icons to prevent overlap

  const icons = useMemo(() => {
    const extendedIcons = [...ICONS];
    const positions: Vector3[] = [];
    return extendedIcons.map(({ icon, label }) => {
      const position = generateRandomPositionAvoidingCenter(exclusionBox, positions, minDistance);
      positions.push(position);
      return {
        icon,
        label,
        position,
        velocity: generateVelocity(),
      };
    });
  }, [exclusionBox]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    icons.forEach((icon, index) => {
      const mesh = groupRef.current!.children[index];
      icon.position.addScaledVector(icon.velocity, delta);

      // Prevent icons from moving into the exclusion zone dynamically
      if (
        Math.abs(icon.position.x) < exclusionBox.x &&
        Math.abs(icon.position.y) < exclusionBox.y &&
        Math.abs(icon.position.z) < exclusionBox.z
      ) {
        icon.velocity.x *= -1;
        icon.velocity.y *= -1;
        icon.velocity.z *= -1;
        icon.position.addScaledVector(icon.velocity, delta);
      }

      // Prevent icons from overlapping dynamically by simple repulsion
      icons.forEach((otherIcon, otherIndex) => {
        if (index !== otherIndex) {
          const distance = icon.position.distanceTo(otherIcon.position);
          if (distance < minDistance) {
            const direction = icon.position.clone().sub(otherIcon.position).normalize();
            const overlap = minDistance - distance;
            icon.position.add(direction.multiplyScalar(overlap * 0.5));
            otherIcon.position.sub(direction.multiplyScalar(overlap * 0.5));
            // Reverse velocities to avoid sticking
            icon.velocity.multiplyScalar(-1);
            otherIcon.velocity.multiplyScalar(-1);
          }
        }
      });

      ['x', 'y', 'z'].forEach((axis) => {
        const boundary = axis === 'y' ? 4.5 : 5;
        if ((icon.position as any)[axis] > boundary) {
          (icon.position as any)[axis] = boundary;
          (icon.velocity as any)[axis] *= -1;
        } else if ((icon.position as any)[axis] < -boundary) {
          (icon.position as any)[axis] = -boundary;
          (icon.velocity as any)[axis] *= -1;
        }
      });

      mesh.position.copy(icon.position);
    });
  });

  return (
    <group ref={groupRef}>
      {icons.map(({ icon, position }, index) => (
        <group key={index} position={position}>
          <Html center>
            <div
              style={{
                color: 'white',
                textAlign: 'center',
                userSelect: 'none',
                transition: 'transform 0.3s ease',
                filter: 'drop-shadow(0 0 6px rgba(0,0,0,0.6))',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.4) rotate(5deg)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
              }}
            >
              <div>{icon}</div>
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}

export const Background3D: React.FC<Background3DProps> = ({ exclusionBox = { x: 8, y: 6, z: 6 } }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        background: 'transparent',
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} />
      <FloatingTechIcons exclusionBox={exclusionBox} />
    </Canvas>
  );
};