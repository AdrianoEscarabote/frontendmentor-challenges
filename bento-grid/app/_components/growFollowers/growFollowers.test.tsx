import { render } from "@testing-library/react"
import GrowFollowers from "."

describe("Grow Followers Component", () => {
  it("should render correctly", () => {
    render(<GrowFollowers />)
  })
  it("should display the correct heading", () => {
    const { getByText } = render(<GrowFollowers />)
    expect(getByText("Grow followers with non-stop content.")).toBeTruthy()
  })
  it("should render the image with correct src and alt attribute", () => {
    const { getByAltText } = render(<GrowFollowers />)
    const image = getByAltText("illustration grow followers")
    expect(image).toHaveProperty("alt", "illustration grow followers")
  })
})
