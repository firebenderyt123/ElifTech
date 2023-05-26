import {
  GET_SHOP_LIST_REQUEST,
  GET_SHOP_LIST_SUCCESS,
  GET_SHOP_LIST_ERROR,
} from "../constants/shopList";
import { ShopListActions } from "../actions/shopList";
import { Shop } from "../../types/Shop";

interface ShopListInterface {
  isLoading: boolean;
  shopList: Shop[];
  error: string | null;
}

export type ShopListState = ShopListInterface;

const initialState: ShopListState = {
  isLoading: false,
  shopList: [],
  error: null,
};

export default function shopListReducer(
  state = initialState,
  action: ShopListActions
): ShopListState {
  switch (action.type) {
    case GET_SHOP_LIST_REQUEST: {
      return {
        ...state,
        isLoading: true,
        shopList: [],
        error: null,
      };
    }
    case GET_SHOP_LIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        shopList: action.shopList,
        error: null,
      };
    }
    case GET_SHOP_LIST_ERROR: {
      return {
        ...state,
        isLoading: false,
        shopList: [],
        error: action.error,
      };
    }
    default:
      return state;
  }
}
