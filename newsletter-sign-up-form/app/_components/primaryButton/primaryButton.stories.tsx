import { Meta, StoryObj } from "@storybook/react"
import { PrimaryButtonProps } from "./primaryButtonProps"
import PrimaryButton from "."

export default {
  title: "components/PrimaryButton",
  component: PrimaryButton,
  tags: ["autodocs"],
  args: {
    text: "Subscribe to monthly newsletter",
  },
} as Meta<PrimaryButtonProps>

export const Primary: StoryObj = {}
