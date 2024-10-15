<template>
  <section class="text-neutral-white">
    <div
      class="background bg-primary-dark-violet w-full h-[37.5rem] absolute -z-20"
    ></div>
    <div
      class="hero_section relative lg:overflow-hidden max-w-[90rem] xl:px-[10.3125rem] lg:px-5 my-0 mx-auto flex lg:flex-row flex-col-reverse justify-between lg:items-start items-center lg:pt-[6.5625rem] lg:pb-[12.5rem]"
    >
      <div
        class="text_container max-w-[33.75rem] flex flex-col gap-7 lg:items-start items-center lg:text-start text-center z-10 lg:px-0 px-5 lg:pt-0 lg:pb-0 pb-24 pt-14"
      >
        <div
          class="hidden lg:block h-[0.0625rem] bg-neutral-white w-[9.375rem] mb-[2.125rem]"
        ></div>
        <h1 class="headingXl font-serif lg:max-w-[31.875rem]">
          Humanizing your insurance.
        </h1>
        <p class="bodyMd font-sans">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button
          class="mt-[0.1875rem] uppercase border border-1 px-[1.625rem] hover:text-primary-dark-violet hover:bg-neutral-white bodySm h-10"
        >
          view plans
        </button>
      </div>

      <picture>
        <source
          media="(max-width: 64rem)"
          srcset="/images/image-intro-mobile.jpg"
        />
        <img
          src="/images/image-intro-desktop.jpg"
          alt="hero image"
          class="hero_image"
        />
      </picture>
    </div>
  </section>
</template>

<style lang="css" scoped>
.hero_section::after {
  width: 31.25rem;
  height: 100%;
  content: '';
  top: -5rem;
  right: -4rem;
  position: absolute;
  background: url('/images/bg-pattern-intro-right-desktop.svg') no-repeat;
}
.hero_section::before {
  width: 100%;
  height: 100%;
  content: '';
  bottom: -26.6875rem;
  left: 0;
  position: absolute;
  background: url('/images/bg-pattern-intro-left-desktop.svg') no-repeat;
}

@media (max-width: 64rem) {
  section {
    background: #2d2641;
  }
  .hero_image {
    width: 25rem;
    height: 30.625rem;
    object-fit: cover !important;
  }
  .background {
    display: none;
  }
  .hero_section::after,
  .hero_section::before {
    display: none;
  }
  .text_container {
    position: relative;
  }
  .text_container::after {
    content: '';
    position: absolute;
    background: url('/images/bg-pattern-intro-right-mobile.svg') no-repeat;
    background-size: 100%;
    width: 7.75rem;
    height: 20.625rem;
    bottom: -10rem;
    right: 0rem;
  }
  .text_container::before {
    content: '';
    position: absolute;
    background: url('/images/bg-pattern-intro-left-mobile.svg') no-repeat;
    background-size: 100%;
    height: 10.3125rem;
    width: 10.5rem;
    top: -0rem !important;
    left: 0rem !important;
  }
}
</style>
