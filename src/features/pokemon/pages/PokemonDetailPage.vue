<template>
  <section>
    <h1 class="text-3xl font-bold">
      Pokemon <small class="text-blue-500">#{{ id }}</small>
    </h1>
    <img :src="img" alt="poke-chido" class="w-[200px] h-[200px] mt-5" />

    <RouterLink
      class="bg-blue-500 text-white p-2 rounded mt-5 text-center hover:bg-blue-300"
      :to="{ name: 'pokemon-detail', params: { id: id + 1 } }"
      >Next</RouterLink
    >
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

interface Props {
  id: number
}

const props = defineProps<Props>()
console.log(props)

const img = computed(
  () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.id}.svg`,
)
</script>
