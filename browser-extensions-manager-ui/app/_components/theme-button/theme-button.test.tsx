import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { legacy_configureStore as configureStore } from "redux-mock-store"

import getMockState from "@/utils/getMockState"

import ThemeButton from "."

const mockStore = configureStore([])

describe("ThemeButton", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let store: any

  beforeEach(() => {
    const mockState = getMockState()
    const state = mockStore(mockState)

    store = state
    store.dispatch = jest.fn()
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it("should render correctly", () => {
    render(
      <Provider store={store}>
        <ThemeButton />
      </Provider>,
    )
  })

  it("should render the button with moon icon by default", () => {
    render(
      <Provider store={store}>
        <ThemeButton />
      </Provider>,
    )

    const icon = screen.getByRole("img", { name: /icon moon/i })
    expect(icon).toBeTruthy()
    expect(document.documentElement.classList.contains("dark")).toBe(false)
  })
})
