import { CartItem } from "../core/types/CartItem";
import { Product, SmallProduct } from "../core/types/Product";

type CartItemsLocal = {
  id: number;
  quantity: number;
};

export const itemsToSmallProducts = (items: CartItem[]): SmallProduct[] => {
  return items.map(
    ({ product, quantity }: { product: Product; quantity: number }) => ({
      id: product.id,
      quantity,
    })
  );
};

export const getCartItemsLocal = (): CartItemsLocal[] => {
  const cartItems = sessionStorage.getItem("cart") || null;
  return cartItems ? JSON.parse(cartItems) : [];
};

export const updateCartItemsLocal = (items: CartItem[]) => {
  const itemsToSave = itemsToSmallProducts(items);
  sessionStorage.setItem("cart", JSON.stringify(itemsToSave));
};

export const clearCartItemIds = () => {
  sessionStorage.setItem("cart", JSON.stringify([]));
};
