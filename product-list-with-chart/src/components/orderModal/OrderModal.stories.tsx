import { Meta, StoryObj } from "@storybook/react";
import OrderModal from ".";
import { OrderModalProps } from "./OrderModalProps";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default {
  title: "components/OrderModal",
  component: OrderModal,
  args: {
    closeModal: () => {},
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return <Provider store={store}>{Story()}</Provider>;
    },
  ],
} as Meta<OrderModalProps>;

/** Modal that appears when the user clicks the button to confirm the order */
export const Primary: StoryObj = {
  args: {
    closeModal: () => {},
  },
};
