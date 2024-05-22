<script setup lang="ts">
defineProps<{
  text: string
  onClickFn: () => {}
}>()
</script>

<template>
  <button
    class="w-full transition-all h-[3.625rem] bg-primary-green text-neutral-white rounded-md bodyM hover:bg-[#063d33]"
    @click="onClickFn"
  >
    {{ text }}
  </button>
</template>
