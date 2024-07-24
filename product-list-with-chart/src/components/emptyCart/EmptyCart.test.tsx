import { render, screen } from "@testing-library/react";
import EmptyCart from ".";

describe("Empty Cart Component", () => {
  it("should render correctly", () => {
    render(<EmptyCart />);
  });

  it("should contain the correct elements", () => {
    render(<EmptyCart />);

    const image = screen.getByTestId("image");
    const paragraph = screen.getByTestId("paragraph");

    expect(paragraph).toBeTruthy();
    expect(image).toBeTruthy();
  });
});
