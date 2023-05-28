import { Shop } from "../types/Shop";
import { getShopList as fetchShopList } from "../api/shopList";
import {
  GET_SHOP_LIST_REQUEST,
  GET_SHOP_LIST_SUCCESS,
  GET_SHOP_LIST_ERROR,
} from "../store/constants/shopList";
import { AppDispatch } from "../store";

export const getShopList = () => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: GET_SHOP_LIST_REQUEST });

    try {
      const shopList: Shop[] = await fetchShopList();
      dispatch({ type: GET_SHOP_LIST_SUCCESS, shopList });
    } catch (error: any) {
      dispatch({
        type: GET_SHOP_LIST_ERROR,
        error: JSON.stringify(error.data),
      });
    }
  };
};
