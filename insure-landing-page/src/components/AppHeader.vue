<script setup lang="ts">
import { ref, watch } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

watch(menuOpen, newVal => {
  if (newVal) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
})
</script>

<template>
  <header
    class="bg-white w-full max-w-[90rem] my-0 mx-auto lg:px-[10.3125rem] px-5"
  >
    <div class="flex justify-between items-center h-[5rem]">
      <img src="/images/logo.svg" alt="logo" />
      <button
        class="lg:hidden flex items-center"
        @click="toggleMenu"
        aria-label="Toggle mobile menu"
      >
        <img
          v-if="!menuOpen"
          src="/images/icon-hamburger.svg"
          alt="mobile menu icon"
        />
        <img
          v-if="menuOpen"
          src="/images/icon-close.svg"
          alt="close mobile menu icon"
        />
      </button>

      <nav class="hidden lg:flex gap-4">
        <ul
          class="flex gap-[1.5625rem] items-center pr-[0.9375rem] text-neutral-dark-grayish-violet bodySm"
        >
          <li>
            <a
              href="/"
              class="uppercase font-semibold hover:text-neutral-very-dark-violet"
              >how we work</a
            >
          </li>
          <li>
            <a
              href="/"
              class="uppercase font-semibold hover:text-neutral-very-dark-violet"
              >blog</a
            >
          </li>
          <li>
            <a
              href=""
              class="uppercase font-semibold hover:text-neutral-very-dark-violet"
              >account</a
            >
          </li>
        </ul>
        <button
          class="uppercase border-neutral-very-dark-violet border border-1 px-[1.625rem] h-[2.5rem] bodySm font-semibold hover:bg-neutral-very-dark-violet hover:text-neutral-white"
        >
          view plans
        </button>
      </nav>

      <nav
        v-if="menuOpen"
        class="mobile_menu lg:hidden absolute top-[5rem] left-0 w-full h-full bg-neutral-very-dark-violet flex flex-col items-center gap-10 pt-10 z-40 px-6"
      >
        <ul
          class="flex flex-col gap-8 items-center text-neutral-very-light-gray bodyMd"
        >
          <li>
            <a
              href="/"
              class="uppercase font-semibold hover:text-neutral-very-dark-violet"
              >how we work</a
            >
          </li>
          <li>
            <a
              href="/"
              class="uppercase font-semibold hover:text-neutral-very-dark-violet"
              >blog</a
            >
          </li>
          <li>
            <a
              href="/"
              class="uppercase font-semibold hover:text-neutral-very-dark-violet"
              >account</a
            >
          </li>
        </ul>
        <button
          class="w-full text-neutral-very-light-gray uppercase border-neutral-very-light-gray border border-1 px-[1.625rem] h-[2.5rem] bodyMd font-semibold hover:bg-neutral-very-dark-violet hover:text-neutral-white"
        >
          view plans
        </button>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="css">
.mobile_menu::before {
  content: '';
  position: absolute;
  bottom: 5rem;
  right: 0;
  background: url('/images/bg-pattern-mobile-nav.svg') no-repeat;
  background-size: 100%;
  width: 100%;
  height: 13.625rem;
}
</style>
