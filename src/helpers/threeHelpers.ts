import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Initializes a 3D scene with a camera, renderer, and controls inside the specified container.
 *
 * @param {type} container - The container element to hold the rendered scene.
 * @return {type} An object containing the initialized scene, camera, renderer, and controls.
 */
export const setupScene = (container) => {
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
}

/**
 * Creates a set of stars in a scene based on the given skills.
 *
 * @param {THREE.Scene} scene - The scene in which the stars will be added.
 * @param {Array<{ name: string, color: number, level: number }>} skills - An array of skills used to determine the properties of the stars.
 * @return {Array<THREE.Mesh>} An array of THREE.Mesh objects representing the stars.
 */
export const createStars = (scene, skills) => {
  const stars = [];
  const starMap = new Map();

  skills.forEach((skill, index) => {
    const geometry = new THREE.SphereGeometry(skill.level * 0.2, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: skill.color });
    const star = new THREE.Mesh(geometry, material);
    
    const theta = (index / skills.length) * Math.PI * 2;
    const radius = 3;
    
    star.position.x = radius * Math.cos(theta);
    star.position.y = radius * Math.sin(theta);
    star.position.z = 0;
    
    star.userData.skill = skill;
    star.userData.originalScale = star.scale.clone();
    
    scene.add(star);
    stars.push(star);
    starMap.set(skill.name, star);
  });

  return stars;
}

/**
 * Creates lines connecting related skills with stars in a scene.
 *
 * @param {any} scene - The scene where the lines will be added.
 * @param {any[]} skills - An array of skills.
 * @param {any[]} stars - An array of stars representing the skills.
 * @return {THREE.Line[]} An array of lines connecting the related skills.
 */
export const createLines = (scene, skills, stars) => {
  const lines = [];
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.3 });

  skills.forEach(skill => {
    skill.related.forEach(relatedSkillName => {
      const starA = stars.find(s => s.userData.skill.name === skill.name);
      const starB = stars.find(s => s.userData.skill.name === relatedSkillName);
      if (starA && starB) {
        const geometry = new THREE.BufferGeometry().setFromPoints([starA.position, starB.position]);
        const line = new THREE.Line(geometry, lineMaterial);
        scene.add(line);
        lines.push(line);
      }
    });
  });

  return lines;
}

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
}