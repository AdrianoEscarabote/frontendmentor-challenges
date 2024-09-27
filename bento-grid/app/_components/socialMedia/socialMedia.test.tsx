import { render } from "@testing-library/react"
import SocialMedia from "."

describe("Social Media Component", () => {
  it("should render correctly", () => {
    render(<SocialMedia />)
  })
  it("should display the correct heading", () => {
    const { getByRole } = render(<SocialMedia />)
    expect(getByRole("heading")).toBeTruthy()
  })
  it("should render the image with correct src and alt attribute", () => {
    const { getByAltText } = render(<SocialMedia />)
    const image = getByAltText("illustration five stars")
    expect(image).toHaveProperty("alt", "illustration five stars")
  })
})
