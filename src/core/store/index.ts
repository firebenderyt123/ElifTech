import cartReducer from "./reducers/cart";
import productReducer from "./reducers/product";
import productListReducer from "./reducers/productList";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    productList: productListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
