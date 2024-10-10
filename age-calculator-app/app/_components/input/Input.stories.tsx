import { Meta, StoryObj } from "@storybook/react"
import { InputProps } from "./InputProps"
import input from "."

export default {
  title: "components/Input",
  component: input,
  argTypes: {
    customProp: { control: "text" },
    error: { control: "boolean" },
    errorMessage: { control: "text" },
    label: { control: "text" },
    id: { control: "text" },
  },
} as Meta<InputProps>

/** Input Component */
export const Primary: StoryObj = {}
