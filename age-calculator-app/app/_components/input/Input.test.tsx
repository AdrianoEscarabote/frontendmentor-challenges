import React from "react"
import { render, screen } from "@testing-library/react"
import Input from "./index"

describe("Input Component", () => {
  it("renders the Input component", () => {
    render(
      <Input
        id="test-input"
        label="Test Label"
        error={false}
        errorMessage=""
      />,
    )
    const inputElement = screen.getByLabelText("Test Label")
    expect(inputElement).toBeTruthy()
  })

  it("renders the input element", () => {
    render(
      <Input
        id="test-input"
        label="Test Label"
        error={false}
        errorMessage=""
      />,
    )
    const inputElement = screen.getByRole("textbox")
    expect(inputElement).toBeTruthy()
  })

  /* it("updates state on user input", () => {
    render(
      <Input
        id="test-input"
        label="Test Label"
        error={false}
        errorMessage=""
      />,
    )
    const inputElement = screen.getByRole("textbox")
    fireEvent.change(inputElement, { target: { value: "123" } })
    expect(inputElement).toHaveValue("123")
  }) */

  test("shows validation message for invalid input", () => {
    render(
      <Input
        id="test-input"
        label="Test Label"
        error={true}
        errorMessage="Invalid input"
      />,
    )
    const errorMessage = screen.getByText(/Invalid input/i)
    expect(errorMessage).toBeTruthy()
  })

  /*  it("input only accepts numeric values", () => {
    render(
      <Input
        id="test-input"
        label="Test Label"
        error={false}
        errorMessage=""
      />,
    )
    const inputElement = screen.getByRole("textbox")
    fireEvent.change(inputElement, { target: { value: "abc123" } })
    expect(inputElement).toHaveValue("123")
  }) */
})
