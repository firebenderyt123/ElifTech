import {
  GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_ERROR,
} from "../constants/productList";
import { ProductListActions } from "../actions/productList";
import { Product } from "../../models/Product";

interface ProductListInterface {
  isLoading: boolean;
  productList: Product[] | null;
  error: string | null;
}

export type ProductListState = ProductListInterface;

const initialState: ProductListState = {
  isLoading: false,
  productList: null,
  error: null,
};

export default function productListReducer(
  state = initialState,
  action: ProductListActions
): ProductListState {
  switch (action.type) {
    case GET_PRODUCT_LIST_REQUEST: {
      return {
        ...state,
        isLoading: true,
        productList: null,
        error: null,
      };
    }
    case GET_PRODUCT_LIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        productList: action.productList,
        error: null,
      };
    }
    case GET_PRODUCT_LIST_ERROR: {
      return {
        ...state,
        isLoading: false,
        productList: null,
        error: action.error,
      };
    }
    default:
      return state;
  }
}
