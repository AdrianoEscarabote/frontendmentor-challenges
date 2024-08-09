import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import getMockState from "@/utils/getMockState";
import { fireEvent, render, screen } from "@testing-library/react";
import OrderModal from ".";

const mockStore = configureMockStore();

describe("Order Modal Component", () => {
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
        <OrderModal closeModal={() => {}} />
      </Provider>
    );
  });

  it("should call the closeModal onClick function", () => {
    const jestFn = jest.fn();
    render(
      <Provider store={store}>
        <OrderModal closeModal={jestFn} />
      </Provider>
    );

    const closeModalButton = screen.getByTestId("closeModalButton");

    fireEvent.click(closeModalButton);

    expect(jestFn).toHaveBeenCalled();
  });
});
