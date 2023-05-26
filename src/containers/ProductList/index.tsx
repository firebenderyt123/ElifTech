import { getProductList } from "../../core/services/productList";
import {
  selectProductList,
  selectProductListIsLoading,
  selectProductListError,
} from "../../core/store/selectors/productList";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import ProductCard from "../../components/ProductCard";
import { Product as ProductType } from "../../core/types/Product";
import Spinner from "../../components/Spinner";

import React, { useEffect } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function ProductListBlock(): JSX.Element {
  const dispatch = useAppDispatch();
  const productList = useAppSelector(selectProductList);
  const isLoading = useAppSelector(selectProductListIsLoading);
  const error = useAppSelector(selectProductListError);

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  const productListElem = !isLoading && productList && (
    <Grid container justifyContent="center" spacing={2}>
      {productList.productList.map((product: ProductType) => (
        <Grid item key={product._id}>
          <ProductCard product={product}></ProductCard>
        </Grid>
      ))}
    </Grid>
  );
  const loaderElem = isLoading && <Spinner />;
  const errorElem = !isLoading && error && (
    <Alert severity="error">{error}</Alert>
  );

  return (
    <Box position="relative" minHeight="100vh">
      {productListElem}

      {loaderElem}
      {errorElem}
    </Box>
  );
}
