import EmptyCard from "./EmptyCard";
import { Product } from "../../core/types/Product";
import defaultImage from "../../assets/images/default.png";
import { addToCart } from "../../core/services/cart";
import {
  selectCartItems,
  selectCartTotalQuantity,
  selectCartTotalPrice,
} from "../../core/store/selectors/cart";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import React, { useCallback } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  product: Product;
  [key: string]: any;
};

function ProductCard({ product, ...rest }: ProductCardProps): JSX.Element {
  const { id, name, shop, photo, description, price, currency } = product;
  const dispatch = useAppDispatch();
  // const cartItems = useAppSelector(selectCartItems);
  // const totalQuantity = useAppSelector(selectCartTotalQuantity);
  // const totaPrice = useAppSelector(selectCartTotalPrice);

  const addToCartHandler = useCallback(() => {
    dispatch(addToCart(product, 1));
  }, [dispatch, product]);

  return (
    <EmptyCard {...rest}>
      <Link href={`/products/${id}`} passHref>
        <Box>
          <Image
            width="255"
            height="300"
            src={photo || defaultImage}
            alt={name}
            priority={true}
          />
        </Box>
      </Link>
      <Box sx={{ px: 2, pb: 2 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography component="h3">{name}</Typography>
          </Grid>
          <Grid item>
            <Button href={`/shop/${shop.id}`}>{shop.name}</Button>
          </Grid>
        </Grid>
        <Typography component="p">
          {description.slice(0, 50) + "..."}
        </Typography>
        <Grid
          container
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          <Grid item>
            <Typography component="p">{`${price.toFixed(
              2
            )} ${currency}`}</Typography>
          </Grid>
          <Grid item>
            <Button onClick={addToCartHandler} variant="contained">
              <ShoppingCartOutlinedIcon />
            </Button>
          </Grid>
        </Grid>
      </Box>
    </EmptyCard>
  );
}

export default React.memo(ProductCard);
