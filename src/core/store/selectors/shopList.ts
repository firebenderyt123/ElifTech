import { RootState } from "../";

export const selectShopListIsLoading = (state: RootState) =>
  state.shopList.isLoading;
export const selectShopList = (state: RootState) => state.shopList.shopList;
export const selectShopListError = (state: RootState) => state.shopList.error;
