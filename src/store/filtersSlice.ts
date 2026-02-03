import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SortingType } from "@/types/product";

type FilterState = {
  selectedCategory: string | null;
  selectedSort: SortingType;
}

const initialState: FilterState = {
  selectedCategory: null,
  selectedSort: "name_asc",
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
    setSorting(state, action: PayloadAction<SortingType>) {
      state.selectedSort = action.payload;
    }
  },
});

export const { 
  setCategory, 
  clearCategory,
  setSorting
} = filtersSlice.actions;

export default filtersSlice.reducer;
