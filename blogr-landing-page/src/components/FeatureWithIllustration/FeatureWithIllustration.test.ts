import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FeatureWithIllustration from '../FeatureWithIllustration/FeatureWithIllustration.vue'

describe('FeatureWithIllustration.vue', () => {
  it('renders the component successfully', () => {
    const wrapper = mount(FeatureWithIllustration)
    expect(wrapper.exists()).toBe(true)
  })

  it('contains a <picture> tag with an <img>', () => {
    const wrapper = mount(FeatureWithIllustration)

    const picture = wrapper.find('picture')
    const img = picture.find('img')

    expect(picture.exists()).toBe(true)
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toContain('illustration-laptop-desktop.svg')
  })

  it('renders two TextBlock components with correct props', () => {
    const wrapper = mount(FeatureWithIllustration)

    const textBlocks = wrapper.findAllComponents({ name: 'TextBlock' })
    expect(textBlocks.length).toBe(2)

    expect(textBlocks[0].props('title')).toBe('Free, open, simple')
    expect(textBlocks[1].props('title')).toBe('Powerful tooling')
  })
})
