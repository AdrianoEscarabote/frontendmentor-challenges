import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import TogglePrice from '../TogglePrice.vue'
import { usePlanStore } from '../../stores/usePlanStore'
import { setActivePinia, createPinia } from 'pinia'

describe('TogglePrice.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders correctly', () => {
    const plan = usePlanStore()

    const wrapper = mount(TogglePrice)
    expect(plan.isMonthly).toBe(true)

    expect(wrapper.find('span.pr-5').text()).toBe('Annually')
    expect(wrapper.find('span.pl-5').text()).toBe('Monthly')

    const input = wrapper.find('input[type="checkbox"]')
    expect(input.exists()).toBe(true)

    const label = wrapper.find('label')
    expect(label.exists()).toBe(true)
  })

  it('toggles the plan when checkbox is clicked', async () => {
    const plan = usePlanStore()

    const wrapper = mount(TogglePrice)
    const input = wrapper.find('input[type="checkbox"]')

    expect(plan.isMonthly).toBe(true)

    await input.trigger('change')
    expect(plan.isMonthly).toBe(false)

    await input.trigger('change')
    expect(plan.isMonthly).toBe(true)
  })

  it('associates the label and input correctly', () => {
    const wrapper = mount(TogglePrice)

    const input = wrapper.find('input[type="checkbox"]')
    const label = wrapper.find('label')

    expect(input.attributes('id')).toBe('switch')
    expect(label.attributes('for')).toBe('switch')
  })

  it('updates the label style when the checkbox is checked', async () => {
    const wrapper = mount(TogglePrice)
    const input = wrapper.find('input[type="checkbox"]')
    const label = wrapper.find('label')

    expect(label.classes()).not.toContain('input:checked + .label:after')

    await input.setValue(true)
    expect(input.element.checked).toBe(true)
  })

  it('calls togglePlan when the checkbox is changed', async () => {
    const plan = usePlanStore()
    const togglePlanSpy = vi.spyOn(plan, 'togglePlan')

    const wrapper = mount(TogglePrice)
    const input = wrapper.find('input[type="checkbox"]')

    await input.trigger('change')

    expect(togglePlanSpy).toHaveBeenCalledOnce()
  })
})
