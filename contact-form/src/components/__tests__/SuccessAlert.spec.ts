import { mount } from "@vue/test-utils"
import { describe, expect, it } from "vitest"
import SuccessAlert from "../SuccessAlert.vue"

describe('SuccessAlert', () => {
  it("renders properly", () => {
    const wrapper = mount(SuccessAlert)
    expect(wrapper.text()).toContain(`Thanks for completing the form. We'll be in touch soon!`)
  })
})