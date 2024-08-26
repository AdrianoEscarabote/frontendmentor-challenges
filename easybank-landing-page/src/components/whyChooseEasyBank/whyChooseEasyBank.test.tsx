import { render } from "@testing-library/react"
import WhyChooseEasyBank from "."

describe("WhyChooseEasyBank Component", () => {
  it("should render correctly", () => {
    render(<WhyChooseEasyBank />)
  })
  it("should render all FeatureCards", () => {
    const { getByText } = render(<WhyChooseEasyBank />)
    expect(getByText("Online Banking")).toBeTruthy()
    expect(getByText("Simple Budgeting")).toBeTruthy()
    expect(getByText("Fast Onboarding")).toBeTruthy()
    expect(getByText("Open API")).toBeTruthy()
  })
  it("should render the main heading and the paragraph text", () => {
    const { getByText } = render(<WhyChooseEasyBank />)
    expect(getByText("Control your finances like never before.")).toBeTruthy()
    expect(getByText("Why choose Easybank?")).toBeTruthy()
  })
})
