import { render, screen } from "@testing-library/react"
import SuccessAlert from "."

describe("SuccessAlert Component", () => {
  it("should render correctly", () => {
    render(<SuccessAlert email="hi@hotmail.com" goBackFn={() => {}} />)
  })

  it("should contain the correct elements", () => {
    render(<SuccessAlert email="hi@hotmail.com" goBackFn={() => {}} />)

    const title = screen.getByText("Thanks for subscribing!")
    const description = screen.getByTestId("description")
    const button = screen.getByText("Dismiss message")

    expect(title).toBeTruthy()
    expect(description).toBeTruthy()
    expect(button).toBeTruthy()
  })
})
