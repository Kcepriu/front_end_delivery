import { FC } from "react";
import clsx from "clsx";
import type { IShop } from "../../types/typeShop";
import styles from "./ShopCart.module.scss";

interface IProps {
  active: boolean;
  shop: IShop;
}

const ShopCart: FC<IProps> = ({ shop, active }) => {
  return (
    <div className={clsx(styles.Cart, active && styles.active)}>
      <p>{shop.name}</p>
    </div>
  );
};

export default ShopCart;
