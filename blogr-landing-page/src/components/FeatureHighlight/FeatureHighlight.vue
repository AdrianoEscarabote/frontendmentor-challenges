<script setup lang="ts">
import TextBlock from '../TextBlock/TextBlock.vue'
</script>

<template>
  <section class="relative flex justify-center overflow-hidden lg:pt-[141px] lg:py-0 py-10">
    <div class="max-w-[1440px] w-full lg:px-[165px] px-5">
      <h2 class="text-preset-2 overpass text-blue-700 text-center pb-10 pt-1.5">
        Designed for the future
      </h2>

      <div class="flex lg:flex-row flex-col-reverse lg:pt-[60px] pt-6 lg:gap-0 gap-10">
        <div
          class="flex flex-col gap-20 lg:justify-normal justify-center lg:items-start items-center"
        >
          <TextBlock
            title="Introducing an extensible editor"
            description="Blogr features an exceedingly intuitive interface which lets you focus on one thing:
              creating content. The editor supports management of multiple blogs and allows easy
              manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins
              and themes provide easy ways to add functionality or change the looks of a blog."
          />
          <TextBlock
            title="Robust content management"
            description="Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control."
          />
        </div>
        <div
          class="md:overflow-x-visible lg:w-[120px] lg:h-[699px] lg:block flex items-center justify-center"
        >
          <picture>
            <source
              media="(max-width: 1024px)"
              srcset="../../assets/images/illustration-editor-mobile.svg"
            />
            <img
              class="lg:absolute lg:max-w-none max-w-[480px] lg:w-[920px] w-full lg:h-[881px] lg:-right-[271px] lg:top-[72px]"
              src="../../assets/images/illustration-editor-desktop.svg"
              alt="Illustration editor"
            />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>
