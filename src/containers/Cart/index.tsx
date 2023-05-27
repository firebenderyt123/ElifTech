import { useCallback, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  CartItemsList,
  CartPageMessage,
  OrderForm,
} from "../../components/Cart";
import StyledBox from "../../components/StyledBox";
import { makeOrder } from "../../core/services/makeOrder";
import { clearCart } from "../../core/services/cart";
import {
  selectCartItems,
  selectCartTotalPrice,
  selectCartTotalQuantity,
} from "../../core/store/selectors/cart";
import { selectMakeOrderSuccess } from "../../core/store/selectors/makeOrder";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  OrderForm as OrderFormType,
  OrderFormData,
} from "../../core/types/OrderForm";
import { itemsToSmallProducts } from "../../utils/cart";

function CartContainer(): JSX.Element {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectCartTotalPrice);
  const totalQuantity = useAppSelector(selectCartTotalQuantity);
  const isOrderSuccess = useAppSelector(selectMakeOrderSuccess);

  const makeOrderHandler = useCallback(
    (formData: OrderFormData) => {
      if (totalPrice > 0) {
        const order: OrderFormType = {
          ...formData,
          total_price: totalPrice,
          total_products: totalQuantity,
          products_list: itemsToSmallProducts(cartItems),
        };
        dispatch(makeOrder(order));
      }
    },
    [cartItems, dispatch, totalPrice, totalQuantity]
  );

  useEffect(() => {
    if (isOrderSuccess) {
      dispatch(clearCart());
    }
  }, [dispatch, isOrderSuccess]);

  const emptyCartMessage = !isOrderSuccess && totalPrice == 0 && (
    <CartPageMessage message="Oops.. Your cart is empty!" />
  );
  const orderForm = totalPrice > 0 && (
    <Grid container columnSpacing="1rem" justifyContent="center">
      <Grid
        item
        xs={6}
        minWidth="300px"
        mb="1rem"
        sx={{ order: { xs: 2, md: 1 } }}>
        <StyledBox height="475.63px" display="flex" alignItems="center">
          <OrderForm onSubmit={makeOrderHandler} />
        </StyledBox>
      </Grid>
      <Grid
        item
        xs={6}
        mb="1rem"
        minWidth="300px"
        overflow="auto"
        sx={{
          maxHeight: { xs: "192px", md: "495px" },
          order: { xs: 1, md: 2 },
        }}>
        <CartItemsList
          cartItems={cartItems}
          totalPrice={totalPrice}
          totalQuantity={totalQuantity}
        />
      </Grid>
    </Grid>
  );
  const orderDone = isOrderSuccess && <CartPageMessage message="Success!" />;

  return (
    <Box>
      {emptyCartMessage}
      {orderForm}
      {orderDone}
    </Box>
  );
}

export default CartContainer;
