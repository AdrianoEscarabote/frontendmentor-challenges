<script setup lang="ts">
import IconInstagram from './icons/IconInstagram.vue'
import IconFacebook from './icons/IconFacebook.vue'
import IconPinterest from './icons/IconPinterest.vue'
import IconTwitter from './icons/IconTwitter.vue'
</script>

<template>
  <footer class="bg-neutral-very-light-gray">
    <div
      class="relative z-30 container_footer max-w-[90rem] lg:px-[10.3125rem] px-5 my-0 mx-auto bg-neutral-very-light-gray"
    >
      <div
        class="flex lg:flex-row flex-col lg:gap-0 gap-8 justify-between items-center pt-[3.875rem] pb-[2.125rem]"
      >
        <img src="/images/logo.svg" alt="logo" />

        <ul class="flex gap-4">
          <li>
            <a href="/">
              <IconFacebook />
            </a>
          </li>
          <li>
            <a href="">
              <IconTwitter />
            </a>
          </li>
          <li>
            <a href="">
              <IconPinterest />
            </a>
          </li>
          <li>
            <a href="">
              <IconInstagram />
            </a>
          </li>
        </ul>
      </div>
      <div class="h-[0.0625rem] w-full bg-[#dadada]"></div>
      <div
        class="flex lg:flex-row flex-col lg:items-start items-center lg:text-start text-center lg:gap-40 gap-14 pt-[2.875rem] pb-10 uppercase bodySm"
      >
        <div>
          <p class="pb-4 text-neutral-dark-grayish-violet bodySm">
            Our company
          </p>
          <ul class="flex flex-col gap-4 mt-5 text-neutral-very-dark-violet">
            <li>
              <a
                href=""
                class="text-neutral-very-dark-violet bodySm hover:underline"
                >How we work</a
              >
            </li>
            <li>
              <a
                href=""
                class="text-neutral-very-dark-violet bodySm hover:underline"
                >Why Insure?</a
              >
            </li>
            <li>
              <a
                href=""
                class="text-neutral-very-dark-violet bodySm hover:underline"
                >View plans</a
              >
            </li>
            <li>
              <a
                href=""
                class="text-neutral-very-dark-violet bodySm hover:underline"
                >Reviews</a
              >
            </li>
          </ul>
        </div>

        <div class="lg:pl-[0.8125rem]">
          <p class="pb-4 text-neutral-dark-grayish-violet bodySm">Help me</p>
          <ul
            class="flex flex-col gap-4 mt-5 text-neutral-very-dark-violet bodySm"
          >
            <li>
              <a
                href=""
                class="text-neutral-very-dark-violet bodySm hover:underline"
                >FAQ</a
              >
            </li>
            <li>
              <a
                href=""
                class="text-neutral-very-dark-violet bodySm hover:underline"
                >Terms of use</a
              >
            </li>
            <li>
              <a
                href=""
                class="text-neutral-very-dark-violet bodySm hover:underline"
                >Privacy policy</a
              >
            </li>
            <li>
              <a
                href=""
                class="text-neutral-very-dark-violet bodySm hover:underline"
                >Cookies</a
              >
            </li>
          </ul>
        </div>

        <div>
          <p class="pb-4 text-neutral-dark-grayish-violet bodySm">Contact</p>
          <ul class="flex flex-col gap-4 mt-5 text-neutral-very-dark-violet">
            <li>
              <a
                href=""
                class="text-neutral-very-dark-violet bodySm hover:underline"
                >Sales</a
              >
            </li>
            <li>
              <a
                href=""
                class="text-neutral-very-dark-violet bodySm hover:underline"
                >Support</a
              >
            </li>
            <li>
              <a
                href=""
                class="text-neutral-very-dark-violet bodySm hover:underline"
                >Live chat</a
              >
            </li>
          </ul>
        </div>

        <div class="lg:pl-[3rem]">
          <p class="pb-4 text-neutral-dark-grayish-violet bodySm">Others</p>
          <ul class="flex flex-col gap-4 mt-5 text-neutral-very-dark-violet">
            <li>
              <a
                href=""
                class="text-neutral-very-dark-violet bodySm hover:underline"
                >Careers</a
              >
            </li>
            <li>
              <a
                href=""
                class="text-neutral-very-dark-violet bodySm hover:underline"
                >Press</a
              >
            </li>
            <li>
              <a
                href=""
                class="text-neutral-very-dark-violet bodySm hover:underline"
                >Licenses</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="css" scoped>
.container_footer::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  background: url('/images/bg-pattern-footer-desktop.svg') no-repeat;
  width: 33rem;
  height: 14.4375rem;
  z-index: -1;
}
@media (max-width: 64rem) {
  .container_footer::after {
    background: url('/images/bg-pattern-footer-mobile.svg') no-repeat;
    background-size: 100% 11.875rem;
    width: 100% !important;
  }
}
</style>
