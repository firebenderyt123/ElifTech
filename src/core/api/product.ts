import { actionUrl, headers } from "../config/mongodb";
import { Product } from "../types/Product";
import axios from "axios";

type ResponseProduct = {
  data: {
    document: Product;
  };
};

export const getProduct = async (productId: number): Promise<Product> => {
  const data = JSON.stringify({
    collection: "products",
    database: "delivery",
    dataSource: "Cluster0",
    filter: { id: productId },
    projection: {
      id: 1,
      photo: 1,
      name: 1,
      price: 1,
    },
  });
  const config = {
    method: "post",
    url: `${actionUrl}/findOne`,
    headers: headers,
    data: data,
  };

  const response: ResponseProduct = await axios(config);
  const product: Product = response.data.document;
  return product;
};
