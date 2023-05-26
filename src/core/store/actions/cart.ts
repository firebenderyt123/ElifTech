import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM,
} from "../constants/cart";
import { CartItem } from "../../types/CartItem";

interface AddCartItemAction {
  type: typeof ADD_TO_CART;
  item: CartItem;
}

interface RemoveCartItemAction {
  type: typeof REMOVE_FROM_CART;
  item: CartItem;
}

interface UpdateCartItemAction {
  type: typeof UPDATE_CART_ITEM;
  item: CartItem;
}

export type CartActions =
  | AddCartItemAction
  | RemoveCartItemAction
  | UpdateCartItemAction;

export const addCartItem = (item: CartItem): AddCartItemAction => ({
  type: ADD_TO_CART,
  item,
});

export const removeCartItem = (item: CartItem): RemoveCartItemAction => ({
  type: REMOVE_FROM_CART,
  item,
});

export const updateCartItem = (item: CartItem): UpdateCartItemAction => ({
  type: UPDATE_CART_ITEM,
  item,
});
