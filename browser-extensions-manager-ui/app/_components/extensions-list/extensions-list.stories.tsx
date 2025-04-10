import { Meta, StoryObj } from "@storybook/react"
import { Provider } from "react-redux"

import store from "@/redux/store"

import ExtensionsList from "."

export default {
  title: "components/ExtensionsList",
  component: ExtensionsList,
  decorators: [
    (Story) => {
      return <Provider store={store}>{Story()}</Provider>
    },
  ],
} as Meta

export const Primary: StoryObj = {}
