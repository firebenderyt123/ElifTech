import { Product } from "../models/Product";
import { getProductList as fetchProductList } from "../api/productList";
import {
  GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_ERROR,
} from "../store/constants/productList";
import { AppDispatch } from "../store";

export const getProductList = (limit: number = 20) => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: GET_PRODUCT_LIST_REQUEST });

    try {
      const productList: Product[] = await fetchProductList(limit);
      dispatch({ type: GET_PRODUCT_LIST_SUCCESS, productList });
    } catch (error: any) {
      dispatch({
        type: GET_PRODUCT_LIST_ERROR,
        error: JSON.stringify(error.data),
      });
    }
  };
};
