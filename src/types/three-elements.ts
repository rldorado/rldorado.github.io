import * as THREE from 'three';
import type { Skill } from './skills';

export interface StarMesh extends THREE.Mesh {
  position: THREE.Vector3;
  scale: THREE.Vector3;
  material: THREE.MeshBasicMaterial;
  userData: {
    skill: Skill;
    originalScale: THREE.Vector3;
  };
}

export type CurvedLine = THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>;
