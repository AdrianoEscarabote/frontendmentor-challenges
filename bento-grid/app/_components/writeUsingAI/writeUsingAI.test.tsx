import { render } from "@testing-library/react"
import WriteUsingAI from "."

describe("WriteUsingAI", () => {
  it("should render correctly", () => {
    render(<WriteUsingAI />)
  })
  it("should display the correct heading", () => {
    const { getByText } = render(<WriteUsingAI />)
    expect(getByText("Write your content using AI.")).toBeTruthy()
  })
  it("should render the image with correct alt attribute", () => {
    const { getByAltText } = render(<WriteUsingAI />)
    const image = getByAltText("illustration ai content")
    expect(image).toHaveProperty("alt", "illustration ai content")
  })
})
