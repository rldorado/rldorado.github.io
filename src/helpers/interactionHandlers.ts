import { gsap } from 'gsap';
import * as THREE from 'three';
import type { CurvedLine, StarMesh } from '../types/three-elements';

/**
 * Handles the mouse move event to interact with stars and lines in the scene.
 *
 * @param {MouseEvent} event - The mouse event triggering the function.
 * @param {THREE.Raycaster} raycaster - The raycaster for mouse intersection detection.
 * @param {THREE.Vector2} mouse - The vector representing the mouse position.
 * @param {THREE.Camera} camera - The camera used in the scene.
 * @param {StarMesh[]} stars - The array of star meshes in the scene.
 * @param {CurvedLine[]} lines - The array of curved lines in the scene.
 */
export const handleMouseMove = (
  event: MouseEvent,
  raycaster: THREE.Raycaster,
  mouse: THREE.Vector2,
  camera: THREE.Camera,
  stars: StarMesh[],
  lines: CurvedLine[]
) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  const mousePosition = { x: event.clientX, y: event.clientY };

  mousePosition.x = event.clientX + 10;
  mousePosition.y = event.clientY + 10;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(stars);

  resetStarsAndLines(stars, lines);

  let hoveredSkill = null;

  if (intersects.length > 0) {
    const intersectedStar: StarMesh = intersects[0].object;
    hoveredSkill = intersectedStar.userData.skill;

    animateHoveredStar(intersectedStar);
    highlightRelatedStarsAndLines(intersectedStar, stars, lines);
  }

  return { hoveredSkill, mousePosition };
};

/**
 * Resets the scale of stars and the opacity of lines to their original values.
 *
 * @param {StarMesh[]} stars - Array of stars to reset.
 * @param {CurvedLine[]} lines - Array of lines to reset.
 */
const resetStarsAndLines = (stars: StarMesh[], lines: CurvedLine[]) => {
  stars.forEach((star) => {
    gsap.to(star.scale, {
      x: star.userData.originalScale.x,
      y: star.userData.originalScale.y,
      z: star.userData.originalScale.z,
      duration: 0.3
    });
  });

  lines.forEach((line) => {
    gsap.to(line.material, { opacity: 0.3, duration: 0.3 });
  });
};

/**
 * Animates the scale of the hovered star.
 *
 * @param {StarMesh} star - The star to be animated.
 * @return {void}
 */
const animateHoveredStar = (star: StarMesh) => {
  gsap.to(star.scale, { x: 1.2, y: 1.2, z: 1.2, duration: 0.3 });
};

/**
 * Find all stars related to the hovered star and highlight related lines.
 *
 * @param {StarMesh} hoveredStar - The currently hovered star.
 * @param {StarMesh[]} stars - Array of all stars.
 * @param {CurvedLine[]} lines - Array of all lines.
 */
const highlightRelatedStarsAndLines = (
  hoveredStar: StarMesh,
  stars: StarMesh[],
  lines: CurvedLine[]
) => {
  const relatedStars = stars.filter(
    (star) =>
      hoveredStar.userData.skill.related.includes(star.userData.skill.name) ||
      star.userData.skill.related.includes(hoveredStar.userData.skill.name)
  );

  lines.forEach((line) => {
    const points = line.geometry.attributes.position.array;
    const startPoint = new THREE.Vector3(points[0], points[1], points[2]);
    const endPoint = new THREE.Vector3(
      points[points.length - 3],
      points[points.length - 2],
      points[points.length - 1]
    );

    const isRelated =
      (startPoint.distanceTo(hoveredStar.position) < 0.1 ||
        endPoint.distanceTo(hoveredStar.position) < 0.1) &&
      relatedStars.some(
        (relatedStar) =>
          startPoint.distanceTo(relatedStar.position) < 0.1 ||
          endPoint.distanceTo(relatedStar.position) < 0.1
      );

    if (isRelated) {
      gsap.to(line.material, { opacity: 1, duration: 0.3 });
    }
  });
};

/**
 * Resets the scale and opacity of all stars and lines to their original values.
 *
 * @param {StarMesh[]} stars - Array of stars to reset.
 * @param {CurvedLine[]} lines - Array of lines to reset.
 */
export const resetAllStars = (stars: StarMesh[], lines: CurvedLine[]) => {
  stars.forEach((star) => {
    gsap.to(star.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
    gsap.to(star.material, { opacity: 1, duration: 0.3 });
  });

  lines.forEach((line) => {
    gsap.to(line.material, { opacity: 0.3, duration: 0.3 });
  });
};
