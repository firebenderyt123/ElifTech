import {
  MAKE_ORDER_REQUEST,
  MAKE_ORDER_SUCCESS,
  MAKE_ORDER_ERROR,
  RESET_ORDER,
} from "../constants/makeOrder";

interface MakeOrderRequestAction {
  type: typeof MAKE_ORDER_REQUEST;
}

interface MakeOrderSuccessAction {
  type: typeof MAKE_ORDER_SUCCESS;
}

interface MakeOrderErrorAction {
  type: typeof MAKE_ORDER_ERROR;
  error: string;
}

interface ResetOrderAction {
  type: typeof RESET_ORDER;
}

export type MakeOrderActions =
  | MakeOrderRequestAction
  | MakeOrderSuccessAction
  | MakeOrderErrorAction
  | ResetOrderAction;

export const makeOrderRequest = (): MakeOrderRequestAction => ({
  type: MAKE_ORDER_REQUEST,
});

export const makeOrderSuccess = (): MakeOrderSuccessAction => ({
  type: MAKE_ORDER_SUCCESS,
});

export const makeOrderError = (error: string): MakeOrderErrorAction => ({
  type: MAKE_ORDER_ERROR,
  error,
});

export const resetOrder = (): ResetOrderAction => ({
  type: RESET_ORDER,
});
