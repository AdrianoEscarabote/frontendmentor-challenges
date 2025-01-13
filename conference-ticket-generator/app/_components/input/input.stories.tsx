import { Meta, StoryObj } from "@storybook/react";
import Input from ".";
import { InputProps } from "./inputProps";

export default {
  title: "Input",
  component: Input,
  args: {
    label: "Full Name",
    id: "name",
  },
} as Meta<InputProps>;

// Input Text
export const InputText: StoryObj = {
  args: {
    label: "Full Name",
    id: "name",
  },
};

// Input Email
export const InputEmail: StoryObj = {
  args: {
    label: "Email Address",
    id: "email",
  },
};
