import { Product } from "../models/Product";
import { getProduct as fetchProduct } from "../api/product";
import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
} from "../store/constants/product";
import { AppDispatch } from "../store";

export const getProduct = (productId: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: GET_PRODUCT_REQUEST });

    try {
      const product: Product = await fetchProduct(productId);
      dispatch({ type: GET_PRODUCT_SUCCESS, product });
    } catch (error: any) {
      dispatch({ type: GET_PRODUCT_ERROR, error: JSON.stringify(error.data) });
    }
  };
};
