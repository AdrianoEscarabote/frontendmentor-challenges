import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import ButtonForm from '../ButtonForm.vue'

describe('ButtonForm', () => {
  it('renders properly', () => {
    const wrapper = mount(ButtonForm, {
      props: {
        text: 'Submit',
        onClickFn() {
          return {}
        }
      }
    })
    expect(wrapper.text()).toContain('Submit')
  })

  it('calls onClickFn when button is clicked', async () => {
    const fn = vi.fn()
    const wrapper = mount(ButtonForm, {
      props: {
        text: 'Submit',
        onClickFn: fn
      }
    })
    await wrapper.find('button').trigger('click')
    expect(fn).toHaveBeenCalled()
  })

  it('has the correct classes applied', () => {
    const wrapper = mount(ButtonForm, {
      props: {
        text: 'Submit',
        onClickFn: function () {
          return {}
        }
      }
    })
    const button = wrapper.find('button')
    expect(button.classes()).toContain('w-full')
    expect(button.classes()).toContain('transition-all')
    expect(button.classes()).toContain('h-[3.625rem]')
    expect(button.classes()).toContain('bg-primary-green')
    expect(button.classes()).toContain('text-neutral-white')
    expect(button.classes()).toContain('rounded-md')
    expect(button.classes()).toContain('bodyM')
    expect(button.classes()).toContain('hover:bg-[#063d33]')
  })
})
