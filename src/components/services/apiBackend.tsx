import axios from "axios";
import { URL_API } from "../../constants/api";
import type { IShop, IGoods } from "../../types/typeShop";

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
      shopId: shopId,
    },
  });

  const { code, data } = responsData;
  if (code !== 200) return [];

  return data;
};
