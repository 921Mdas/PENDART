import { configureStore } from "@reduxjs/toolkit";
import BiddingCartReducer from "./slices/arts.reducer";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

export const store = configureStore({
  // if we have many we create an object here
  reducer: {
    BiddingCartMenu: BiddingCartReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
