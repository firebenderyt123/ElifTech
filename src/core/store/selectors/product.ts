import { RootState } from "../";
import { Product } from "../../types/Product";

export const selectProductIsLoading = (state: RootState): boolean =>
  state.product.isLoading;
export const selectProduct = (state: RootState): Product | null =>
  state.product.product;
export const selectProductError = (state: RootState): string | null =>
  state.product.error;
