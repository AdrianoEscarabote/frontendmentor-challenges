import { Meta, StoryObj } from "@storybook/react";
import CartList from ".";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default {
  title: "components/CartList",
  component: CartList,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return <Provider store={store}>{Story()}</Provider>;
    },
  ],
} as Meta;

export const Primary: StoryObj = {};
