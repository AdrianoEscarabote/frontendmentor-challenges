import { render } from "@testing-library/react"
import MaintainSchedule from "."

describe("MaintainSchedule Component", () => {
  it("should render correctly", () => {
    render(<MaintainSchedule />)
  })
  it("should display the correct heading", () => {
    const { getByText } = render(<MaintainSchedule />)
    expect(getByText("Maintain a consistent posting schedule.")).toBeTruthy()
  })
  it("should render the image with correct src and alt attribute", () => {
    const { getByAltText } = render(<MaintainSchedule />)
    const image = getByAltText("illustration consistent schedule")
    expect(image).toHaveProperty("alt", "illustration consistent schedule")
  })
})
