import {
  MAKE_ORDER_REQUEST,
  MAKE_ORDER_SUCCESS,
  MAKE_ORDER_ERROR,
  RESET_ORDER,
} from "../constants/makeOrder";
import { MakeOrderActions } from "../actions/makeOrder";

interface MakeOrderInterface {
  isLoading: boolean;
  success: boolean | null;
  error: string | null;
}

export type MakeOrderState = MakeOrderInterface;

const initialState: MakeOrderState = {
  isLoading: false,
  success: null,
  error: null,
};

export default function makeOrderReducer(
  state = initialState,
  action: MakeOrderActions
): MakeOrderState {
  switch (action.type) {
    case MAKE_ORDER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        success: null,
        error: null,
      };
    }
    case MAKE_ORDER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        success: true,
        error: null,
      };
    }
    case MAKE_ORDER_ERROR: {
      return {
        ...state,
        isLoading: false,
        success: false,
        error: action.error,
      };
    }
    case RESET_ORDER: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
}
