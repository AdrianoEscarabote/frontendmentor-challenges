import { Meta, StoryObj } from "@storybook/react";
import Desserts from ".";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default {
  title: "components/Desserts",
  component: Desserts,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return <Provider store={store}>{Story()}</Provider>;
    },
  ],
} as Meta;

export const Primary: StoryObj = {};
