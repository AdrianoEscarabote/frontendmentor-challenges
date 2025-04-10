import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { legacy_configureStore as configureStore } from "redux-mock-store"

import getMockState from "@/utils/getMockState"

const mockStore = configureStore([])

import FilterTabs from "."

describe("FilterTabs Component", () => {
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
        <FilterTabs />
      </Provider>,
    )
  })

  it("should dispatch 'active' filter when Active button is clicked", () => {
    render(
      <Provider store={store}>
        <FilterTabs />
      </Provider>,
    )

    const activeButton = screen.getByText("Active")
    fireEvent.click(activeButton)

    expect(store.dispatch).toHaveBeenCalledWith({
      type: "extensions/setFilter",
      payload: "active",
    })
  })

  it("should dispatch 'inactive' filter when Inactive button is clicked", () => {
    render(
      <Provider store={store}>
        <FilterTabs />
      </Provider>,
    )

    const inactiveButton = screen.getByText("Inactive")
    fireEvent.click(inactiveButton)

    expect(store.dispatch).toHaveBeenCalledWith({
      type: "extensions/setFilter",
      payload: "inactive",
    })
  })
})
