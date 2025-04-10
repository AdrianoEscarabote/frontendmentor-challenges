import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { legacy_configureStore as configureStore } from "redux-mock-store"

import getMockState from "@/utils/getMockState"

import InputRadio from "."

const mockStore = configureStore([])

describe("InputRadio Component", () => {
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
        <InputRadio id="id" isActive onChange={() => {}} />
      </Provider>,
    )
  })

  it("should be checked when isActive is true", () => {
    render(
      <Provider store={store}>
        <InputRadio id="checked-radio" isActive={true} onChange={() => {}} />
      </Provider>,
    )

    const input = screen.getByRole("checkbox") as HTMLInputElement
    expect(input.checked).toBe(true)
  })

  it("should not be checked when isActive is false", () => {
    render(
      <Provider store={store}>
        <InputRadio id="unchecked-radio" isActive={false} onChange={() => {}} />
      </Provider>,
    )

    const input = screen.getByRole("checkbox") as HTMLInputElement
    expect(input.checked).toBe(false)
  })

  it("should call onChange when clicked", () => {
    const handleChange = jest.fn()

    render(
      <Provider store={store}>
        <InputRadio id="click-radio" isActive={false} onChange={handleChange} />
      </Provider>,
    )

    const input = screen.getByRole("checkbox")
    fireEvent.click(input)

    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})
