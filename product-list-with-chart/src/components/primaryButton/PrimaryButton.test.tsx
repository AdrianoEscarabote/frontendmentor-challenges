import { fireEvent, render, screen } from "@testing-library/react";
import PrimaryButton from ".";

describe("Primary Button Component", () => {
  it("should render correctly", () => {
    render(<PrimaryButton label="Confirm Order" />);
  });

  it("should pass the props correctly and call function on click", () => {
    const jestFn = jest.fn();
    render(
      <PrimaryButton
        label="Confirm Order"
        onClick={jestFn}
        data-testid="primary_button"
      />
    );

    const button = screen.getByTestId("primary_button");
    fireEvent.click(button);

    expect(button).toBeTruthy();
    expect(button.textContent).toBe("Confirm Order");
    expect(jestFn).toHaveBeenCalled();
  });
});
