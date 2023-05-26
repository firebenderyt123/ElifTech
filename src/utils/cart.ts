import { CartItem } from "../core/types/CartItem";

export const getCart = (): CartItem[] => {
  const cartItems = sessionStorage.getItem("cart") || null;
  return cartItems ? JSON.parse(cartItems) : [];
};

export const setCart = (items: CartItem[]) => {
  sessionStorage.setItem("cart", JSON.stringify(items));
};

export const clearCart = () => {
  sessionStorage.setItem("cart", JSON.stringify([]));
};
