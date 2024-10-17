<script setup lang="ts">
import TogglePrice from './components/TogglePrice.vue'
import PriceCard from './components/PriceCard.vue'
</script>

<template>
  <div
    class="wrapper z-10 min-h-screen relative w-full max-w-[90rem] lg:pt-[4.1875rem] pt-8 lg:px-[10.3125rem] px-5 mx-auto my-0"
  >
    <h1 class="sr-only">Welcome to Pricing component with toggle</h1>
    <main class="z-50 w-full flex items-center flex-col justify-center gap-6">
      <h2 class="heading text-neutral-grayish-blue lg:mb-[0.6875rem]">
        Our Pricing
      </h2>
      <TogglePrice />
      <ul
        class="flex lg:flex-row flex-col w-full lg:mt-[2.5rem] justify-center"
      >
        <PriceCard
          planName="Basic"
          monthlyPrice="19.99"
          yearlyPrice="199.99"
          storage="500 GB Storage"
          :usersAllowed="2"
          sendLimit="3 GB"
          :primary="false"
        />
        <PriceCard
          planName="Professional"
          monthlyPrice="24.99"
          yearlyPrice="249.99"
          storage="1 TB Storage"
          :usersAllowed="5"
          sendLimit="10 GB"
          :primary="true"
        />
        <PriceCard
          planName="Master"
          monthlyPrice="39.99"
          yearlyPrice="399.99"
          storage="2 TB Storage"
          :usersAllowed="10"
          sendLimit="20 GB"
          :primary="false"
        />
      </ul>
    </main>
  </div>
</template>

<style lang="css" scoped>
@media (max-width: 64rem) {
  ul {
    align-items: center;
  }
}
.wrapper::after,
.wrapper::before {
  content: '';
  position: absolute;
  z-index: -1 !important;
  background-size: 100% !important;
}
.wrapper::after {
  background: url('/images/bg-bottom.svg') no-repeat;
  bottom: 0rem;
  left: 0rem;
  width: 22.0625rem;
  height: 19rem;
}
.wrapper::before {
  top: 0rem;
  right: 0rem;
  background: url('/images/bg-top.svg') no-repeat;
  width: 23.4375rem;
  height: 41.125rem;
}
</style>
