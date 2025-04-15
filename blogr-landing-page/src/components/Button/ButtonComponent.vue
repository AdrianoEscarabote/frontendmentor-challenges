<script setup lang="ts">
defineProps<{
  text: string
  variant: 'primary' | 'secondary'
}>()
</script>

<template>
  <button
    class="h-12 font rounded-[1.75rem] transition ease-in-out duration-300 cursor-pointer"
    :class="{
      'bg-neutral-0 w-[8.5625rem] text-red-700 hover:text-neutral-0 hover:bg-red-300':
        variant === 'primary',
      'border text-neutral-0 w-[138px] border-neutral-0 hover:text-red-300 hover:bg-neutral-0':
        variant === 'secondary',
    }"
  >
    {{ text }}
  </button>
</template>

<style lang="css" scoped>
.font {
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
  font-size: 16px;
}
</style>
