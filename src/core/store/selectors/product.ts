import { RootState } from "../";

export const selectProductIsLoading = (state: RootState) =>
  state.product.isLoading;
export const selectProduct = (state: RootState) => state.product.product;
export const selectProductError = (state: RootState) => state.product.error;
