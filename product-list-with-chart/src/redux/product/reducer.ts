import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productType } from "../root-reducer-types";

const initialState: productType[] = [];

const productsSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    cleanProducts: () => {
      return [];
    },
    increaseQuantity: (state, action: PayloadAction<{ name: string }>) => {
      const { name } = action.payload;
      if (name) {
        state.map((product) => {
          if (product.name === name) {
            return {
              ...product,
              quantity: product.quantity++,
            };
          }
          return product;
        });
      }
    },
    decreaseQuantity: (state, action: PayloadAction<{ name: string }>) => {
      const { name } = action.payload;
      const product = state.find((product) => product.name === name);
      if (product?.quantity === 1) {
        return state.filter((product) => product.name !== name);
      }
      if (name) {
        state.map((product) => {
          if (product.name === name) {
            return {
              ...product,
              quantity: product.quantity--,
            };
          }
          return product;
        });
      }
    },
    addProduct: (state, action: PayloadAction<productType>) => {
      const payloadExists = action.payload;

      if (payloadExists) {
        const formattedProduct = {
          ...action.payload,
          quantity: 1,
        };
        state.push(formattedProduct);
        return;
      }
    },
    removeProduct: (
      state,
      action: PayloadAction<{
        name: string;
      }>
    ) => {
      const { name } = action.payload;
      if (name) {
        return state.filter((product) => product.name !== name);
      }
    },
  },
});

export default productsSlice.reducer;

export const {
  decreaseQuantity,
  increaseQuantity,
  cleanProducts,
  addProduct,
  removeProduct,
} = productsSlice.actions;
