import { actionUrl, headers } from "../config/mongodb";
import { OrderForm } from "../types/OrderForm";
import axios from "axios";

export const makeOrder = async (order: OrderForm): Promise<void> => {
  const data = JSON.stringify({
    collection: "orders",
    database: "delivery",
    dataSource: "Cluster0",
    document: order,
  });
  const config = {
    method: "post",
    url: `${actionUrl}/insertOne`,
    headers: headers,
    data: data,
  };

  await axios(config);
};
