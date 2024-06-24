import { Meta, StoryObj } from "@storybook/react";
import FeatureCard from ".";
import { FeatureCardProps } from "./FeatureCard";

export default {
  title: "components/FeatureCard",
  component: FeatureCard,
  tags: ["autodocs"],
  args: {
    iconPath: "/images/icon-online.svg",
    text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world",
    title: "Online Banking",
  },
} as Meta<FeatureCardProps>;

export const Primary: StoryObj = {};
