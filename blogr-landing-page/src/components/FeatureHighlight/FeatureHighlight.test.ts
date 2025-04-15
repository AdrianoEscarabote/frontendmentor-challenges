import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FeatureHighlight from './FeatureHighlight.vue'
import TextBlock from '../TextBlock/TextBlock.vue'

describe('FeatureHighlight', () => {
  it('renders the main heading', () => {
    const wrapper = mount(FeatureHighlight)
    expect(wrapper.text()).toContain('Designed for the future')
  })

  it('renders two TextBlock components', () => {
    const wrapper = mount(FeatureHighlight)
    const textBlocks = wrapper.findAllComponents(TextBlock)
    expect(textBlocks.length).toBe(2)
  })

  it('passes correct props to the first TextBlock', () => {
    const wrapper = mount(FeatureHighlight)
    const firstTextBlock = wrapper.findAllComponents(TextBlock)[0]

    expect(firstTextBlock.props('title')).toBe('Introducing an extensible editor')
    expect(firstTextBlock.props('description')).toContain(
      'Blogr features an exceedingly intuitive interface',
    )
  })

  it('renders the illustration image', () => {
    const wrapper = mount(FeatureHighlight)
    const image = wrapper.find('img')

    expect(image.exists()).toBe(true)
    expect(image.attributes('src')).toContain('illustration-editor-desktop.svg')
  })
})
