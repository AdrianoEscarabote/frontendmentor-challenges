import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import InfrastructureSection from './InfrastructureSection.vue'

describe('InfrastructureSection.vue', () => {
  it('renders the heading correctly', () => {
    const wrapper = mount(InfrastructureSection)
    const heading = wrapper.find('h3')

    expect(heading.exists()).toBe(true)
    expect(heading.text()).toBe('State of the Art Infrastructure')
  })

  it('renders the paragraph content', () => {
    const wrapper = mount(InfrastructureSection)
    const paragraph = wrapper.find('p')

    expect(paragraph.exists()).toBe(true)
    expect(paragraph.text()).toContain('With reliability and speed in mind')
  })

  it('contains the image with correct src and alt', () => {
    const wrapper = mount(InfrastructureSection)
    const image = wrapper.find('img')

    expect(image.exists()).toBe(true)
    expect(image.attributes('src')).toBe('/src/assets/images/illustration-phones.svg')
    expect(image.attributes('alt')).toBe('')
  })

  it('applies correct background class to the wrapper', () => {
    const wrapper = mount(InfrastructureSection)
    const patternWrapper = wrapper.find('.pattern-circles')

    expect(patternWrapper.exists()).toBe(true)
    expect(patternWrapper.classes()).toContain('pattern-circles')
  })
})
