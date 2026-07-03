<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header class="flex items-center h-14 px-4 border-b border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <div></div>
      <nav class="flex-col ml-auto space-x-4 flex h-10 sm:space-x-6 items-end">
        <div class="space-x-4">
          <RouterLink :to="{ name: 'home' }"> Home </RouterLink>
          <RouterLink to="/features" active-class="underline font-semi-bold"> Features </RouterLink>
          <RouterLink to="/pricing"> Pricing </RouterLink>
          <RouterLink to="/contact"> Contact </RouterLink>
          <RouterLink to="/pokemon-detail/1"> Poke Detail </RouterLink>
        </div>
        <div class="space-x-4">
          <RouterLink :to="{ name: 'login' }"> Login </RouterLink>
        </div>
      </nav>
    </header>
    <!-- Fin Header -->

    <!-- Main -->
    <main class="flex-1 flex items-center justify-center">
      <RouterView v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </RouterView>
    </main>
    <!-- Fin Main -->

    <!-- Footer -->
    <footer class="flex items-center h-14 px-4 border-t border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <p class="flex-1 text-sm text-gray-500 text-center">
        © 20xx Acme Corporation. Derechos reservados
      </p>
    </footer>
    <!-- Fin Footer -->
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
