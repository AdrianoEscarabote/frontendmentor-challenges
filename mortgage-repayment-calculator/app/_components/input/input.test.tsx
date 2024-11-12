import { render } from "@testing-library/react"
import Input from "."

describe("Input Component", () => {
  it("should render correctly", () => {
    render(
      <Input
        error={false}
        errorMessage="This field is required"
        id="rate"
        inputType="rate"
      />,
    )
  })
})
