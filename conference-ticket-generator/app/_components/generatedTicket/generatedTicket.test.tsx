import { render, screen } from "@testing-library/react";
import GeneratedTicket from ".";
import "@testing-library/jest-dom";

describe("GeneratedTicket", () => {
  const props = {
    email: "jonatan@email.com",
    name: "Jonatan Kristof",
    username: "jonatankristonf0101",
  };

  it("should render correctly", () => {
    render(<GeneratedTicket {...props} />);

    const heading = screen.getByTestId("heading");
    expect(heading).toBeInTheDocument();

    const email = screen.getByText(props.email);
    expect(email).toBeInTheDocument();

    const username = screen.getByText(`@${props.username}`);
    expect(username).toBeInTheDocument();

    const avatar = screen.getByTestId("avatar");
    expect(avatar).toBeInTheDocument();

    const ticketNumber = screen.getByText("#01609");
    expect(ticketNumber).toBeInTheDocument();
  });

  it("should render ticket details correctly", () => {
    render(<GeneratedTicket {...props} />);

    const eventDetails = screen.getByText(/jan 31, 2025 \/ austin, tx/i);
    expect(eventDetails).toBeInTheDocument();
  });
});
