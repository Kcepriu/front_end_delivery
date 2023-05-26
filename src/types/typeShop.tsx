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

interface IGoodsOrder {
  goods: string;
  count: number;
  sum: number;
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
