import getMockState from "@/utils/getMockState";
import OrderList from ".";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

const mockStore = configureMockStore();

describe("Order List Component", () => {
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
        <OrderList />
      </Provider>
    );
  });
});
