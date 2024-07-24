<script setup lang="ts">
  import { reactive } from 'vue';

  const form = reactive({
    name: '',
    email: '',
    message: ''
  });

  function handleSubmit() {
    console.log('Form submited:', form);
    form.name = '';
    form.email = '';
    form.message = '';
  }
</script>

<template>
  <form @submit.prevent="handleSubmit" class="max-w-md mx-auto">
    <div class="mb-4">
      <label for="name" class="block mb-2">Name</label>
      <input
        type="text"
        id="name"
        v-model="form.name"
        required
        class="w-full px-3 py-2 border rounded"
      />
    </div>
    <div class="mb-4">
      <label for="email" class="block mb-2">Email</label>
      <input
        type="email"
        id="email"
        v-model="form.email"
        required
        class="w-full px-3 py-2 border rounded"
      />
    </div>
    <div class="mb-4">
      <label for="message" class="block mb-2">Message</label>
      <textarea
        id="message"
        v-model="form.message"
        required
        class="w-full px-3 py-2 border rounded"
      ></textarea>
    </div>
    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Send
    </button>
  </form>
</template>
