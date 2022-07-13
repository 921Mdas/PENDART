import { createSlice } from "@reduxjs/toolkit";

// initial State for Arts

const initialState = {
  Bids: [],
  Cart: 0,
  purchases: [],
};

export const BiddingCartSlice = createSlice({
  //  slice name
  name: "BidCart",
  //   initial state
  initialState,
  //   actions
  reducers: {
    updateBids: (state, action) => {
      state.Bids = [...state.Bids, action.payload];
    },
    updateCart: (state, action) => {
      state.Cart = action.payload;
    },
    loadPurchases: (state, action) => {
      state.purchases = [...state.purchases, action.payload];
    },
    deleteCartItem: (state, action) => {
      state.Bids = action.payload;
      state.Cart = action.payload.length;
    },
  },
});

export const { updateCart, updateBids, loadPurchases, deleteCartItem } =
  BiddingCartSlice.actions;
export default BiddingCartSlice.reducer;
