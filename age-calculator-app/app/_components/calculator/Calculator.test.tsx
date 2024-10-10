import React from "react"
import { render, screen, fireEvent, act } from "@testing-library/react"
import { Provider } from "react-redux"
import configureStore from "redux-mock-store"
import Calculator from "./index"
import {
  calculateBirth,
  setDay,
  setMonth,
  setYear,
} from "@/redux/calculator/reducer"
import getMockState from "@/utils/getMockState"

const mockStore = configureStore([])

describe("Calculator Component", () => {
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

  const renderComponent = () =>
    render(
      <Provider store={store}>
        <Calculator />
      </Provider>,
    )

  it("renders the Calculator component", () => {
    renderComponent()
    expect(
      screen.getByText(/Fill in the fields with your date of birth/i),
    ).toBeTruthy()
  })

  it("dispatches actions on valid form submission", async () => {
    renderComponent()

    await act(async () => {
      fireEvent.change(screen.getByLabelText(/day/i), {
        target: { value: "15" },
      })
      fireEvent.change(screen.getByLabelText(/month/i), {
        target: { value: "8" },
      })
      fireEvent.change(screen.getByLabelText(/year/i), {
        target: { value: "1990" },
      })
      fireEvent.click(screen.getByTestId("submit_button"))
    })

    expect(store.dispatch).toHaveBeenCalledWith(setDay({ value: 15 }))
    expect(store.dispatch).toHaveBeenCalledWith(setMonth({ value: 8 }))
    expect(store.dispatch).toHaveBeenCalledWith(setYear({ value: 1990 }))
    expect(store.dispatch).toHaveBeenCalledWith(calculateBirth())
  })

  it("shows validation error for invalid date", async () => {
    renderComponent()

    await act(async () => {
      fireEvent.change(screen.getByLabelText(/day/i), {
        target: { value: "31" },
      })
      fireEvent.change(screen.getByLabelText(/month/i), {
        target: { value: "2" },
      })
      fireEvent.change(screen.getByLabelText(/year/i), {
        target: { value: "2020" },
      })
      fireEvent.click(screen.getByTestId("submit_button"))
    })

    expect(screen.getByText(/Must be a valid date/i)).toBeTruthy()
  })

  it("displays calculated age correctly", () => {
    store = mockStore({
      calculatorSlice: {
        age: {
          days: 15,
          months: 3,
          years: 25,
        },
      },
    })
    renderComponent()

    expect(screen.getByText(/25/i)).toBeTruthy()
    expect(screen.getByText(/years/i)).toBeTruthy()
    expect(screen.getByText(/3/i)).toBeTruthy()
    expect(screen.getByText(/months/i)).toBeTruthy()
    expect(screen.getByText(/15/i)).toBeTruthy()
    expect(screen.getByText(/days/i)).toBeTruthy()
  })
})
