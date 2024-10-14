<template>
  <article class="lg:mt-[9.875rem] lg:mb-[9.5rem] my-20 lg:p-0 px-5">
    <div
      class="howWeWork_container relative overflow-hidden max-w-[69.375rem] lg:px-[4.9375rem] px-5 mx-auto my-0 bg-primary-dark-violet text-neutral-white"
    >
      <div
        class="flex lg:flex-row flex-col lg:p-0 lg:justify-between justify-evenly lg:text-start text-center w-full items-center h-[15.625rem]"
      >
        <h3 class="headingMd font-serif max-w-[30rem]">
          Find out more about how we work
        </h3>
        <button
          class="uppercase border border-1 px-[1.625rem] h-[2.5rem] bodySm font-semibold z-10 hover:text-primary-dark-violet hover:bg-neutral-white"
          aria-label="Learn more about how we work"
        >
          how we work
        </button>
      </div>
    </div>
  </article>
</template>

<style lang="css" scoped>
.howWeWork_container::after {
  content: '';
  position: absolute;
  top: 0rem;
  right: 0rem;
  width: 27.125rem;
  height: 15.625rem;
  background: url('/images/bg-pattern-how-we-work-desktop.svg') no-repeat;
}
@media (max-width: 64rem) {
  .howWeWork_container::after {
    background: url('/images/bg-pattern-how-we-work-mobile.svg') no-repeat;
    right: 0rem !important;
    width: 11rem;
  }
}
</style>
