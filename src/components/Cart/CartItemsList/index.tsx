import React from "react";
import Stack from "@mui/material/Stack";
import CartItem from "../CartItem";
import StyledBox from "../../StyledBox";
import { CartItem as CartItemType } from "../../../core/types/CartItem";

type CartItemsListProps = {
  cartItems: CartItemType[];
  totalPrice: number;
  totalQuantity: number;
};

function CartItemsList({
  cartItems,
  totalPrice,
  totalQuantity,
}: CartItemsListProps): JSX.Element {
  return (
    <Stack spacing={2}>
      {cartItems.map((cartItem: CartItemType) => (
        <React.Fragment key={cartItem.product._id}>
          <CartItem product={cartItem.product} />
        </React.Fragment>
      ))}
    </Stack>
  );
}

export default CartItemsList;
