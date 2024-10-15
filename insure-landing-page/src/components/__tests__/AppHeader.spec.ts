import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Header from '../AppHeader.vue'

describe('Header', () => {
  it('renders correctly', () => {
    const wrapper = mount(Header)
    expect(wrapper.exists()).toBe(true)
  })

  it('applies overflow-hidden class to body when menu is open', async () => {
    const wrapper = mount(Header)

    const toggleButton = wrapper.find('button[aria-label="Toggle mobile menu"]')

    await toggleButton.trigger('click')
    expect(document.body.classList.contains('overflow-hidden')).toBe(true)

    await toggleButton.trigger('click')
    expect(document.body.classList.contains('overflow-hidden')).toBe(false)
  })

  it('displays the correct icons depending on menu state', async () => {
    const wrapper = mount(Header)

    let hamburgerIcon = wrapper.find('img[alt="mobile menu icon"]')
    let closeIcon = wrapper.find('img[alt="close mobile menu icon"]')

    expect(hamburgerIcon.exists()).toBe(true)
    expect(closeIcon.exists()).toBe(false)

    const toggleButton = wrapper.find('button[aria-label="Toggle mobile menu"]')
    await toggleButton.trigger('click')

    hamburgerIcon = wrapper.find('img[alt="mobile menu icon"]')
    closeIcon = wrapper.find('img[alt="close mobile menu icon"]')

    expect(hamburgerIcon.exists()).toBe(false)
    expect(closeIcon.exists()).toBe(true)
  })

  it('renders navigation links correctly in desktop view', () => {
    const wrapper = mount(Header)
    const links = wrapper.findAll('nav ul li a')

    expect(links.length).toBe(3)
    expect(links[0].text()).toBe('how we work')
    expect(links[1].text()).toBe('blog')
    expect(links[2].text()).toBe('account')
  })
})
