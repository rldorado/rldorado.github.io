<template>
  <div ref="container" class="w-full h-screen">
    <SkillTooltip :skill="hoveredSkill" :position="mousePosition" />
    <SkillLegend :skills="allSkills" @skillSelected="handleSkillSelection" />
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, reactive, onUnmounted, computed } from 'vue';
  import * as THREE from 'three';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
  import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
  import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
  import { frontendSkills, backendSkills } from '@/data/skills';
  import type { Skill, SkillCategory } from '@/types/skills';
  import SkillTooltip from './skills/SkillTooltip.vue';
  import SkillLegend from './skills/SkillLegend.vue';

  const skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      skills: frontendSkills
    },
    {
      name: 'Backend',
      skills: backendSkills
    }
  ];

  const allSkills = computed(() => skillCategories.flatMap((category) => category.skills));

  const container = ref<HTMLDivElement | null>(null);
  const hoveredSkill = ref<Skill | null>(null);
  const mousePosition = reactive({ x: 0, y: 0 });

  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;
  let controls: OrbitControls;
  let solarSystems: THREE.Group[] = [];

  onMounted(() => {
    if (!container.value) return;

    initScene();
    createSolarSystems();
    createStarryBackground();

    // Point camera to first solar system
    camera.position.set(-90, 0, 100);
    camera.lookAt(solarSystems[0].position);

    controls.target.copy(solarSystems[0].position);
    controls.update();

    animate();

    window.addEventListener('resize', onWindowResize);
    window.addEventListener('mousemove', onMouseMove);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', onWindowResize);
    window.removeEventListener('mousemove', onMouseMove);

    scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.geometry.dispose();
        (object.material as THREE.Material).dispose();
      }
    });
    renderer.dispose();
  });

  function initScene() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.value!.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    camera.position.z = 100;
  }

  function createSolarSystems() {
    const SYSTEM_SPACING = 180;

    skillCategories.forEach((category, index) => {
      const solarSystem = new THREE.Group();

      // Create sun (category)
      const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
      const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
      const sun = new THREE.Mesh(sunGeometry, sunMaterial);
      solarSystem.add(sun);

      // Add category label
      const loader = new FontLoader();
      loader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
        const textGeometry = new TextGeometry(category.name, {
          font: font,
          size: 1.5,
          height: 0.2
        });
        const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.set(-4.5, 6, 0);
        solarSystem.add(textMesh);
      });

      // Create planets (skills)
      category.skills.forEach((skill, skillIndex) => {
        const orbit = new THREE.Group();
        const distance = (skillIndex + 1) * 10;

        const orbitCurve = new THREE.EllipseCurve(0, 0, distance, distance);
        const orbitPoints = orbitCurve.getPoints(100);
        const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);
        const orbitMaterial = new THREE.LineBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.3
        });
        const orbitLine = new THREE.Line(orbitGeometry, orbitMaterial);
        orbit.add(orbitLine);

        const planetGeometry = new THREE.SphereGeometry(skill.level * 1.5, 32, 32);
        const planetMaterial = new THREE.MeshBasicMaterial({ color: skill.color });
        const planet = new THREE.Mesh(planetGeometry, planetMaterial);
        planet.position.x = distance;

        planet.userData = { skill };
        orbit.add(planet);
        solarSystem.add(orbit);
      });

      solarSystem.position.x = (index - (skillCategories.length - 1) / 2) * SYSTEM_SPACING;
      scene.add(solarSystem);
      solarSystems.push(solarSystem);
    });
  }

  const createStarryBackground = () => {
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });

    const starsVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = THREE.MathUtils.randFloatSpread(2000);
      const y = THREE.MathUtils.randFloatSpread(2000);
      const z = THREE.MathUtils.randFloatSpread(2000);
      starsVertices.push(x, y, z);
    }

    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);
  };

  const animate = () => {
    requestAnimationFrame(animate);
    controls.update();

    solarSystems.forEach((solarSystem) => {
      solarSystem.children.forEach((orbit, index) => {
        if (orbit instanceof THREE.Group) {
          orbit.rotation.z += 0.001 / (index + 1);
        }
      });
    });

    renderer.render(scene, camera);
  };

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Adjust position based on screen size
    if (window.innerWidth <= 640) {
      camera.position.set(-45, 0, 100);
    } else if (window.innerWidth <= 1024) {
      camera.position.set(-70, 0, 100);
    } else {
      camera.position.set(-90, 0, 100);
    }

    camera.lookAt(solarSystems[0].position);
    controls.target.copy(solarSystems[0].position);
  };

  const onMouseMove = (event: MouseEvent) => {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      const intersectedObject = intersects[0].object;
      if (intersectedObject.userData && intersectedObject.userData.skill) {
        hoveredSkill.value = intersectedObject.userData.skill;
        mousePosition.x = event.clientX;
        mousePosition.y = event.clientY;
      } else {
        hoveredSkill.value = null;
      }
    } else {
      hoveredSkill.value = null;
    }
  };

  const handleSkillSelection = (skill: Skill | null) => {
    if (skill) {
      highlightSelectedSkill(skill);
    } else {
      resetAllPlanets();
    }
  };

  const highlightSelectedSkill = (selectedSkill: Skill) => {
    solarSystems.forEach((solarSystem) => {
      solarSystem.children.forEach((child) => {
        if (child instanceof THREE.Group) {
          child.children.forEach((grandChild) => {
            if (grandChild instanceof THREE.Mesh && grandChild.userData.skill) {
              const isSelected = grandChild.userData.skill.name === selectedSkill.name;
              grandChild.scale.setScalar(isSelected ? 1.5 : 1);
              (grandChild.material as THREE.MeshBasicMaterial).opacity = isSelected ? 1 : 0.5;
            }
          });
        }
      });
    });
  };

  const resetAllPlanets = () => {
    solarSystems.forEach((solarSystem) => {
      solarSystem.children.forEach((child) => {
        if (child instanceof THREE.Group) {
          child.children.forEach((grandChild) => {
            if (grandChild instanceof THREE.Mesh) {
              grandChild.scale.setScalar(1);
              (grandChild.material as THREE.MeshBasicMaterial).opacity = 1;
            }
          });
        }
      });
    });
  };
</script>
