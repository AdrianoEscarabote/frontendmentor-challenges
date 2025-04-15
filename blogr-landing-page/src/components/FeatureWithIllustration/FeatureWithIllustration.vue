<script setup lang="ts">
import TextBlock from '../TextBlock/TextBlock.vue'
</script>

<template>
  <section class="relative overflow-hidden flex justify-center">
    <div class="max-w-[1440px] w-full lg:px-[165px] px-5 lg:pt-28 lg:py-0 py-14">
      <div class="flex lg:pt-36 pb-0 lg:flex-row flex-col lg:items-start items-center">
        <div class="overflow-visible lg:w-[570px] lg:h-[769px]">
          <picture>
            <source
              media="(max-width: 1024px)"
              srcset="../../assets/images/illustration-laptop-mobile.svg"
            />
            <img
              src="../../assets/images/illustration-laptop-desktop.svg"
              class="lg:absolute lg:w-[972px] lg:top-[114px] lg:h-[790px] lg:-left-[278px] w-full lg:max-w-none max-w-[480px]"
              alt=""
            />
          </picture>
        </div>
        <div class="flex flex-col gap-20 pt-[52px]">
          <TextBlock
            title="Free, open, simple"
            description="Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."
          />

          <TextBlock
            title="Powerful tooling"
            description="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites."
          />
        </div>
      </div>
    </div>
  </section>
</template>
