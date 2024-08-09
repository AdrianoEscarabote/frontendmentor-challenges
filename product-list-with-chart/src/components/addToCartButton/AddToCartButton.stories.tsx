import { Meta, StoryObj } from "@storybook/react";
import AddToCartButton from ".";
import { AddToCartButtonProps } from "./AddToCartButtonProps";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default {
  title: "components/AddToCartButton",
  component: AddToCartButton,
  tags: ["autodocs"],
  args: {
    name: "oi",
    handleIncreaseQuantityFn: () => {},
    handleDecreaseQuantityFn: () => {},
    onClick: () => {},
  },
  decorators: (Story) => {
    return <Provider store={store}>{Story()}</Provider>;
  },
} as Meta<AddToCartButtonProps>;

/** Button used to add products to the cart, after the first click on the button the user will be able to see two more buttons to manage the quantity. */
export const Primary: StoryObj = {};
