import { Meta, StoryObj } from "@storybook/react";
import Product from ".";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default {
  title: "Product",
  component: Product,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return <Provider store={store}>{Story()}</Provider>;
    },
  ],
} as Meta;

export const Primary: StoryObj = {};
