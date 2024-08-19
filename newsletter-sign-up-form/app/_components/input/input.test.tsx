import { render } from "@testing-library/react"
import Input from "."

describe("Input Component", () => {
  it("should render correctly", () => {
    render(<Input labelText="name" />)
  })
})
