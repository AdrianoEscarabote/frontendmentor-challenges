<script lang="ts">
import { usePlanStore } from '@/stores/usePlanStore'
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const planStore = usePlanStore()
    const { isMonthly } = storeToRefs(planStore)
    const togglePlan = planStore.togglePlan

    return {
      isMonthly,
      togglePlan,
    }
  },
}
</script>

<template>
  <div
    class="container flex items-center justify-center gap-[0.125rem] text-neutral-light-grayish-blue w-full max-w-[16.25rem]"
  >
    <span class="pr-5 font-bold">Annually</span>
    <input
      class="input"
      type="checkbox"
      :checked="isMonthly"
      @change="togglePlan"
      id="switch"
    />
    <label class="label" for="switch">Toggle</label>
    <span class="pl-5 font-bold">Monthly</span>
  </div>
</template>

<style lang="css" scoped>
.input {
  height: 0;
  width: 0;
  visibility: hidden;
}

.label {
  cursor: pointer;
  text-indent: -624.9375rem;
  width: 3.5rem;
  height: 2rem;
  background-image: linear-gradient(135.06deg, #a2a7f0 -0.05%, #696edd 100.05%);
  display: block;
  border-radius: 6.25rem;
  position: relative;
}

.label:after {
  content: '';
  position: absolute;
  top: 0.3125rem;
  left: 0.375rem;
  width: 1.375rem;
  height: 1.375rem;
  background: #fff;
  border-radius: 5.625rem;
  transition: 0.3s;
}

.input:checked + .label:after {
  left: calc(100% - 0.3125rem);
  transform: translateX(-100%);
}

.label:active:after {
  width: 2rem;
}
</style>
