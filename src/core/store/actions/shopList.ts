import {
  GET_SHOP_LIST_REQUEST,
  GET_SHOP_LIST_SUCCESS,
  GET_SHOP_LIST_ERROR,
} from "../constants/shopList";
import { Shop } from "../../types/Shop";

interface GetShopListRequestAction {
  type: typeof GET_SHOP_LIST_REQUEST;
}

interface GetShopListSuccessAction {
  type: typeof GET_SHOP_LIST_SUCCESS;
  shopList: Shop[];
}

interface GetShopListErrorAction {
  type: typeof GET_SHOP_LIST_ERROR;
  error: string;
}

export type ShopListActions =
  | GetShopListRequestAction
  | GetShopListSuccessAction
  | GetShopListErrorAction;

export const getShopListRequest = (): GetShopListRequestAction => ({
  type: GET_SHOP_LIST_REQUEST,
});

export const getShopListSuccess = (
  shopList: Shop[]
): GetShopListSuccessAction => ({
  type: GET_SHOP_LIST_SUCCESS,
  shopList,
});

export const getShopListError = (error: string): GetShopListErrorAction => ({
  type: GET_SHOP_LIST_ERROR,
  error,
});
