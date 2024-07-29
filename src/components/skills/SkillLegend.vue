<script setup lang="ts">
  import { ref } from 'vue';
  import type { Skill } from '@/types/skills';

  defineProps<{ skills: Skill[] }>();

  const selectedSkill = ref<Skill | null>(null);
  const emit = defineEmits(['skillSelected']);

  const selectSkill = (skill: Skill) => {
    selectedSkill.value = skill === selectedSkill.value ? null : skill;
    emit('skillSelected', selectedSkill.value);
  };
</script>

<template>
  <div
    class="fixed bottom-4 left-4 bg-black bg-opacity-70 p-4 rounded-lg shadow-lg max-h-[40vh] md:max-h-[80vh] overflow-y-auto text-white w-64 sm:w-72"
  >
    <h3 class="lg:text-lg font-bold mb-2 text-blue-300">Skills</h3>
    <ul class="space-y-2">
      <li v-for="skill in skills" :key="skill.name">
        <button
          @click="selectSkill(skill)"
          class="flex items-center w-full text-left hover:bg-gray-800 p-2 rounded transition-colors duration-200"
          :class="{ 'bg-gray-700': selectedSkill === skill }"
        >
          <div class="w-4 h-4 mr-2 rounded-full" :style="{ backgroundColor: skill.color }"></div>
          <div class="flex-grow">
            <div class="text-sm md:text-md font-semibold">{{ skill.name }}</div>
            <div class="text-xs md:text-sm text-gray-300">
              Level: {{ Math.round(skill.level * 100) }}%
            </div>
          </div>
        </button>
      </li>
    </ul>
  </div>
</template>
