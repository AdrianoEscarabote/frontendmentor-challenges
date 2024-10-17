<template>
  <a
    href="/"
    :class="[
      'text-[0.8438rem] tracking-[0.0688rem] font-semibold uppercase w-full h-11 grid place-content-center pt-[0.0625rem] rounded-md',
      primary
        ? 'bg-neutral-white hover:bg-gradient-custom text-primary-purple hover:text-neutral-white hover:border hover:border-neutral-white'
        : 'primary text-neutral-white hover:text-primary-purple hover:border-primary-purple hover:border',
    ]"
    aria-label="Learn more about our plans"
  >
    learn more
  </a>
</template>

<script lang="ts">
export default {
  props: {
    primary: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="css" scoped>
.primary {
  background: linear-gradient(135.06deg, #a2a7f0 -0.05%, #696edd 100.05%);
}

.primary:hover {
  background: white;
}
</style>
