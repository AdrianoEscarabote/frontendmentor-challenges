import { render, screen } from "@testing-library/react";
import Form from ".";

describe("Form", () => {
  it("should render correctly", () => {
    render(<Form />);
    expect(
      screen.getByRole("heading", { name: /your journey to coding conf/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/secure your spot/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/github username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/upload avatar/i)).toBeInTheDocument();
  });
});
