import { mount } from '@vue/test-utils'
import HowWeWork from '@/components/HowWeWork.vue'
import { beforeEach, describe, expect, it } from 'vitest'

describe('How We Work Component', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(HowWeWork)
  })

  it('renders the article with the correct class', () => {
    expect(wrapper.classes()).toContain('my-20')
  })

  it('contains a container with the correct classes', () => {
    const container = wrapper.find('.howWeWork_container')
    expect(container.exists()).toBe(true)
    expect(container.classes()).toContain('bg-primary-dark-violet')
    expect(container.classes()).toContain('text-neutral-white')
  })

  it('renders the heading correctly', () => {
    const heading = wrapper.find('h3.headingMd')
    expect(heading.exists()).toBe(true)
    expect(heading.text()).toBe('Find out more about how we work')
  })

  it('contains a button with the correct text', () => {
    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
    expect(button.text()).toBe('how we work')
  })
})
