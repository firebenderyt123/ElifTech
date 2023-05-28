import { RootState } from "../";
import { CartItem } from "../../types/CartItem";

export const selectCartItems = (state: RootState): CartItem[] =>
  state.cart.items;
export const selectCartTotalQuantity = (state: RootState): number =>
  state.cart.totalQuantity;
export const selectCartTotalPrice = (state: RootState): number =>
  state.cart.totalPrice;
