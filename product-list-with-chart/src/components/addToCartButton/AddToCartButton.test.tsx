import { fireEvent, render, screen } from "@testing-library/react";
import AddToCartButton from ".";
import getMockState from "@/utils/getMockState";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureMockStore();

describe("AddToCartButton Component", () => {
  let store: any;

  beforeEach(() => {
    const mockState = getMockState();
    const state = mockStore(mockState);

    store = state;
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it("should render correctly", () => {
    render(
      <Provider store={store}>
        <AddToCartButton
          handleDecreaseQuantityFn={() => {}}
          name="name"
          handleIncreaseQuantityFn={() => {}}
        />
      </Provider>
    );
  });

  it("should pass props correctly and call functions correctly", () => {
    const incrementFn = jest.fn();
    const decrementFn = jest.fn();
    render(
      <Provider store={store}>
        <AddToCartButton
          handleDecreaseQuantityFn={decrementFn}
          name="name"
          handleIncreaseQuantityFn={incrementFn}
        />
      </Provider>
    );

    const addToCartButton = screen.getByTestId("addToCartButton");

    fireEvent.click(addToCartButton);

    const incrementButton = screen.getByTestId("incrementButton");
    const decrementButton = screen.getByTestId("decrementButton");

    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);

    expect(incrementFn).toHaveBeenCalled();
    expect(decrementFn).toHaveBeenCalled();
  });
});
