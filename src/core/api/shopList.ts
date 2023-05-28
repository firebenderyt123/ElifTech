import { actionUrl, headers } from "../config/mongodb";
import { Shop } from "../types/Shop";
import axios from "axios";

type ResponseShops = {
  data: {
    documents: Shop[];
  };
};

export const getShopList = async (): Promise<Shop[]> => {
  const data = JSON.stringify({
    collection: "shops",
    database: "delivery",
    dataSource: "Cluster0",
    projection: {
      id: 1,
      photo: 1,
      name: 1,
      description: 1,
      price: 1,
      currency: 1,
    },
  });
  const config = {
    method: "post",
    url: `${actionUrl}/find`,
    headers: headers,
    data: data,
  };

  const response: ResponseShops = await axios(config);
  return response.data.documents;
};
