import { Meta, StoryObj } from "@storybook/react"
import { Provider } from "react-redux"

import store from "@/redux/store"

import Card from "."
import { CardProps } from "./cardProps"

export default {
  title: "components/Card",
  component: Card,
  args: {
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    image: "/images/logo-devlens.svg",
    title: "DevLens",
    isActive: true,
  },
  decorators: [
    (Story) => {
      return <Provider store={store}>{Story()}</Provider>
    },
  ],
} as Meta<CardProps>

export const Default: StoryObj = {}
