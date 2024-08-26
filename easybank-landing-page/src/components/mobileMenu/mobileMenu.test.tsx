import { fireEvent, render } from "@testing-library/react"
import MobileMenu from "."

describe("Mobile Menu component", () => {
  it("should render correctly", () => {
    render(<MobileMenu closeFn={() => {}} />)
  })
  it("should render all menu links correctly", () => {
    const { getByText } = render(<MobileMenu closeFn={() => {}} />)

    expect(getByText("Home")).toBeTruthy()
    expect(getByText("About")).toBeTruthy()
    expect(getByText("Contact")).toBeTruthy()
    expect(getByText("Blog")).toBeTruthy()
    expect(getByText("Careers")).toBeTruthy()
  })
  it("should call closeFn when background is clicked", () => {
    const closeFn = jest.fn()
    const { container } = render(<MobileMenu closeFn={closeFn} />)

    const background = container.firstChild
    fireEvent.click(background!)

    expect(closeFn).toHaveBeenCalledTimes(1)
  })
  it("should call closeFn when any link is clicked", () => {
    const closeFn = jest.fn()
    const { getByText } = render(<MobileMenu closeFn={closeFn} />)

    getByText("Home").click()
    expect(closeFn).toHaveBeenCalledTimes(1)

    getByText("About").click()
    expect(closeFn).toHaveBeenCalledTimes(2)

    getByText("Contact").click()
    expect(closeFn).toHaveBeenCalledTimes(3)

    getByText("Blog").click()
    expect(closeFn).toHaveBeenCalledTimes(4)

    getByText("Careers").click()
    expect(closeFn).toHaveBeenCalledTimes(5)
  })
})
