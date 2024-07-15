<script setup lang="ts">
import { onMounted, ref, nextTick, reactive } from 'vue'
import * as THREE from 'three';
import { gsap } from 'gsap';

import { type Skill } from '../data/types'
import { skills } from '../data/skills'
import { setupScene, createStars, createLines, handleWindowResize } from '../helpers/threeHelpers'
import { handleMouseMove } from '../helpers/interactionHandlers';
import SkillTooltip from './SkillTooltip.vue';
import SkillLegend from './SkillLegend.vue';

const container = ref(null)
const hoveredSkill = ref<Skill>(null)
const mousePosition = reactive({ x: 0, y: 0 })
let scene, camera, renderer, controls, stars, lines;

onMounted(() => {
    ({ scene, camera, renderer, controls } = setupScene(container.value))
    stars = createStars(scene, skills)
    lines = createLines(scene, skills, stars)

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    };

    animate();

    const onMouseMove = (event) => handleMouseMove(event, raycaster, mouse, camera, stars, lines, hoveredSkill, mousePosition)

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', () => handleWindowResize(camera, renderer))

    // Cleanup
    onMounted(() => {
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('resize', () => handleWindowResize)
    })
})

const handleSkillSelection = (skill) => {
    if (skill) {
        highlightSelectedSkill(skill)
    } else {
        resetAllStars()
    }
}

const highlightSelectedSkill = (selectedSkill) => {
  stars.forEach(star => {
    const isSelected = star.userData.skill.name === selectedSkill.name;
    const isRelated = selectedSkill.related.includes(star.userData.skill.name);
    
    gsap.to(star.scale, { 
      x: isSelected ? 1.5 : (isRelated ? 1.2 : 1),
      y: isSelected ? 1.5 : (isRelated ? 1.2 : 1),
      z: isSelected ? 1.5 : (isRelated ? 1.2 : 1),
      duration: 0.3 
    });

    star.material.opacity = isSelected || isRelated ? 1 : 0.3;
  });

  lines.forEach(line => {
    const isRelated = (
      line.geometry.attributes.position.array[0] === stars.find(s => s.userData.skill.name === selectedSkill.name).position.x &&
      line.geometry.attributes.position.array[1] === stars.find(s => s.userData.skill.name === selectedSkill.name).position.y
    ) || (
      line.geometry.attributes.position.array[3] === stars.find(s => s.userData.skill.name === selectedSkill.name).position.x &&
      line.geometry.attributes.position.array[4] === stars.find(s => s.userData.skill.name === selectedSkill.name).position.y
    );

    gsap.to(line.material, { opacity: isRelated ? 1 : 0.1, duration: 0.3 });
  });
}

const resetAllStars = () => {
  stars.forEach(star => {
    gsap.to(star.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
    star.material.opacity = 1;
  });

  lines.forEach(line => {
    gsap.to(line.material, { opacity: 0.3, duration: 0.3 });
  });
}
</script>

<template>
    <div ref="container" class="w-full h-screen"></div>
    <SkillTooltip :skill="hoveredSkill" :position="mousePosition" />
    <SkillLegend @skillSelected="handleSkillSelection" />
</template>