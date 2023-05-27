import { CartItem } from "../core/types/CartItem";
import { Product } from "../core/types/Product";

type CartItemsLocal = {
  id: number;
  quantity: number;
};

export const getCartItemsLocal = (): CartItemsLocal[] => {
  const cartItems = sessionStorage.getItem("cart") || null;
  return cartItems ? JSON.parse(cartItems) : [];
};

export const updateCartItemsLocal = (items: CartItem[]) => {
  const itemsToSave = items.map(
    ({ product, quantity }: { product: Product; quantity: number }) => ({
      id: product.id,
      quantity,
    })
  );
  sessionStorage.setItem("cart", JSON.stringify(itemsToSave));
};

export const clearCartItemIds = () => {
  sessionStorage.setItem("cart", JSON.stringify([]));
};
