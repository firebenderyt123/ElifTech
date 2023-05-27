import { RootState } from "../";
import { ProductList } from "../../types/ProductList";

export const selectProductListIsLoading = (state: RootState): boolean =>
  state.productList.isLoading;
export const selectProductList = (state: RootState): ProductList | null =>
  state.productList.productList;
export const selectProductListError = (state: RootState): string | null =>
  state.productList.error;
