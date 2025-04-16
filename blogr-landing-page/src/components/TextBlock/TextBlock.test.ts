import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FeatureCard from './TextBlock.vue'

describe('FeatureCard.vue', () => {
  it('renders the title and description correctly', () => {
    const wrapper = mount(FeatureCard, {
      props: {
        title: 'Test Title',
        description: 'This is a test description.',
      },
    })

    expect(wrapper.text()).toContain('Test Title')
    expect(wrapper.text()).toContain('This is a test description.')
  })

  it('has the correct styling classes on the article element', () => {
    const wrapper = mount(FeatureCard, {
      props: {
        title: 'Title',
        description: 'Description',
      },
    })

    const article = wrapper.find('article')
    expect(article.classes()).toContain('max-w-[540px]')
    expect(article.classes()).toContain('overpass')
  })
})
