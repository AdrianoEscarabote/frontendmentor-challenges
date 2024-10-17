<template>
  <li
    :class="[
      'list-none card w-full max-w-[21.875rem] px-8 rounded-lg text-center',
      primary
        ? 'bg-gradient-custom rounded-[0.6875rem] pt-[3.375rem] lg:pb-0 pb-8 lg:max-h-[31.25rem]'
        : 'bg-neutral-white secondary py-[1.875rem] shadow-[0rem_1.25rem_2.5rem_rgba(212,210,244,0.5)]',
    ]"
  >
    <h2
      :class="[
        'font-bold text-lg mb-[1.5313rem]',
        primary ? 'text-neutral-white' : 'text-neutral-grayish-blue',
      ]"
    >
      {{ planName }}
    </h2>
    <p
      :class="[
        'price mb-4 flex flex-row justify-center w-full',
        primary ? 'text-neutral-white' : 'text-neutral-dark-grayish-blue',
      ]"
    >
      <span class="text-[2.5rem] self-center font-bold pr-[0.3125rem]">$</span>

      <span class="font-bold pl-1">{{
        !isMonthly ? yearlyPrice : monthlyPrice
      }}</span>
    </p>
    <ul
      :class="[
        'text-sm mt-[1.875rem] mb-[2rem] space-y-2 border-t border-b',
        primary
          ? 'border-neutral-primary-border-color text-neutral-white pb-[0.125rem]'
          : 'border-neutral-secondary-border-color text-neutral-grayish-blue',
      ]"
    >
      <li
        :class="[
          'border-b',
          primary
            ? 'border-neutral-primary-border-color pt-[0.9375rem] pb-[0.8125rem]'
            : 'border-neutral-secondary-border-color pt-4 pb-[0.8125rem]',
        ]"
      >
        <span class="text-base font-semibold">
          {{ storage }}
        </span>
      </li>
      <li
        :class="[
          'border-b',
          primary
            ? 'border-neutral-primary-border-color pt-[0.4375rem] pb-[0.8125rem]'
            : 'border-neutral-secondary-border-color pt-[0.4375rem] pb-[0.8125rem]',
        ]"
      >
        <span class="text-base font-semibold">
          {{ usersAllowed }} Users Allowed
        </span>
      </li>
      <li class="pt-[0.5rem] pb-[1rem]">
        <span class="text-[0.9375rem] font-semibold">
          Send up to {{ sendLimit }}
        </span>
      </li>
    </ul>
    <LearnMoreButton :primary="primary" />
  </li>
</template>

<style lang="css" scoped>
.secondary {
  margin-top: 1.5625rem;
  margin-bottom: 3.125rem;
}
</style>

<script setup lang="ts">
import { usePlanStore } from '@/stores/usePlanStore'
import { storeToRefs } from 'pinia'
import LearnMoreButton from './LearnMoreButton.vue'

const planStore = usePlanStore()
const { isMonthly } = storeToRefs(planStore)

defineProps({
  planName: {
    type: String,
    required: true,
  },
  monthlyPrice: {
    type: String,
    required: true,
  },
  yearlyPrice: {
    type: String,
    required: true,
  },
  storage: {
    type: String,
    required: true,
  },
  usersAllowed: {
    type: Number,
    required: true,
  },
  sendLimit: {
    type: String,
    required: true,
  },
  primary: {
    type: Boolean,
    default: false,
  },
})
</script>
