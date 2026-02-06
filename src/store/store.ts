import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from './filtersSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    cart: cartReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
