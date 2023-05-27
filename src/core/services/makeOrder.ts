import { OrderForm } from "../types/OrderForm";
import { makeOrder as sendOrder } from "../api/makeOrder";
import {
  MAKE_ORDER_REQUEST,
  MAKE_ORDER_SUCCESS,
  MAKE_ORDER_ERROR,
  RESET_ORDER,
} from "../store/constants/makeOrder";
import { AppDispatch } from "../store";

export const makeOrder = (order: OrderForm) => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: MAKE_ORDER_REQUEST });

    try {
      await sendOrder(order);
      dispatch({ type: MAKE_ORDER_SUCCESS });
    } catch (error: any) {
      dispatch({ type: MAKE_ORDER_ERROR, error: JSON.stringify(error.data) });
    }
  };
};

export const resetOrder = () => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: RESET_ORDER });
  };
};
