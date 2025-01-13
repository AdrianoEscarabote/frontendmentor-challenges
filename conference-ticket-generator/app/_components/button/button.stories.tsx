import { Meta, StoryObj } from "@storybook/react";
import Button from ".";
import { ButtonProps } from "./buttonProps";

export default {
  title: "Button",
  component: Button,
  args: {
    label: "Submit",
    type: "submit",
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj = {};
