import { render } from "@testing-library/react"
import MortgageCalculator from "."
import { Provider } from "react-redux"
import getMockState from "../../../utils/getMockState"
import configureStore from "redux-mock-store"

const mockStore = configureStore([])

describe("mortgageCalculator Component", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let store: any

  beforeEach(() => {
    const mockState = getMockState()
    const state = mockStore(mockState)

    store = state
  })

  afterAll(() => {
    jest.clearAllMocks()
  })
  it("should render correctly", () => {
    render(
      <Provider store={store}>
        <MortgageCalculator />
      </Provider>,
    )
  })
})
