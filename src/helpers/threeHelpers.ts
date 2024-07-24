import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { Skill } from '../types/skills';
import type { StarMesh, CurvedLine } from '../types/three-elements';

/**
 * Creates and sets up a THREE.js scene, camera, renderer, and controls for a given container.
 *
 * @param {HTMLElement} container - The HTML element to which the renderer's DOM element will be appended.
 * @return {Object} An object containing the created scene, camera, renderer, and controls.
 */
export const setupScene = (container: HTMLElement) => {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x111111);
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  camera.position.z = 5;

  return { scene, camera, renderer, controls };
};

/**
 * Creates stars based on skills and adds them to the scene.
 *
 * @param {THREE.Scene} scene - The THREE.js scene to add stars to.
 * @param {Skill[]} skills - The array of skills to create stars for.
 * @return {StarMesh[]} An array of created star meshes.
 */
export const createStars = (scene: THREE.Scene, skills: Skill[]): StarMesh[] => {
  const stars: StarMesh[] = [];

  skills.forEach((skill, index) => {
    const geometry = new THREE.SphereGeometry(skill.level * 0.2, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: skill.color });
    const star: StarMesh = new THREE.Mesh(geometry, material);

    const theta = (index / skills.length) * Math.PI * 2;
    const radius = 3;

    star.position.x = radius * Math.cos(theta);
    star.position.y = radius * Math.sin(theta);
    star.position.z = 0;

    star.userData.skill = skill;
    star.userData.originalScale = star.scale.clone();

    scene.add(star);
    stars.push(star);
  });

  return stars;
};

/**
 * Creates lines connecting stars based on related skills and adds them to the scene.
 *
 * @param {THREE.Scene} scene - The THREE.js scene to add lines to.
 * @param {Skill[]} skills - The array of skills to create lines for.
 * @param {StarMesh[]} stars - The array of star meshes representing the skills.
 * @return {CurvedLine[]} An array of created curved line elements.
 */
export const createLines = (scene: THREE.Scene, skills: Skill[], stars: StarMesh[]) => {
  const lines: CurvedLine[] = [];
  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.3
  });

  skills.forEach((skill) => {
    skill.related.forEach((relatedSkillName) => {
      const starA = stars.find((s) => s.userData.skill.name === skill.name);
      const starB = stars.find((s) => s.userData.skill.name === relatedSkillName);
      if (starA && starB) {
        const midPoint = new THREE.Vector3()
          .addVectors(starA.position, starB.position)
          .multiplyScalar(0.5);
        const distance = starA.position.distanceTo(starB.position);
        midPoint.z += distance * 0.5; // Adjust this multiplier to change the curve's height

        const curve = new THREE.QuadraticBezierCurve3(starA.position, midPoint, starB.position);

        const points = curve.getPoints(50);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, lineMaterial);

        scene.add(line);
        lines.push(line);
      }
    });
  });

  return lines;
};

/**
 * Updates the camera and renderer to match the current window size.
 *
 * @param {THREE.Camera} camera - The camera to update.
 * @param {THREE.WebGLRenderer} renderer - The renderer to update.
 * @return {void} This function does not return a value.
 */
export const handleWindowResize = (camera, renderer) => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};
