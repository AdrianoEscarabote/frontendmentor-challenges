import { Meta, StoryObj } from "@storybook/react";
import PrimaryButton from ".";
import { PrimaryButtonProps } from "./PrimaryButtonProps";

export default {
  title: "components/PrimaryButton",
  component: PrimaryButton,
  tags: ["autodocs"],
  args: {
    label: "Start New Order",
    onClick: () => {},
    "aria-label": "new order button",
  },
} as Meta<PrimaryButtonProps>;

export const Primary: StoryObj = {};
