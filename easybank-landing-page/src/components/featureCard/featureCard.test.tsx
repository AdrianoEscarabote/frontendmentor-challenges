import { render } from "@testing-library/react"
import FeatureCard from "."

describe("Feature Card component", () => {
  it("should render correctly", () => {
    render(
      <FeatureCard
        iconPath="/images/icon-online.svg"
        title="Open API"
        text="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
      />,
    )
  })
  it("should render the title and the description text correctly", () => {
    const { getByText } = render(
      <FeatureCard
        iconPath="/images/icon-online.svg"
        title="Open API"
        text="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
      />,
    )
    expect(getByText("Open API")).toBeTruthy()
    expect(
      getByText(
        "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
      ),
    ).toBeTruthy()
  })
})
