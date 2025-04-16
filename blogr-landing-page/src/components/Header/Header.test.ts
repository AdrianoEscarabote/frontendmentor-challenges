import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import HeaderComponent from './HeaderComponent.vue'

describe('HeaderComponent', () => {
  let wrapper: ReturnType<typeof mount>

  beforeEach(() => {
    wrapper = mount(HeaderComponent)
  })

  it('renders the header properly', () => {
    expect(wrapper.find('header').exists()).toBe(true)
    expect(wrapper.text()).toContain('A modern publishing platform')
  })

  it('toggles mobile menu on hamburger click', async () => {
    const toggleButton = wrapper.find('button > img[alt="Toggle menu"]')
    expect(wrapper.find('[data-test="mobile-menu"]').exists()).toBe(false)

    await toggleButton.trigger('click')
    expect(wrapper.find('[data-test="mobile-menu"]').exists()).toBe(true)

    await toggleButton.trigger('click')
    expect(wrapper.find('[data-test="mobile-menu"]').exists()).toBe(false)
  })
})
