import { render } from "@testing-library/react"
import LatestArticles from "."

describe("LatestArticles Component", () => {
  it("should render correctly", () => {
    render(<LatestArticles />)
  })
  it("should render the section title", () => {
    const { getByText } = render(<LatestArticles />)
    expect(getByText("Latest Articles")).toBeTruthy()
  })
  it("should render four Article components", () => {
    const { getAllByRole } = render(<LatestArticles />)
    const articles = getAllByRole("article")
    expect(articles).toHaveLength(4)
  })
  it("should display articles in a row on large screens", () => {
    window.innerWidth = 1024
    const { container } = render(<LatestArticles />)
    expect(container.querySelector(".lg\\:flex-row")).toBeTruthy()
  })

  it("should display articles in a column on small screens", () => {
    window.innerWidth = 375
    const { container } = render(<LatestArticles />)
    expect(container.querySelector(".flex-col")).toBeTruthy()
  })
})
