import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { legacy_configureStore as configureStore } from "redux-mock-store"

import getMockState from "@/utils/getMockState"

import Card from "."

const mockStore = configureStore([])

describe("Card Component", () => {
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
        <Card
          name="Test Card"
          description="This is a test card."
          isActive
          logo="/images/logo-devlens.svg"
        />
      </Provider>,
    )
  })

  it("should dispatch toggleActive when the radio is clicked", () => {
    render(
      <Provider store={store}>
        <Card
          name="Test Card"
          description="This is a test card."
          isActive={true}
          logo="/images/logo-devlens.svg"
        />
      </Provider>,
    )

    const toggle = screen.getByLabelText("Toggle") // com base no texto do label
    fireEvent.click(toggle)

    expect(store.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        payload: { isActive: false, name: "Test Card" },
        type: "extensions/toggleActive",
      }),
    )
  })
})
