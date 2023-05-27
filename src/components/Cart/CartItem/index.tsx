import React, { useCallback } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import StyledBox from "../../StyledBox";
import { Product } from "../../../core/types/Product";
import defaultImage from "../../../assets/images/default.png";
import { removeFromCart } from "../../../core/services/cart";
import { useAppDispatch } from "../../../hooks/redux";

interface CartItemProps {
  product: Product;
  [key: string]: any;
}

function CartItem({ product, ...rest }: CartItemProps): JSX.Element {
  const { name, shop, photo, description, price, currency } = product;
  const dispatch = useAppDispatch();

  const removeFromCartHandler = useCallback(() => {
    dispatch(removeFromCart(product, 1));
  }, [dispatch, product]);

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
            <Grid item xs={5}>
              <Typography textAlign="right">{shop.name}</Typography>
            </Grid>
          </Grid>
          <Typography>{description.slice(0, 50) + "..."}</Typography>
          <Grid
            container
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center">
            <Grid item>
              <Typography>{`${price.toFixed(2)} ${currency}`}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </StyledBox>
  );
}

export default React.memo(CartItem);
