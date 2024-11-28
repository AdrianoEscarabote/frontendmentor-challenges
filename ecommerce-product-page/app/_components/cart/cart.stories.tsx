import { Meta, StoryObj } from "@storybook/react";
import Cart from ".";
import { CartProps } from "./cartProps";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default {
  title: "Cart",
  component: Cart,
  tags: ["autodocs"],
  args: {
    isOpen: true,
  },
  decorators: [
    (Story) => {
      return <Provider store={store}>{Story()}</Provider>;
    },
  ],
} as Meta<CartProps>;

export const Primary: StoryObj = {};
