import { Meta, StoryObj } from "@storybook/react";
import Header from ".";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default {
  title: "header",
  component: Header,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return <Provider store={store}>{Story()}</Provider>;
    },
  ],
} as Meta;

export const Primary: StoryObj = {};
