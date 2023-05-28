import { Shop } from "./Shop";

export type Product = {
  _id: string;
  id: number;
  photo: string;
  name: string;
  shop: Shop;
  description: string;
  price: number;
  currency: string;
};

export type SmallProduct = {
  id: number;
  quantity: number;
};
