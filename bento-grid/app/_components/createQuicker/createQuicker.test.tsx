import { render } from "@testing-library/react"
import CreateQuicker from "."

describe("Create Quicker Component", () => {
  it("should render correctly", () => {
    render(<CreateQuicker />)
  })
  it("should display the heading", () => {
    const { getByRole } = render(<CreateQuicker />)
    expect(getByRole("heading")).toBeTruthy()
  })
  it("should render the image with correct src and alt attribute", () => {
    const { getByAltText } = render(<CreateQuicker />)
    const image = getByAltText("illustration create post")
    expect(image).toHaveProperty("alt", "illustration create post")
  })
})
