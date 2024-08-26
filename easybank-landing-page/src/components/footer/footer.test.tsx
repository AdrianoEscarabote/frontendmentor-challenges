import { getAllByRole, render } from "@testing-library/react"
import Footer from "."

describe("Footer", () => {
  it("should render correctly", () => {
    render(<Footer />)
  })
  it("should render navigation links", () => {
    const { getByText } = render(<Footer />)
    expect(getByText("About Us")).toBeTruthy()
    expect(getByText("Contact")).toBeTruthy()
    expect(getByText("Blog")).toBeTruthy()
    expect(getByText("Careers")).toBeTruthy()
    expect(getByText("Support")).toBeTruthy()
    expect(getByText("Privacy Policy")).toBeTruthy()
  })
  it("should display the copyright text", () => {
    const { getByText } = render(<Footer />)
    expect(getByText("© Easybank. All Rights Reserved")).toBeTruthy()
  })
})
