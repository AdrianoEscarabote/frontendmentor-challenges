import { Meta, StoryObj } from "@storybook/react";
import Button from ".";
import { ButtonProps } from "./ButtonProps";

export default {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
} as Meta<ButtonProps>;

export const Primary: StoryObj = {
  args: {
    label: "Add to cart",
    showIcon: true,
  },
};

export const Secondary: StoryObj = {
  args: {
    label: "Checkout",
    showIcon: false,
  },
};
