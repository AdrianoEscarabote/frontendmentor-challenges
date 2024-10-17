import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import PriceCard from '../PriceCard.vue'
import { usePlanStore } from '@/stores/usePlanStore'
import { setActivePinia, createPinia } from 'pinia'

describe('PriceCard.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  const defaultProps = {
    planName: 'Basic Plan',
    monthlyPrice: '19.99',
    yearlyPrice: '199.99',
    storage: '1TB',
    usersAllowed: 5,
    sendLimit: '10GB',
    primary: false,
  }

  it('renders correctly with default props', () => {
    const wrapper = mount(PriceCard, {
      props: defaultProps,
    })

    expect(wrapper.find('h2').text()).toBe('Basic Plan')
    expect(wrapper.find('.price span:nth-child(2)').text()).toBe('19.99')
    const firstListItem = wrapper.findAll('li').at(0)
    expect(firstListItem ? firstListItem.text() : '').toContain('1TB')
    const secondListItem = wrapper.findAll('li').at(1)
    expect(secondListItem ? secondListItem.text() : '').toContain('1TB')
    const thirdListItem = wrapper.findAll('li').at(2)
    expect(thirdListItem ? thirdListItem.text() : '').toContain(
      '5 Users Allowed',
    )
  })

  it('shows monthly price when isMonthly is true', () => {
    const planStore = usePlanStore()
    planStore.isMonthly = true

    const wrapper = mount(PriceCard, {
      props: defaultProps,
    })

    expect(wrapper.find('.price span:nth-child(2)').text()).toBe('19.99')
  })

  it('applies primary styles when primary is true', () => {
    const wrapper = mount(PriceCard, {
      props: {
        ...defaultProps,
        primary: true,
      },
    })

    expect(wrapper.classes()).toContain('bg-gradient-custom')

    expect(wrapper.find('h2').classes()).toContain('text-neutral-white')
    expect(wrapper.find('.price').classes()).toContain('text-neutral-white')
  })

  it('applies secondary styles when primary is false', () => {
    const wrapper = mount(PriceCard, {
      props: defaultProps,
    })

    expect(wrapper.classes()).toContain('bg-neutral-white')

    expect(wrapper.find('h2').classes()).toContain('text-neutral-grayish-blue')
    expect(wrapper.find('.price').classes()).toContain(
      'text-neutral-dark-grayish-blue',
    )
  })

  it('renders LearnMoreButton component', () => {
    const wrapper = mount(PriceCard, {
      props: defaultProps,
    })

    const button = wrapper.findComponent({ name: 'LearnMoreButton' })
    expect(button.exists()).toBe(true)
  })
})
