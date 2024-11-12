import { Meta, StoryObj } from "@storybook/react"
import Calculator from "."
import { Provider } from "react-redux"
import store from "../../../redux/store"

export default {
  title: "components/Calculator",
  component: Calculator,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return <Provider store={store}>{Story()}</Provider>
    },
  ],
} as Meta

export const Primary: StoryObj = {}
