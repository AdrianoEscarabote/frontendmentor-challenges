import { Meta, StoryObj } from "@storybook/react";
import ProductDetails from ".";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default {
  title: "ProductDetails",
  component: ProductDetails,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return <Provider store={store}>{Story()}</Provider>;
    },
  ],
} as Meta;

export const Primary: StoryObj = {};
