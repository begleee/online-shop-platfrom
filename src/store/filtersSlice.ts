import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FilterState = {
  selectedCategory: string | null;
}

const initialState: FilterState = {
  selectedCategory: null,
}

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string | null>) {
      state.selectedCategory = action.payload;
    },
    clearCategory(state) {
      state.selectedCategory = null;
    },
  },
});

export const { setCategory, clearCategory } = filtersSlice.actions;
export default filtersSlice.reducer;
