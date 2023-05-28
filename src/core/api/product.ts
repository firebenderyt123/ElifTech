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
        $match: { id: productId },
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

  const response: ResponseProduct = await axios(config);
  const product: Product = response.data.document;
  return product;
};
