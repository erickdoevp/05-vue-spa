<script setup lang="ts">
import { RouterLink } from 'vue-router'
import LoginForm from '../components/LoginForm.vue'
</script>

<template>
  <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
    <h1 class="text-2xl font-semibold mb-4">Login</h1>
    <LoginForm />
    <!-- Sign up  Link -->
    <div class="mt-6 text-blue-500 text-center">
      <RouterLink :to="{ name: 'register' }" class="hover:underline">Sign up Here</RouterLink>
    </div>
  </div>
</template>
