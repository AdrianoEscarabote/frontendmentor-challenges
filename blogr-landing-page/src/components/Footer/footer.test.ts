import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Footer from './FooterComponent.vue'

describe('Footer', () => {
  it('renders the logo image', () => {
    const wrapper = mount(Footer)
    const logo = wrapper.find('img')
    expect(logo.exists()).toBe(true)
    expect(logo.attributes('src')).toContain('logo.svg')
  })

  it('renders section titles', () => {
    const wrapper = mount(Footer)

    const text = wrapper.text()
    expect(text).toContain('Product')
    expect(text).toContain('Company')
    expect(text).toContain('Connect')
  })

  it('renders correct links under Product', () => {
    const wrapper = mount(Footer)
    const productLinks = wrapper.findAll('section > div:nth-child(1) ul li a')
    const expected = ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations']

    expect(productLinks.length).toBe(expected.length)
    productLinks.forEach((link, index) => {
      expect(link.text()).toBe(expected[index])
    })
  })

  it('renders correct links under Company', () => {
    const wrapper = mount(Footer)
    const companyLinks = wrapper.findAll('section > div:nth-child(2) ul li a')
    const expected = ['About', 'Team', 'Blog', 'Careers']

    expect(companyLinks.length).toBe(expected.length)
    companyLinks.forEach((link, index) => {
      expect(link.text()).toBe(expected[index])
    })
  })

  it('renders correct links under Connect', () => {
    const wrapper = mount(Footer)
    const connectLinks = wrapper.findAll('section > div:nth-child(3) ul li a')
    const expected = ['Contact', 'Newsletter', 'LinkedIn']

    expect(connectLinks.length).toBe(expected.length)
    connectLinks.forEach((link, index) => {
      expect(link.text()).toBe(expected[index])
    })
  })

  it('renders total of 12 links', () => {
    const wrapper = mount(Footer)
    const allLinks = wrapper.findAll('a')
    expect(allLinks.length).toBe(12)
  })
})
