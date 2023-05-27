import axios from "axios";
import { URL_API } from "../constants/api";
import type { IShop, IGoods, IOrder, IFilter } from "../types/typeShop";
import { emptyGoods } from "../types/typeShop";

export const getShops = async (
  controller: AbortController
): Promise<IShop[]> => {
  const { data: responsData } = await axios.get("/api/shops", {
    baseURL: URL_API,
    signal: controller.signal,
  });

  const { code, data } = responsData;
  if (code !== 200) return [];

  return data;
};

export const getGoodsShop = async (
  controller: AbortController,
  shopId: string
): Promise<IGoods[]> => {
  const { data: responsData } = await axios.get("/api/goods", {
    baseURL: URL_API,
    signal: controller.signal,
    params: {
      shop: shopId,
    },
  });

  const { code, data } = responsData;
  if (code !== 200) return [];

  return data;
};

export const getInfoGoods = async (
  goodsId: string,
  controller: AbortController
): Promise<IGoods> => {
  const { data: responsData } = await axios.get(`/api/goods/${goodsId}`, {
    baseURL: URL_API,
    signal: controller.signal,
  });

  const { code, data } = responsData;
  if (code !== 200) return { ...emptyGoods };

  return data;
};

export const createOrder = async (order: IOrder): Promise<boolean> => {
  // delete redundant data
  const { _id, ...newOrder } = order;

  //TODO  DELETED
  newOrder.location = "50.49197873085457, 30.343034170300555";

  const { data: responsData } = await axios.post(`/api/orders`, newOrder, {
    baseURL: URL_API,
  });

  const { code } = responsData;

  if (code !== 201) return false;

  return true;
};

export const getOrders = async (
  filter: IFilter,
  controller: AbortController
): Promise<IOrder[]> => {
  if (filter.id) {
    const result = await getOrdersById(filter.id, controller);
    return result;
  } else if (filter.email) {
    //Шуккаємо по email
    const result = await getOrdersByField("email", filter.email, controller);
    return result;
  } else if (filter.phone) {
    //Шуккаємо по phone
    const result = await getOrdersByField("phone", filter.phone, controller);
    return result;
  }

  const result = await getAllOrders(controller);
  return result;
};

// * getAllOrders
export const getAllOrders = async (
  controller: AbortController
): Promise<IOrder[]> => {
  const { data: responsData } = await axios.get("/api/orders", {
    baseURL: URL_API,
    signal: controller.signal,
  });

  const { code, data } = responsData;
  if (code !== 200) return [];

  return data;
};

// * getOrdersById
export const getOrdersById = async (
  id: string,
  controller: AbortController
): Promise<IOrder[]> => {
  const ADD_URL = !id ? "" : `/${id}`;
  console.log("getOrdersById", ADD_URL);

  const { data: responsData } = await axios.get("/api/orders" + ADD_URL, {
    baseURL: URL_API,
    signal: controller.signal,
  });

  const { code, data } = responsData;
  if (code !== 200) return [];

  return [data];
};

// * getOrdersByField
export const getOrdersByField = async (
  nameField: string,
  value: string,
  controller: AbortController
): Promise<IOrder[]> => {
  const { data: responsData } = await axios.get("/api/orders", {
    baseURL: URL_API,
    signal: controller.signal,
    params: {
      [nameField]: value,
    },
  });

  const { code, data } = responsData;
  if (code !== 200) return [];

  return data;
};
