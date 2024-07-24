<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import * as THREE from 'three';

  const container = ref<HTMLDivElement | null>(null);

  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;
  let stars: THREE.Points;

  const init = () => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    container.value?.appendChild(renderer.domElement);

    // Create stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
      sizeAttenuation: true
    });

    const starsVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = -Math.random() * 2000;
      starsVertices.push(x, y, z);
    }

    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    camera.position.z = 1;

    animate();
  };

  const animate = () => {
    requestAnimationFrame(animate);

    stars.rotation.y += 0.0002;

    renderer.render(scene, camera);
  };

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  onMounted(() => {
    init();
    window.addEventListener('resize', onWindowResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', onWindowResize);
    renderer.dispose();
  });
</script>

<template>
  <div ref="container" class="fixed top-0 left-0 w-full h-full z-[-1]"></div>
</template>
