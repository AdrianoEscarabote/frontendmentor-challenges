import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Button from ".";

describe("Button", () => {
  it("should render correctly", () => {
    render(<Button label="test" data-testid="button" />);
  });
  it("should accept additional button props", () => {
    render(<Button label="Disabled Button" disabled />);
    const button = screen.getByTestId("button");
    expect(button).toBeDisabled();
  });

  it("should handle click events", async () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    const button = screen.getByTestId("button");
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
