import { actionUrl, headers } from "../config/mongodb";
import { Product } from "../types/Product";
import axios from "axios";

type ResponseProducts = {
  data: {
    documents: Product[];
  };
};

type GetProductsByIds = {
  productIds: number[];
};

export const getProductsByIds = async ({
  productIds,
}: GetProductsByIds): Promise<Product[]> => {
  const match =
    productIds && productIds.length > 0 ? { id: { $in: productIds } } : {};

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
  return response.data.documents;
};
