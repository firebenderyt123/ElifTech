import { RootState } from "../";

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartTotalQuantity = (state: RootState) =>
  state.cart.totalQuantity;
export const selectCartTotalPrice = (state: RootState) => state.cart.totalPrice;
