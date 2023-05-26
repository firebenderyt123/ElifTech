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
  page: number,
  shopIds?: number[]
): Promise<ProductList> => {
  const match =
    shopIds && shopIds.length > 0 ? { "shop.id": { $in: shopIds } } : {};

  const data = JSON.stringify({
    collection: "products",
    database: "delivery",
    dataSource: "Cluster0",
    pipeline: [
      {
        $lookup: {
          from: "shops",
          localField: "shopId",
          foreignField: "id",
          as: "shop",
        },
      },
      {
        $unwind: "$shop",
      },
      {
        $match: match,
      },
      {
        $limit: limit,
      },
      {
        $skip: (page - 1) * limit,
      },
      {
        $project: {
          id: 1,
          photo: 1,
          name: 1,
          description: 1,
          shop: { id: "$shop.id", name: "$shop.name" },
          price: 1,
          currency: 1,
        },
      },
    ],
  });
  const config = {
    method: "post",
    url: `${actionUrl}/aggregate`,
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
