import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import FeatureSection from '../FeatureSection.vue'

describe('FeatureSection Component', () => {
  it('renders correctly', () => {
    const wrapper = mount(FeatureSection)

    expect(wrapper.find('h2').text()).toBe('We’re different')

    const icons = wrapper.findAll('img')
    expect(icons.length).toBe(3)

    const sectionTitles = wrapper.findAll('h3')
    expect(sectionTitles[0].text()).toBe('Snappy Process')
    expect(sectionTitles[1].text()).toBe('Affordable Prices')
    expect(sectionTitles[2].text()).toBe('People First')

    const descriptions = wrapper.findAll('p')
    expect(descriptions[0].text()).toContain(
      'Our application process can be completed in minutes',
    )
    expect(descriptions[1].text()).toContain(
      'Our prices may be low, but we still offer the best coverage possible.',
    )
    expect(descriptions[2].text()).toContain(
      'Our plans aren’t full of conditions and clauses',
    )
  })
})
