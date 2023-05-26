import {
  GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_ERROR,
} from "../constants/productList";
import { Product } from "../../models/Product";

interface GetProductListRequestAction {
  type: typeof GET_PRODUCT_LIST_REQUEST;
}

interface GetProductListSuccessAction {
  type: typeof GET_PRODUCT_LIST_SUCCESS;
  productList: Product[];
}

interface GetProductListErrorAction {
  type: typeof GET_PRODUCT_LIST_ERROR;
  error: string;
}

export type ProductListActions =
  | GetProductListRequestAction
  | GetProductListSuccessAction
  | GetProductListErrorAction;

export const getProductListRequest = (): GetProductListRequestAction => ({
  type: GET_PRODUCT_LIST_REQUEST,
});

export const getProductListSuccess = (
  productList: Product[]
): GetProductListSuccessAction => ({
  type: GET_PRODUCT_LIST_SUCCESS,
  productList,
});

export const getProductListError = (
  error: string
): GetProductListErrorAction => ({
  type: GET_PRODUCT_LIST_ERROR,
  error,
});
