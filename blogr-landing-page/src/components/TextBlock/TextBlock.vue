<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <article class="max-w-[540px] w-full overpass">
    <div class="flex flex-col gap-7 lg:text-start text-center">
      <h3 class="text-preset-3 text-blue-700">{{ title }}</h3>

      <p class="text-[#4C5862] text-preset-5">{{ description }}</p>
    </div>
  </article>
</template>
