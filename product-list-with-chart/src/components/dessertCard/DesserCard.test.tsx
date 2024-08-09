import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import DessertCard from ".";
import configureMockStore from "redux-mock-store";
import getMockState from "@/utils/getMockState";

const mockStore = configureMockStore();

describe("DessertCard Component", () => {
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
        <DessertCard
          name={"Lemon Meringue Pie"}
          category={"Pie"}
          price={5}
          quantity={2}
          image={{
            thumbnail: "/images/image-meringue-thumbnail.jpg",
            mobile: "/images/image-meringue-mobile.jpg",
            tablet: "/images/image-meringue-tablet.jpg",
            desktop: "/images/image-meringue-desktop.jpg",
          }}
        />
      </Provider>
    );
  });

  it("should pass props correctly", () => {
    render(
      <Provider store={store}>
        <DessertCard
          name={"Lemon Meringue Pie"}
          category={"Pie"}
          price={5}
          quantity={2}
          image={{
            thumbnail: "/images/image-meringue-thumbnail.jpg",
            mobile: "/images/image-meringue-mobile.jpg",
            tablet: "/images/image-meringue-tablet.jpg",
            desktop: "/images/image-meringue-desktop.jpg",
          }}
        />
      </Provider>
    );

    const nameElement = screen.getByText("Lemon Meringue Pie");

    expect(nameElement).toBeTruthy();
  });
});
