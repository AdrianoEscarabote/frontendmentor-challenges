import { render } from "@testing-library/react"
import Calculator from "."

describe("Calculator component", () => {
  it("should render correctly", () => {
    render(<Calculator />)
  })
})
