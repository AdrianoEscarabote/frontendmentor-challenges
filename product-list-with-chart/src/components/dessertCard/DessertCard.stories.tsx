import { Meta, StoryObj } from "@storybook/react";
import DessertCard from ".";
import store from "@/redux/store";
import { Provider } from "react-redux";
import { DessertCardProps } from "./DessertCardProps";

export default {
  title: "components/DessertCard",
  component: DessertCard,
  tags: ["autodocs"],
  args: {
    image: {
      thumbnail: "/images/image-meringue-thumbnail.jpg",
      mobile: "/images/image-meringue-mobile.jpg",
      tablet: "/images/image-meringue-tablet.jpg",
      desktop: "/images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
    quantity: 2,
  },
  decorators: [
    (Story) => {
      return <Provider store={store}>{Story()}</Provider>;
    },
  ],
} as Meta<DessertCardProps>;

/** Card to display desserts */
export const Primary: StoryObj = {};
