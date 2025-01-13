import { render, screen } from "@testing-library/react";
import Input from ".";

describe("Input", () => {
  it("should render the label and input correctly", () => {
    render(<Input error={false} errorMessage="" id="name" label="Full name" />);
    expect(screen.getByLabelText("Full name")).toBeInTheDocument();
    expect(screen.getByLabelText("Full name")).toHaveAttribute("id", "name");
  });
  it("should display an error message when error is true", () => {
    render(
      <Input
        error={true}
        errorMessage="This field is required"
        id="name"
        label="Full name"
      />
    );

    expect(screen.getByText("This field is required")).toBeInTheDocument();
    expect(screen.getByText("This field is required")).toHaveClass(
      "text-red-500"
    );
  });
  it("should not display an error message when error is false", () => {
    render(
      <Input
        error={false}
        errorMessage="This field is required"
        id="name"
        label="Full name"
      />
    );

    expect(
      screen.queryByText("This field is required")
    ).not.toBeInTheDocument();
  });
  it("should pass additional props to the input element", () => {
    render(
      <Input
        error={false}
        errorMessage=""
        id="name"
        label="Full name"
        placeholder="Enter your name"
        aria-label="name-input"
      />
    );

    const input = screen.getByLabelText("Full name");
    expect(input).toHaveAttribute("placeholder", "Enter your name");
    expect(input).toHaveAttribute("aria-label", "name-input");
  });
});
