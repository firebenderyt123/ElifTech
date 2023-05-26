import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getShopList } from "../../core/services/shopList";
import {
  selectShopList,
  selectShopListError,
  selectShopListIsLoading,
} from "../../core/store/selectors/shopList";
import { Shop } from "../../core/types/Shop";
import Spinner from "../../components/Spinner";

import React, { useEffect } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
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

  const shopListElem = !isLoading && shopList.length > 0 && (
    <React.Fragment>
      {shopList.map((shop: Shop) => (
        <Grid item key={shop._id}>
          <Button variant="outlined">{shop.name}</Button>
        </Grid>
      ))}
    </React.Fragment>
  );
  const loaderElem = isLoading && <Spinner size={50} />;
  const errorElem = !isLoading && error && (
    <Alert severity="error">{error}</Alert>
  );

  return (
    <Grid container flexDirection="column" alignItems="center" rowSpacing={2}>
      <Grid item>
        <Typography component="h3">Shops:</Typography>
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
