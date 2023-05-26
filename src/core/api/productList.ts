import { actionUrl, headers } from "../config/mongodb";
import { Product } from "../types/Product";
import { ProductList } from "../types/ProductList";
import axios from "axios";

type ResponseProducts = {
  data: {
    documents: Product[];
  };
};

export const getProductList = async (
  limit: number,
  page: number
): Promise<ProductList> => {
  const data = JSON.stringify({
    collection: "products",
    database: "delivery",
    dataSource: "Cluster0",
    filter: {},
    projection: {
      product_id: 1,
      photo: 1,
      name: 1,
      description: 1,
      price: 1,
      currency: 1,
    },
    limit: limit,
    skip: (page - 1) * limit,
  });
  const config = {
    method: "post",
    url: `${actionUrl}/find`,
    headers: headers,
    data: data,
  };

  const response: ResponseProducts = await axios(config);
  const totalDocuments: number = response.data.documents.length;
  const totalPages: number = Math.ceil(totalDocuments / limit);
  const productList: ProductList = {
    productList: response.data.documents,
    currentPage: page,
    totalPages: totalPages,
  };
  return productList;
};
