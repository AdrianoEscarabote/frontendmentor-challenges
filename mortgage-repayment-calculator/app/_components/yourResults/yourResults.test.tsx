import { render } from "@testing-library/react"
import YourResults from "."
import getMockState from "../../../utils/getMockState"
import configureStore from "redux-mock-store"
import { Provider } from "react-redux"

const mockStore = configureStore([])

describe("Your Results Component", () => {
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
        <YourResults />
      </Provider>,
    )
  })
})
