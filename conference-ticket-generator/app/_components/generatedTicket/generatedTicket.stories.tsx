import { Meta, StoryObj } from "@storybook/react";
import GeneratedTicket from ".";
import { GeneratedTicketProps } from "./generatedTicketProps";

export default {
  title: "GeneratedTicket",
  component: GeneratedTicket,
  args: {
    email: "jonatan@email.com",
    name: "Jonatan Kristof",
    username: "jonatankristof0101",
  },
} as Meta<GeneratedTicketProps>;

export const Primary: StoryObj = {};
