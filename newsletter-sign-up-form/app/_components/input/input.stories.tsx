import { Meta, StoryObj } from "@storybook/react"
import Input from "."
import { InputProps } from "./inputProps"

export default {
  title: "components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    labelText: "name",
  },
} as Meta<InputProps>

export const Primary: StoryObj = {}
