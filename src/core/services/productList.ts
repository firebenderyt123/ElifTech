import { ProductList } from "../types/ProductList";
import { getProductList as fetchProductList } from "../api/productList";
import {
  GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_ERROR,
} from "../store/constants/productList";
import { AppDispatch } from "../store";

export const getProductList = (limit: number = 20, page: number = 1) => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: GET_PRODUCT_LIST_REQUEST });

    try {
      const productList: ProductList = await fetchProductList(limit, page);
      dispatch({ type: GET_PRODUCT_LIST_SUCCESS, productList });
    } catch (error: any) {
      dispatch({
        type: GET_PRODUCT_LIST_ERROR,
        error: JSON.stringify(error.data),
      });
    }
  };
};
