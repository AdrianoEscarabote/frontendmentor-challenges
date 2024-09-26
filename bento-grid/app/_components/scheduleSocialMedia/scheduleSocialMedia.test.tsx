import { render } from "@testing-library/react"
import ScheduleSocialMedia from "."

describe("ScheduleSocialMedia Component", () => {
  it("should render correctly", () => {
    render(<ScheduleSocialMedia />)
  })
  it("should display the correct heading", () => {
    const { getByText } = render(<ScheduleSocialMedia />)
    expect(getByText("Schedule to social media.")).toBeTruthy()
  })
  it("should render the image with correct alt attribute", () => {
    const { getByAltText } = render(<ScheduleSocialMedia />)
    const image = getByAltText("illustration schedule posts")
    expect(image).toHaveProperty("alt", "illustration schedule posts")
  })
})
