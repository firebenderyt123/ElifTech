import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getShopList } from "../../core/services/shopList";
import { getProductList } from "../../core/services/productList";
import {
  selectShopList,
  selectShopListError,
  selectShopListIsLoading,
} from "../../core/store/selectors/shopList";
import CheckmarkSelect from "../../components/CheckmarkSelect";
import Spinner from "../../components/Spinner";

import React, { useEffect, useCallback } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Sidebar(): JSX.Element {
  const dispatch = useAppDispatch();
  const shopList = useAppSelector(selectShopList);
  const isLoading = useAppSelector(selectShopListIsLoading);
  const error = useAppSelector(selectShopListError);

  useEffect(() => {
    dispatch(getShopList());
  }, [dispatch]);

  const shopOnClickHandler = useCallback(
    (shopIds) => {
      dispatch(getProductList({ limit: 12, page: 1, shopIds: shopIds }));
    },
    [dispatch]
  );

  const shopListElem = !isLoading && shopList.length > 0 && (
    <Box maxWidth="100%">
      <CheckmarkSelect
        label="Shop"
        itemList={shopList}
        onClose={shopOnClickHandler}
      />
    </Box>
  );
  const loaderElem = isLoading && <Spinner size={50} />;
  const errorElem = !isLoading && error && (
    <Alert severity="error">{error}</Alert>
  );

  return (
    <Grid container flexDirection="column" alignItems="center" rowSpacing={2}>
      <Grid item>
        <Typography component="h3">Filters</Typography>
      </Grid>
      <Grid
        container
        item
        flexDirection="column"
        alignItems="center"
        rowSpacing={1}
        position="relative"
        minHeight="300px">
        {shopListElem}
        {loaderElem}
        {errorElem}
      </Grid>
    </Grid>
  );
}
