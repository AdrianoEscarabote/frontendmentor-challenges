import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Footer from '../AppFooter.vue'

describe('Footer Component', () => {
  it('renders correctly', () => {
    const wrapper = mount(Footer)
    expect(wrapper.exists()).toBe(true)
  })

  it('should contain all social media icons', () => {
    const wrapper = mount(Footer)
    expect(wrapper.findComponent({ name: 'IconFacebook' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'IconTwitter' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'IconPinterest' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'IconInstagram' }).exists()).toBe(true)
  })

  it('social media links must be correct', () => {
    const wrapper = mount(Footer)
    const links = wrapper.findAll('a')
    expect(links[0].attributes('href')).toBe('/')
    expect(links[1].attributes('href')).toBe('')
    expect(links[2].attributes('href')).toBe('')
    expect(links[3].attributes('href')).toBe('')
  })

  it('should render the footer sections', () => {
    const wrapper = mount(Footer)
    const sections = wrapper.findAll('ul')
    expect(sections).toHaveLength(5)
  })
})
