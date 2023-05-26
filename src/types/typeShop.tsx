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
  createdAt: string;
  updatedAt: string;
}
