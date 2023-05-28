import { RootState } from "../";

export const selectMakeOrderIsLoading = (state: RootState): boolean =>
  state.makeOrder.isLoading;
export const selectMakeOrderSuccess = (state: RootState): boolean | null =>
  state.makeOrder.success;
export const selectMakeOrderError = (state: RootState): string | null =>
  state.makeOrder.error;
