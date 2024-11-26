import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialStateType } from "../reduxTypes";

const initialState: initialStateType[] = [];

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<initialStateType>) => {
      const { name, quantity } = action.payload;

      if (state.find((product) => product.name === name)) {
        state.map((product) => {
          if (product.name === name) {
            product.quantity += quantity;
          }
        });
        return;
      }
      state.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<{ name: string }>) => {
      const { name } = action.payload;

      const index = state.findIndex((product) => product.name === name);

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export default productSlice.reducer;

export const { addProduct, removeProduct } = productSlice.actions;
