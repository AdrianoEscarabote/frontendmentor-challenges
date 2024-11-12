import { fireEvent, render, screen } from "@testing-library/react"
import InputRadio from "."

describe("Input Radio Component", () => {
  it("should render correctly with the provided label", () => {
    render(<InputRadio label="Repayment" id="repayment" />)
    expect(screen.getByLabelText("Repayment")).toBeInTheDocument()
  })

  it("should toggle the 'checked' class on selection", () => {
    render(<InputRadio label="Repayment" id="repayment" />)

    const container = screen
      .getByLabelText("Repayment")
      .closest(".container_input_radio")
    expect(container).not.toHaveClass("checked")

    fireEvent.click(screen.getByLabelText("Repayment"))

    expect(container).toHaveClass("checked")
  })
})
