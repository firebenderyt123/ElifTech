import React, { useCallback } from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import Image from "next/image";

import QuantityField from "../QuantityField";
import StyledBox from "../../StyledBox";
import { CartItem as CartItemType } from "../../../core/types/CartItem";
import defaultImage from "../../../assets/images/default.png";
import { removeFromCart } from "../../../core/services/cart";
import { useAppDispatch } from "../../../hooks/redux";

interface CartItemProps {
  cartItem: CartItemType;
  // eslint-disable-next-line no-unused-vars
  onChange?: (quantity: number) => void;
  [key: string]: any;
}

function CartItem({ cartItem, onChange, ...rest }: CartItemProps): JSX.Element {
  const {
    product,
    product: { name, photo, description, price, currency },
    quantity,
  } = cartItem;
  const dispatch = useAppDispatch();

  const removeFromCartHandler = useCallback(() => {
    dispatch(removeFromCart(product, 1));
  }, [dispatch, product]);

  const onChangeHandler = useCallback(
    (quantity: number) => {
      onChange && onChange(quantity);
    },
    [onChange]
  );

  return (
    <StyledBox {...rest}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing="1rem">
        <Grid item xs={4}>
          <Image
            width="255"
            height="150"
            src={photo || defaultImage}
            alt={name}
            priority={true}
          />
        </Grid>
        <Grid container item xs={8}>
          <Grid
            container
            item
            alignItems="center"
            justifyContent="space-between">
            <Grid item xs={7}>
              <Typography variant="h4" sx={{ overflow: "hidden" }}>
                {name}
              </Typography>
            </Grid>
            <Grid item xs={5} display="flex" justifyContent="flex-end">
              <IconButton onClick={removeFromCartHandler} color="error">
                <DeleteForeverRoundedIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Typography>{description.slice(0, 50) + "..."}</Typography>
          <Grid
            container
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center">
            <Grid item xs={12} md={3}>
              <Typography>{`${price.toFixed(2)} ${currency}`}</Typography>
            </Grid>
            <Grid item xs={12} md={9} justifyContent="flex-end">
              <QuantityField
                defaultValue={quantity}
                onChange={onChangeHandler}
                sx={{ "& input": { padding: "0.2rem" } }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </StyledBox>
  );
}

export default React.memo(CartItem);
