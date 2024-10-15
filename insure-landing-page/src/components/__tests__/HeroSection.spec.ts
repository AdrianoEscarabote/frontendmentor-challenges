import { mount } from '@vue/test-utils'
import HeroSection from '../HeroSection.vue'
import { beforeEach, describe, expect, it } from 'vitest'

describe('Hero Section Component', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(HeroSection)
  })

  it('renders the section with the correct class', () => {
    expect(wrapper.classes()).toContain('text-neutral-white')
  })

  it('contains a background div with the correct classes', () => {
    const backgroundDiv = wrapper.find('.background')
    expect(backgroundDiv.exists()).toBe(true)
    expect(backgroundDiv.classes()).toContain('bg-primary-dark-violet')
    expect(backgroundDiv.classes()).toContain('absolute')
  })

  it('renders the heading correctly', () => {
    const heading = wrapper.find('h1.headingXl')
    expect(heading.exists()).toBe(true)
    expect(heading.text()).toBe('Humanizing your insurance.')
  })

  it('renders the paragraph correctly', () => {
    const paragraph = wrapper.find('p.bodyMd')
    expect(paragraph.exists()).toBe(true)
    expect(paragraph.text()).toBe(
      'Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.',
    )
  })

  it('contains a button with the correct text', () => {
    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
    expect(button.text()).toBe('view plans')
  })

  it('renders the correct images based on media queries', () => {
    const imgElement = wrapper.find('img.hero_image')
    expect(imgElement.exists()).toBe(true)
    expect(imgElement.attributes('src')).toBe('/images/image-intro-desktop.jpg')
  })
})
