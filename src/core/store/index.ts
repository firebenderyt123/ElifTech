import cartReducer from "./reducers/cart";
import makeOrderReducer from "./reducers/makeOrder";
import productReducer from "./reducers/product";
import productListReducer from "./reducers/productList";
import shopListReducer from "./reducers/shopList";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    makeOrder: makeOrderReducer,
    product: productReducer,
    productList: productListReducer,
    shopList: shopListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
