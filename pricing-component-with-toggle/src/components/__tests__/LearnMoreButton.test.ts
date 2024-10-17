import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LearnMoreButton from '@/components/LearnMoreButton.vue'

describe('LearnMoreButton.vue', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(LearnMoreButton)

    expect(wrapper.text()).toContain('learn more')

    expect(wrapper.classes()).toContain('primary')
    expect(wrapper.classes()).toContain('text-neutral-white')
  })

  it('applies correct classes when primary is true', () => {
    const wrapper = mount(LearnMoreButton, {
      props: {
        primary: true,
      },
    })

    expect(wrapper.classes()).toContain('bg-neutral-white')
    expect(wrapper.classes()).toContain('text-primary-purple')
  })

  it('has the correct href attribute', () => {
    const wrapper = mount(LearnMoreButton)

    const anchorTag = wrapper.find('a')
    expect(anchorTag.attributes('href')).toBe('/')
  })

  it('applies hover styles on hover', async () => {
    const wrapper = mount(LearnMoreButton, {
      props: {
        primary: true,
      },
    })

    await wrapper.trigger('mouseover')

    expect(wrapper.classes()).toContain('hover:text-neutral-white')
  })
})
