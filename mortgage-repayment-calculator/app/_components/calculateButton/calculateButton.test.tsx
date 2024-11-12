import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import CalculateButton from "."

describe("CalculateButton Component", () => {
  it("should render correctly", () => {
    render(<CalculateButton />)
  })
})
