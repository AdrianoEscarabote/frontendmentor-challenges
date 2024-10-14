import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import AppMain from '../AppMain.vue'

describe('App Main', () => {
  it('renders correctly', () => {
    const wrapper = mount(AppMain)
    expect(wrapper.exists()).toBe(true)
  })
})
