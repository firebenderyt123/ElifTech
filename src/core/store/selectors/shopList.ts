import { RootState } from "../";
import { Shop } from "../../types/Shop";

export const selectShopListIsLoading = (state: RootState): boolean =>
  state.shopList.isLoading;
export const selectShopList = (state: RootState): Shop[] =>
  state.shopList.shopList;
export const selectShopListError = (state: RootState): string | null =>
  state.shopList.error;
