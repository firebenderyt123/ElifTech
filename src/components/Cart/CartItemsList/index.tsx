import React, { useCallback } from "react";
import Stack from "@mui/material/Stack";
import CartItem from "../CartItem";
import { CartItem as CartItemType } from "../../../core/types/CartItem";
import { Product } from "../../../core/types/Product";

type CartItemsListProps = {
  cartItems: CartItemType[];
  // eslint-disable-next-line no-unused-vars
  onChange?: (product: Product, quantity: number) => void;
};

function CartItemsList({
  cartItems,
  onChange,
}: CartItemsListProps): JSX.Element {
  const onChangeHandler = useCallback(
    (cartItem: CartItemType, quantity: number) => {
      onChange && onChange(cartItem.product, quantity);
    },
    [onChange]
  );

  return (
    <Stack spacing={2}>
      {cartItems.map((cartItem: CartItemType) => (
        <React.Fragment key={cartItem.product._id}>
          <CartItem
            cartItem={cartItem}
            onChange={(quantity) => onChangeHandler(cartItem, quantity)}
          />
        </React.Fragment>
      ))}
    </Stack>
  );
}

export default CartItemsList;
