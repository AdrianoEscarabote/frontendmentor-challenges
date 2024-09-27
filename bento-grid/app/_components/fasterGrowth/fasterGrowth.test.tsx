import { render } from "@testing-library/react"
import FasterGrowth from "."

describe("Faster Growth Component", () => {
  it("should render correctly", () => {
    render(<FasterGrowth />)
  })
  it("should display the correct heading", () => {
    const { getByText } = render(<FasterGrowth />)
    expect(getByText("faster audience growth")).toBeTruthy()
  })
  it("should render the image with correct src and alt attribute", () => {
    const { getByAltText } = render(<FasterGrowth />)
    const image = getByAltText("illustration-audience-growth")
    expect(image).toHaveProperty("alt", "illustration-audience-growth")
  })
})
