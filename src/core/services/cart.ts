import { CartItem } from "../types/CartItem";
import { Product } from "../types/Product";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM,
  CLEAR_CART,
} from "../store/constants/cart";
import { AppDispatch, RootState } from "../store";
import { updateCartItemsLocal, clearCartItemIds } from "../../utils/cart";

export const addToCart = (product: Product, quantity: number) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const item: CartItem = {
      product,
      quantity,
    };
    dispatch({ type: ADD_TO_CART, item: item });
    updateCartItemsLocal(getState().cart.items);
  };
};

export const removeFromCart = (product: Product, quantity: number) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const item: CartItem = {
      product,
      quantity,
    };
    dispatch({ type: REMOVE_FROM_CART, item: item });
    updateCartItemsLocal(getState().cart.items);
  };
};

export const updateCartItem = (product: Product, quantity: number) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const item: CartItem = {
      product,
      quantity,
    };
    dispatch({ type: UPDATE_CART_ITEM, item: item });
    updateCartItemsLocal(getState().cart.items);
  };
};

export const clearCart = () => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: CLEAR_CART });
    clearCartItemIds();
  };
};
