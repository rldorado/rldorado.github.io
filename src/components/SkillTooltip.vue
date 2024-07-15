<script setup lang="ts">
  defineProps<{
    skill: Object,
    position: Object
  }>();
</script>

<template>
  <div v-if="skill" 
       class="absolute p-4 bg-white bg-opacity-80 rounded-lg shadow-lg text-gray-800"
       :style="{ left: position.x + 'px', top: position.y + 'px' }">
    <div class="flex items-center mb-2">
      <div class="w-6 h-6 mr-2" :style="{ backgroundColor: skill.color }"></div>
      <h3 class="text-xl font-bold">{{ skill.name }}</h3>
    </div>
    <p class="text-sm">Level: {{ Math.round(skill.level * 100) }}%</p>
  </div>
</template>