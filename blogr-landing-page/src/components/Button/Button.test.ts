import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ButtonComponent from '../Button/ButtonComponent.vue'

describe('ButtonComponent', () => {
  it('renders the correct text', () => {
    const wrapper = mount(ButtonComponent, {
      props: {
        text: 'Click Me',
        variant: 'primary',
      },
    })

    expect(wrapper.text()).toContain('Click Me')
  })

  it('applies primary class when variant is primary', () => {
    const wrapper = mount(ButtonComponent, {
      props: {
        text: 'Test',
        variant: 'primary',
      },
    })

    expect(wrapper.classes()).toContain('bg-neutral-0')
  })

  it('applies secondary class when variant is secondary', () => {
    const wrapper = mount(ButtonComponent, {
      props: {
        text: 'Test',
        variant: 'secondary',
      },
    })

    expect(wrapper.classes()).toContain('border')
  })
})
