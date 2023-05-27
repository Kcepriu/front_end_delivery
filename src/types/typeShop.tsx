export interface IShop {
  _id: string;
  name: string;
  location: string;
  adress: string;
  [index: string]: string;
}
export interface IGoods {
  _id: string;
  name: string;
  urlPicture: string;
  price: number;
  shop: string;
  // createdAt: string;
  // updatedAt: string;
}

export interface IGoodsOrder {
  goods: string;
  count: number;
  sum: number;
  price: number;
}
export interface IOrder {
  _id: string;
  name: string;
  shop: string;
  phone: string;
  email: string;
  location: string;
  adress: string;
  sum: number;
  goodsDocument: IGoodsOrder[];
}

export const emptyOrder: IOrder = {
  _id: "",
  name: "",
  shop: "",
  phone: "",
  email: "",
  location: "",
  adress: "",
  sum: 0,
  goodsDocument: [],
};
