import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { extension, initialStateType } from "./extensions.types"

const initialState: initialStateType = {
  extensions: [],
  filter: "all",
}

const extensionsSlice = createSlice({
  name: "extensions",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<extension[]>) => {
      state.extensions = action.payload
    },
    toggleActive: (
      state,
      action: PayloadAction<{ name: string; isActive: boolean }>,
    ) => {
      state.extensions = state.extensions.map((extension) => {
        if (extension.name === action.payload.name) {
          return { ...extension, isActive: action.payload.isActive }
        }
        return extension
      })
    },
    setFilter: (
      state,
      action: PayloadAction<"all" | "active" | "inactive">,
    ) => {
      state.filter = action.payload
    },
  },
})

export const { setData, toggleActive, setFilter } = extensionsSlice.actions
export default extensionsSlice.reducer
