import { rootState } from "../root-reducer-types";

export const selectProductsCount = (rootReducer: rootState) => {
  return rootReducer.productsSlice.reduce(
    (accum, cur) => (accum += cur.quantity),
    0
  );
};

export const selectProductsPrice = (rootReducer: rootState) => {
  return rootReducer.productsSlice.reduce(
    (accum, cur) => (accum += cur.price * cur.quantity),
    0
  );
};
