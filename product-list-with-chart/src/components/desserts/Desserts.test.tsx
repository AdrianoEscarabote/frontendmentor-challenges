import store from "@/redux/store";
import getMockState from "@/utils/getMockState";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Desserts from ".";

const mockStore = configureMockStore();

describe("Desserts", () => {
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
        <Desserts />
      </Provider>
    );
  });
});
