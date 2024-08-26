import { render } from "@testing-library/react"
import Article from "."

describe("Article Component", () => {
  it("should render correctly", () => {
    render(
      <Article
        author="AdrianoEscarabote"
        imagePath="/images/image-restaurant.jpg"
        text="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
        title="Receive money in any currency with no fees"
      />,
    )
  })
  it("should display the correct author, title, and text", () => {
    const { getByText } = render(
      <Article
        author="AdrianoEscarabote"
        imagePath="/images/image-restaurant.jpg"
        text="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
        title="Receive money in any currency with no fees"
      />,
    )
    expect(getByText("AdrianoEscarabote")).toBeTruthy()
    expect(getByText("Receive money in any currency with no fees")).toBeTruthy()
    expect(
      getByText(
        "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
      ),
    ).toBeTruthy()
  })
})
