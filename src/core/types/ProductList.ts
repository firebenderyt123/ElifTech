import { Product } from "./Product";

export type ProductList = {
  productList: Product[];
  currentPage: number;
  totalPages: number;
};
