import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM,
} from "../constants/cart";
import { CartActions } from "../actions/cart";
import { CartItem } from "../../types/CartItem";

interface CartInterface {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

export type CartState = CartInterface;

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export default function cartReducer(
  state = initialState,
  action: CartActions
): CartState {
  switch (action.type) {
    case ADD_TO_CART: {
      const existingItemIndex = state.items.findIndex(
        (item) => item.product._id === action.item.product._id
      );

      let newItems: CartItem[] = [];
      if (existingItemIndex !== -1) {
        newItems = state.items.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              quantity: item.quantity + action.item.quantity,
            };
          } else {
            return item;
          }
        });
      } else {
        newItems = [...state.items, action.item];
      }
      const newTotalQuantity = state.totalQuantity + action.item.quantity;
      const newTotalPrice =
        state.totalPrice + action.item.product.price * action.item.quantity;

      return {
        ...state,
        items: newItems,
        totalQuantity: newTotalQuantity,
        totalPrice: newTotalPrice,
      };
    }
    case REMOVE_FROM_CART: {
      const itemRemoving = state.items.find(
        (item) => item.product._id === action.item.product._id
      );
      if (!itemRemoving) {
        return state;
      }

      const newItems = state.items.filter(
        (item) => item.product._id !== action.item.product._id
      );
      const newTotalQuantity = state.totalQuantity - itemRemoving.quantity;
      const newTotalPrice =
        state.totalPrice - itemRemoving.product.price * itemRemoving.quantity;

      return {
        ...state,
        items: newItems,
        totalQuantity: newTotalQuantity,
        totalPrice: newTotalPrice,
      };
    }
    case UPDATE_CART_ITEM: {
      const itemUpdating = state.items.find(
        (item) => item.product._id === action.item.product._id
      );
      if (!itemUpdating) {
        return state;
      }

      const newItems = state.items.map((item) => {
        if (item.product._id === action.item.product._id) {
          return {
            ...item,
            quantity: action.item.quantity,
          };
        }

        return item;
      });

      const newTotalQuantity =
        state.totalQuantity - itemUpdating.quantity + action.item.quantity;
      const newTotalPrice =
        state.totalPrice -
        itemUpdating.product.price * itemUpdating.quantity +
        action.item.product.price * action.item.quantity;

      return {
        ...state,
        items: newItems,
        totalQuantity: newTotalQuantity,
        totalPrice: newTotalPrice,
      };
    }
    default:
      return state;
  }
}
