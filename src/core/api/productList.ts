import { actionUrl, headers } from "../config/mongodb";
import { Product } from "../models/Product";
import axios from "axios";

interface ResponseProductList {
  data: {
    documents: Product[];
  };
}

export const getProductList = async (limit: number): Promise<Product[]> => {
  const data = JSON.stringify({
    collection: "products",
    database: "delivery",
    dataSource: "Cluster0",
    filter: {},
    projection: {
      product_id: 1,
      photo: 1,
      name: 1,
      price: 1,
    },
    limit: limit,
  });
  const config = {
    method: "post",
    url: `${actionUrl}/find`,
    headers: headers,
    data: data,
  };

  const response: ResponseProductList = await axios(config);
  const productList: Product[] = response.data.documents;
  return productList;
};
