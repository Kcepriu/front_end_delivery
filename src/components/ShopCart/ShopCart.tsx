import { FC } from "react";
import clsx from "clsx";
// import type { IShop } from "../../types/typeShop";
import styles from "./ShopCart.module.scss";

interface IProps {
  active: boolean;
  name: string;
}

const ShopCart: FC<IProps> = ({ name, active }) => {
  return (
    <div className={clsx(styles.Cart, active && styles.active)}>
      <p>{name}</p>
    </div>
  );
};

export default ShopCart;
