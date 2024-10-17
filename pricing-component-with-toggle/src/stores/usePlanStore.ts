import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePlanStore = defineStore('planStore', () => {
  const isMonthly = ref(true)

  function togglePlan() {
    isMonthly.value = !isMonthly.value
  }

  return { isMonthly, togglePlan }
})
