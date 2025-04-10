import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { legacy_configureStore as configureStore } from "redux-mock-store"

import getMockState from "@/utils/getMockState"

import ExtensionsList from "."

const mockStore = configureStore([])

describe("ExtensionsList Component", () => {
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
        <ExtensionsList />
      </Provider>,
    )
  })

  it("should render only active extensions when filter is 'active'", async () => {
    const mockState = getMockState()
    mockState.extensionsSlice.filter = "active"
    store = mockStore(mockState)

    render(
      <Provider store={store}>
        <ExtensionsList />
      </Provider>,
    )

    const activeExtensions = mockState.extensionsSlice.extensions.filter(
      (ext) => ext.isActive,
    )
    const cards = await screen.findAllByTestId("card")
    expect(cards).toHaveLength(activeExtensions.length)
  })

  it("should render only inactive extensions when filter is 'inactive'", async () => {
    const mockState = getMockState()
    mockState.extensionsSlice.filter = "inactive"
    store = mockStore(mockState)

    render(
      <Provider store={store}>
        <ExtensionsList />
      </Provider>,
    )

    const inactiveExtensions = mockState.extensionsSlice.extensions.filter(
      (ext) => !ext.isActive,
    )

    const cards = await screen.findAllByTestId("card")
    expect(cards).toHaveLength(inactiveExtensions.length)
  })
})
