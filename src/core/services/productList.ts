import { ProductList } from "../types/ProductList";
import { getProductList as fetchProductList } from "../api/productList";
import {
  GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_ERROR,
} from "../store/constants/productList";
import { AppDispatch } from "../store";

type GetProductList = {
  limit: number;
  page: number;
  shopIds?: number[];
};

export const getProductList = ({
  limit = 20,
  page = 1,
  shopIds,
}: GetProductList) => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: GET_PRODUCT_LIST_REQUEST });

    try {
      const productList: ProductList = await fetchProductList(
        limit,
        page,
        shopIds
      );
      dispatch({ type: GET_PRODUCT_LIST_SUCCESS, productList });
    } catch (error: any) {
      dispatch({
        type: GET_PRODUCT_LIST_ERROR,
        error: JSON.stringify(error.data),
      });
    }
  };
};
