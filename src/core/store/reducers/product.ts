import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
} from "../constants/product";
import { ProductActions } from "../actions/product";
import { Product } from "../../types/Product";

interface ProductInterface {
  isLoading: boolean;
  product: Product | null;
  error: string | null;
}

export type ProductState = ProductInterface;

const initialState: ProductState = {
  isLoading: false,
  product: null,
  error: null,
};

export default function productReducer(
  state = initialState,
  action: ProductActions
): ProductState {
  switch (action.type) {
    case GET_PRODUCT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        product: null,
        error: null,
      };
    }
    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        product: action.product,
        error: null,
      };
    }
    case GET_PRODUCT_ERROR: {
      return {
        ...state,
        isLoading: false,
        product: null,
        error: action.error,
      };
    }
    default:
      return state;
  }
}
