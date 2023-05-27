import React, { createContext, useState, useEffect } from "react";
import { getProductsByIds } from "../core/api/productsById";
import { Product } from "../core/types/Product";
import { addToCart } from "../core/services/cart";
import { selectCartItems } from "../core/store/selectors/cart";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { getCartItemsLocal } from "../utils/cart";

export const CartContext = createContext<any>([]);

type CartProviderProps = {
  children: JSX.Element[];
};

export const CartProvider = ({ children }: CartProviderProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const [isGotParams, setIsGotParams] = useState<boolean>(false);

  // getting cart from localStorage
  useEffect(() => {
    if (!isGotParams) {
      const fetchData = async () => {
        const cartItemsLocal = getCartItemsLocal();
        if (cartItemsLocal.length === 0) return;
        const cartItemIds = cartItemsLocal.map((item) => item.id);
        const cartItemQuanities = cartItemsLocal.map((item) => item.quantity);

        const products: Product[] = await getProductsByIds({
          productIds: cartItemIds,
        });
        products.forEach((product: Product, i: number) => {
          dispatch(addToCart(product, cartItemQuanities[i]));
        });
      };
      fetchData();
      setIsGotParams((prev) => !prev);
    }
  }, [dispatch, isGotParams]);

  const value = {
    cartItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
