import { gsap } from 'gsap';
import * as THREE from 'three';

/**
 * Function to handle mouse movement and interaction with 3D objects.
 *
 * @param {Event} event - The mouse event triggering the function
 * @param {Raycaster} raycaster - The raycaster for object intersection
 * @param {Vector2} mouse - The mouse position in normalized device coordinates
 * @param {PerspectiveCamera} camera - The camera for the scene
 * @param {Array<THREE.Mesh>} stars - Array of stars in the scene
 * @param {Array<THREE.Line>} lines - Array of connecting lines between stars
 * @param {Ref<Skill>} hoveredSkill - The skill currently being hovered over
 * @param {Vector2} mousePosition - Current mouse position
 * @return {void} 
 */
export const handleMouseMove = (event, raycaster, mouse, camera, stars, lines, hoveredSkill, mousePosition) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  mousePosition.x = event.clientX + 10;
  mousePosition.y = event.clientY + 10;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(stars);

  resetStarsAndLines(stars, lines);

  if (intersects.length > 0) {
    const intersectedStar = intersects[0].object;
    hoveredSkill.value = intersectedStar.userData.skill;
    
    animateHoveredStar(intersectedStar);
    highlightRelatedStarsAndLines(intersectedStar, stars, lines);
  } else {
    hoveredSkill.value = null;
  }
}

/**
 * Resets the scale of stars and the opacity of lines to their original values.
 *
 * @param {Array<THREE.Mesh>} stars - Array of stars to reset.
 * @param {Array<THREE.Line>} lines - Array of lines to reset.
 */
const resetStarsAndLines = (stars, lines) => {
  stars.forEach(star => {
    gsap.to(star.scale, { x: star.userData.originalScale.x, y: star.userData.originalScale.y, z: star.userData.originalScale.z, duration: 0.3 });
  });

  lines.forEach(line => {
    gsap.to(line.material, { opacity: 0.3, duration: 0.3 });
  });
}

/**
 * Animates the scale of the hovered star.
 *
 * @param {THREE.Mesh} star - The star to be animated.
 * @return {void} 
 */
const animateHoveredStar = (star: THREE.Mesh) => {
  gsap.to(star.scale, { x: 1.2, y: 1.2, z: 1.2, duration: 0.3 });
}

/**
 * Highlights related stars and their corresponding lines when a star is hovered over.
 * @param {THREE.Mesh} hoveredStar - The star that is being hovered over.
 * @param {THREE.Mesh[]} stars - An array of all the stars in the scene.
 * @param {THREE.Line[]} lines - An array of all the lines in the scene.
 */
function highlightRelatedStarsAndLines(hoveredStar: THREE.Mesh, stars: THREE.Mesh[], lines: THREE.Line[]) {
  // Find all stars that are related to the hovered star.
  const relatedStars = stars.filter(star => 
    hoveredStar.userData.skill.related.includes(star.userData.skill.name) ||
    star.userData.skill.related.includes(hoveredStar.userData.skill.name)
  );

  // Highlight each related star by animating its scale.
  relatedStars.forEach(relatedStar => {
    animateHoveredStar(relatedStar);
  });

  // Find and highlight the lines that connect the hovered star to its related stars.
  relatedStars.forEach(relatedStar => {
    // Find the line that connects the hovered star to the related star.
    const line = lines.find(l => 
      (l.geometry.attributes.position.array[0] === hoveredStar.position.x && l.geometry.attributes.position.array[1] === hoveredStar.position.y) ||
      (l.geometry.attributes.position.array[3] === hoveredStar.position.x && l.geometry.attributes.position.array[4] === hoveredStar.position.y)
    );

    // If a line is found, animate its opacity to make it visible.
    if (line) {
      gsap.to(line.material, { opacity: 1, duration: 0.3 });
    }
  });
}
