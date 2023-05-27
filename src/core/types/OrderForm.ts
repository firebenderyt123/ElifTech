import { SmallProduct } from "./Product";

export type OrderFormData = {
  address: string;
  name: string;
  email: string;
  phone: string;
};

export type OrderForm = {
  address: string;
  name: string;
  email: string;
  phone: string;
  total_price: number;
  total_products: number;
  products_list: SmallProduct[];
};
