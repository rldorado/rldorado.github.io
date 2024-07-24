<script setup lang="ts">
  import { ref } from 'vue';
  import { skills } from '../data/skills';

  const selectedSkill = ref(null);
  const emit = defineEmits(['skillSelected']);

  const selectSkill = (skill) => {
    selectedSkill.value = skill === selectedSkill.value ? null : skill;
    emit('skillSelected', selectedSkill.value);
  };
</script>

<template>
  <div class="absolute top-4 right-4 bg-white bg-opacity-80 p-4 rounded-lg shadow-lg">
    <h3 class="text-lg font-bold mb-2">Skills</h3>
    <ul>
      <li v-for="skill in skills" :key="skill.name" class="mb-2">
        <button
          @click="selectSkill(skill)"
          class="flex items-center w-full text-left hover:bg-gray-100 p-1 rounded"
          :class="{ 'bg-gray-200': selectedSkill === skill }"
        >
          <div class="w-4 h-4 mr-2 rounded-full" :style="{ backgroundColor: skill.color }"></div>
          {{ skill.name }}
        </button>
      </li>
    </ul>
  </div>
</template>
