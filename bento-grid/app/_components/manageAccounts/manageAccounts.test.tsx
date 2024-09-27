import { render } from "@testing-library/react"
import ManageAccounts from "."

describe("ManageAccounts Component", () => {
  it("should render correctly", () => {
    render(<ManageAccounts />)
  })
  it("should display the correct heading", () => {
    const { getByText } = render(<ManageAccounts />)
    expect(getByText("Manage multiple accounts and platforms.")).toBeTruthy()
  })
  it("should render the image with correct src and alt attribute", () => {
    const { getByAltText } = render(<ManageAccounts />)
    const image = getByAltText("illustration multiple platforms")
    expect(image).toHaveProperty("alt", "illustration multiple platforms")
  })
})
