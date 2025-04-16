<script setup lang="ts">
import { ref } from 'vue'
import ButtonComponent from '@/components/Button/ButtonComponent.vue'
import IconClose from '@/assets/images/icon-close.svg'
import IconHamburger from '@/assets/images/icon-hamburger.svg'

const isMobileMenuOpen = ref(false)
const isProductOpen = ref(false)
const isCompanyOpen = ref(false)
const isConnectOpen = ref(false)
</script>

<template>
  <header
    class="relative overflow-hidden z-10 gradient-red rounded-es-[6.25rem] flex justify-center"
  >
    <div
      class="relative pt-[3.75rem] lg:pb-[9.6875rem] pb-10 max-w-[1440px] w-full lg:pl-[10.4375rem] lg:pr-[10.0625rem] px-4 mx-auto lg:min-h-min min-h-[37.5rem]"
    >
      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="lg:hidden z-50 absolute top-15 right-6"
      >
        <img
          :src="isMobileMenuOpen ? IconClose : IconHamburger"
          class="w-8 h-7"
          alt="Toggle menu"
        />
      </button>

      <nav class="flex items-center justify-between">
        <div class="flex gap-16">
          <img src="../../assets/images/logo.svg" alt="Logo" class="w-[101px] h-[39px]" />

          <ul class="hidden lg:flex items-center gap-[1.875rem] ubuntu">
            <li class="relative group">
              <button
                class="cursor-pointer flex items-center gap-[0.5rem] button-font text-neutral-0"
              >
                Product
                <img src="../../assets/images/icon-arrow-light.svg" alt="" />
              </button>
              <ul
                class="absolute top-full top-2 left-0 bg-neutral-0 text-neutral-800 p-4 w-40 rounded-md shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 z-50"
              >
                <li class="py-1 ubuntu text-blue-700 px-2 hover:underline">
                  <a href="/">Overview</a>
                </li>
                <li class="py-1 ubuntu text-blue-700 px-2 hover:underline">
                  <a href="/">Pricing</a>
                </li>
                <li class="py-1 ubuntu text-blue-700 px-2 hover:underline">
                  <a href="/">Marketplace</a>
                </li>
                <li class="py-1 ubuntu text-blue-700 px-2 hover:underline">
                  <a href="/">Features</a>
                </li>
                <li class="py-1 ubuntu text-blue-700 px-2 hover:underline">
                  <a href="/">Integrations</a>
                </li>
              </ul>
            </li>
            <li class="relative group">
              <button
                class="cursor-pointer flex items-center gap-[0.625rem] button-font text-neutral-0"
              >
                Company

                <img src="../../assets/images/icon-arrow-light.svg" alt="" />
              </button>
              <ul
                class="absolute top-full top-2 left-0 bg-neutral-0 text-neutral-800 p-4 w-40 rounded-md shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 z-50"
              >
                <li class="py-1 ubuntu text-blue-700 px-2 hover:underline">
                  <a href="/">About</a>
                </li>
                <li class="py-1 ubuntu text-blue-700 px-2 hover:underline">
                  <a href="/">Team</a>
                </li>
                <li class="py-1 ubuntu text-blue-700 px-2 hover:underline">
                  <a href="/">Blog</a>
                </li>
                <li class="py-1 ubuntu text-blue-700 px-2 hover:underline">
                  <a href="/">Careers</a>
                </li>
              </ul>
            </li>
            <li class="relative group">
              <button
                class="cursor-pointer flex items-center gap-[0.625rem] button-font text-neutral-0"
              >
                Connect

                <img src="../../assets/images/icon-arrow-light.svg" alt="" />
              </button>

              <ul
                class="absolute top-full top-2 left-0 bg-neutral-0 text-neutral-800 p-4 w-40 rounded-md shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 z-50"
              >
                <li class="py-1 px-2 ubuntu text-blue-700 hover:underline">
                  <a href="/">Contact</a>
                </li>
                <li class="py-1 px-2 ubuntu text-blue-700 hover:underline">
                  <a href="/">Newsletter</a>
                </li>
                <li class="py-1 px-2 ubuntu text-blue-700 hover:underline">
                  <a href="/">LinkedIn</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="hidden lg:flex items-center gap-8">
          <button class="text-neutral-0 ubuntu font-semibold">Login</button>
          <ButtonComponent variant="primary" text="Sign Up" />
        </div>
      </nav>

      <!-- Menu Mobile -->
      <div
        v-if="isMobileMenuOpen"
        data-test="mobile-menu"
        class="absolute top-30 left-3 right-2 w-full max-w-[94%] bg-neutral-0 text-neutral-800 py-6 px-5 flex flex-col items-center gap-6 text-center rounded-md shadow-md lg:hidden transition-all duration-300"
      >
        <ul class="flex flex-col gap-6 w-full mt-10">
          <!-- Product -->
          <li>
            <button
              @click="isProductOpen = !isProductOpen"
              class="flex justify-center gap-3 pb-2 items-center w-full font-semibold"
            >
              Product
              <img
                :class="{ 'rotate-180': isProductOpen }"
                src="../../assets/images/icon-arrow-dark.svg"
                alt=""
              />
            </button>
            <ul v-if="isProductOpen" class="mt-3 flex flex-col gap-3 bg-neutral-100 p-4 rounded-md">
              <li><a href="/" class="text-blue-700 hover:underline">Overview</a></li>
              <li><a href="/" class="text-blue-700 hover:underline">Pricing</a></li>
              <li><a href="/" class="text-blue-700 hover:underline">Marketplace</a></li>
              <li><a href="/" class="text-blue-700 hover:underline">Features</a></li>
              <li><a href="/" class="text-blue-700 hover:underline">Integrations</a></li>
            </ul>
          </li>

          <!-- Company -->
          <li>
            <button
              @click="isCompanyOpen = !isCompanyOpen"
              class="flex justify-center gap-3 pb-2 items-center w-full font-semibold"
            >
              Company
              <img
                :class="{ 'rotate-180': isCompanyOpen }"
                src="../../assets/images/icon-arrow-dark.svg"
                alt=""
              />
            </button>
            <ul v-if="isCompanyOpen" class="mt-3 flex flex-col gap-3 bg-neutral-100 p-4 rounded-md">
              <li><a href="/" class="text-blue-700 hover:underline">About</a></li>
              <li><a href="/" class="text-blue-700 hover:underline">Team</a></li>
              <li><a href="/" class="text-blue-700 hover:underline">Blog</a></li>
              <li><a href="/" class="text-blue-700 hover:underline">Careers</a></li>
            </ul>
          </li>

          <!-- Connect -->
          <li>
            <button
              @click="isConnectOpen = !isConnectOpen"
              class="flex justify-center gap-3 pb-2 items-center w-full font-semibold"
            >
              Connect
              <img
                :class="{ 'rotate-180': isConnectOpen }"
                src="../../assets/images/icon-arrow-dark.svg"
                alt=""
              />
            </button>
            <ul v-if="isConnectOpen" class="mt-3 flex flex-col gap-3 bg-neutral-100 p-4 rounded-md">
              <li><a href="/" class="text-blue-700 hover:underline">Contact</a></li>
              <li><a href="/" class="text-blue-700 hover:underline">Newsletter</a></li>
              <li><a href="/" class="text-blue-700 hover:underline">LinkedIn</a></li>
            </ul>
          </li>
        </ul>

        <div class="w-full h-[0.0625rem] bg-neutral-200 my-4"></div>

        <div class="flex flex-col gap-4 w-full items-center">
          <button class="text-blue-700 ubuntu font-semibold">Login</button>
          <ButtonComponent variant="primary" text="Sign Up" />
        </div>
      </div>

      <div class="flex items-center flex-col justify-center gap-10 text-center pt-[7.3125rem]">
        <div class="flex flex-col gap-1 overpass text-neutral-0">
          <h1 class="text-preset-1">A modern publishing platform</h1>
          <p class="lg:text-xl text-lg tracking-[-0.0063rem] pr-1.5">
            Grow your audience and build your online brand
          </p>
        </div>

        <div class="flex gap-4 items-center pr-2 pt-1">
          <ButtonComponent variant="primary" text="Start for Free" />
          <ButtonComponent variant="secondary" text="Learn More" />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="css" scoped>
.button-font {
  font-weight: 700;
}
header::after {
  content: '';
  position: absolute;
  /*  inset: 0; */
  z-index: -1;
  width: 195.0625rem;
  height: 195.4375rem;
  background-image: url('../../assets/images/bg-pattern-intro-desktop.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 26.5rem -82.5rem;
}
</style>
