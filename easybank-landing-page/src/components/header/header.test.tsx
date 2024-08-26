import { render } from "@testing-library/react"
import Header from "."

describe("Header Component", () => {
  it("should render correctly", () => {
    render(<Header />)
  })
  it("should render navigation links correctly on large screens", () => {
    const { getByText } = render(<Header />)

    expect(getByText("Home")).toBeTruthy()
    expect(getByText("About")).toBeTruthy()
    expect(getByText("Contact")).toBeTruthy()
    expect(getByText("Blog")).toBeTruthy()
    expect(getByText("Careers")).toBeTruthy()
  })
})
