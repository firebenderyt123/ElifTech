import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
} from "../constants/product";
import { Product } from "../../types/Product";

interface GetProductRequestAction {
  type: typeof GET_PRODUCT_REQUEST;
}

interface GetProductSuccessAction {
  type: typeof GET_PRODUCT_SUCCESS;
  product: Product;
}

interface GetProductErrorAction {
  type: typeof GET_PRODUCT_ERROR;
  error: string;
}

export type ProductActions =
  | GetProductRequestAction
  | GetProductSuccessAction
  | GetProductErrorAction;

export const getProductRequest = (): GetProductRequestAction => ({
  type: GET_PRODUCT_REQUEST,
});

export const getProductSuccess = (
  product: Product
): GetProductSuccessAction => ({
  type: GET_PRODUCT_SUCCESS,
  product,
});

export const getProductError = (error: string): GetProductErrorAction => ({
  type: GET_PRODUCT_ERROR,
  error,
});
