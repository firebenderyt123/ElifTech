import { removeFromCart, updateCartItem } from "../../../core/services/cart";
import { selectCartItems } from "../../../core/store/selectors/cart";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";

function CartItemsList(): JSX.Element {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  console.log(cartItems);
  return <></>;
}

export default CartItemsList;
