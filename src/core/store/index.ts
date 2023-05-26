import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/product";
import productListReducer from "./reducers/productList";

export const store = configureStore({
  reducer: {
    product: productReducer,
    productList: productListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
