<template>
  <section
    class="gradient-blue rounded-bl-[6.25rem] rounded-tr-[6.25rem] flex justify-center w-full h-full lg:mt-0 mt-10"
  >
    <div class="pattern-circles w-full flex justify-center">
      <div
        class="container_section relative max-w-[90rem] mx-auto w-full lg:px-[10.3125rem] flex items-center lg:justify-between justify-center lg:flex-row flex-col lg:gap-0 gap-0"
      >
        <div class="lg:w-[30rem] lg:h-[25rem]">
          <img
            alt=""
            src="../../assets/images/illustration-phones.svg"
            class="image lg:absolute relative lg:left-[7.875rem] -top-[4.3125rem] lg:w-[34.375rem] w-[20.5rem] h-[21.6875rem] lg:h-[36.375rem] lg:object-fill object-cover"
          />
        </div>
        <div
          class="container_text lg:max-w-[38.4375rem] lg:pl-[4.6875rem] w-full flex flex-col pt-1.5 lg:text-start text-center lg:pb-1 pb-16 lg:px-0 px-5"
        >
          <h3 class="text-preset-2 overpass text-neutral-0">State of the Art Infrastructure</h3>
          <p class="tracking-normal overpass text-preset-5 text-neutral-0 pt-2">
            With reliability and speed in mind, worldwide data centers provide the backbone for
            ultra-fast connectivity. This ensures your site will load instantly, no matter where
            your readers are, keeping your site competitive.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
@media (max-width: 83.75rem) {
  .image {
    left: 0rem;
  }
  .container_text {
    max-width: 32.5rem;
    padding-left: 1.25rem !important;
  }
  .container_section {
    padding: 0rem 0rem !important;
  }
}
.pattern-circles {
  overflow-x: visible;
  background-size: 63.375rem;
  background-repeat: no-repeat;
  background-position: -14rem -31.6875rem;
  background-image: url('../../assets/images/bg-pattern-circles.svg');
}
@media (max-width: 64rem) {
  .pattern-circles {
    background-image: url('');
  }
}

@media (max-width: 64rem) {
  section {
    margin-top: 6.25rem;
  }
}
</style>
