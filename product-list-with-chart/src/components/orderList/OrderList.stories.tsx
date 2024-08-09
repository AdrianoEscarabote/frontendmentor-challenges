import { Meta, StoryObj } from "@storybook/react";
import OrderList from ".";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { LayoutRouter } from "next/dist/server/app-render/entry-base";

export default {
  title: "components/OrderList",
  component: OrderList,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return <Provider store={store}>{Story()}</Provider>;
    },
  ],
} as Meta;

/** Order list where we can see the items in the cart */
export const Primary: StoryObj = {};
