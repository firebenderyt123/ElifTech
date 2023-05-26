import Sidebar from "../containers/Sidebar";
import { getProductList } from "../core/services/productList";
import {
  selectProductList,
  selectProductListIsLoading,
  selectProductListError,
} from "../core/store/selectors/productList";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import Grid from "@mui/material/Grid";

export default function HomePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const productList = useAppSelector(selectProductList);
  const isLoading = useAppSelector(selectProductListIsLoading);
  const error = useAppSelector(selectProductListError);

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  console.log(productList, isLoading, error);

  return (
    <Grid container>
      <Grid item xs={12} sm={3} md={4}>
        <Sidebar />
      </Grid>
    </Grid>
  );
}
