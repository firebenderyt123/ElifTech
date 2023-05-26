import { RootState } from "../";

export const selectProductListIsLoading = (state: RootState) =>
  state.product.isLoading;
export const selectProductList = (state: RootState) =>
  state.productList.productList;
export const selectProductListError = (state: RootState) => state.product.error;
