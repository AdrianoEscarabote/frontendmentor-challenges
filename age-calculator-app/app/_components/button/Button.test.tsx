import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import Button from "./index"

describe("Button Component", () => {
  it("renders the Button component", () => {
    render(<Button onClick={() => {}} disabled={false} />)
    const buttonElement = screen.getByRole("button")
    expect(buttonElement).toBeTruthy()
  })

  it("renders the button element", () => {
    render(<Button onClick={() => {}} disabled={false} />)
    const buttonElement = screen.getByRole("button")
    expect(buttonElement).toBeTruthy()
  })

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick} disabled={false} />)
    const buttonElement = screen.getByRole("button")
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("is disabled when the disabled prop is true", () => {
    render(<Button onClick={() => {}} disabled={true} />)
    const buttonElement = screen.getByRole("button")
    expect(buttonElement.hasAttribute("disabled")).toBeTruthy()
  })

  it("renders the Image component inside the button", () => {
    render(<Button onClick={() => {}} disabled={false} />)
    const imageElement = screen.getByAltText("icon arrow")
    expect(imageElement).toBeTruthy()
  })
})
