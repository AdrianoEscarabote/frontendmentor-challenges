import { rootState } from "../reduxTypes";

export const selectProductsCount = (rootReducer: rootState) => {
  return rootReducer.productSlice.reduce(
    (accum, curr) => accum + curr.quantity,
    0,
  );
};
