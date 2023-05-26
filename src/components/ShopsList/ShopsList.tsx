import { FC } from "react";
import { NavLink, useParams } from "react-router-dom";
import { nameRouters } from "../../constants/nameRouters";

import ShopCart from "../ShopCart/ShopCart";
import style from "./ShopsList.module.scss";

const shops = [
  "mc Donalds",
  "CFK",
  "Shop 1",
  "Shop 2",
  "Shop 3",
  "Shop 1",
  "Shop 2",
  "Shop 3",
  "Shop 1",
  "Shop 2",
  "Shop 3",
];

const ShopsList: FC = () => {
  const { shopId } = useParams();

  return (
    <div className={style.WrapList}>
      <ul className={style.ListShop}>
        {shops.map((element, index) => {
          return (
            <li key={index}>
              <NavLink to={`${nameRouters.shop}/${index}`}>
                <ShopCart name={element} active={Number(shopId) === index} />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShopsList;
