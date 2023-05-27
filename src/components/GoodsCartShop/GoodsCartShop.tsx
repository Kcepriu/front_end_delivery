import { FC } from "react";
// import clsx from "clsx";
import { useOrder } from "../../hooks/contextOrder";
import type { IGoods } from "../../types/typeShop";
import styles from "./GoodsCartShop.module.scss";

interface IProps {
  goods: IGoods;
}

const GoodsCartShop: FC<IProps> = ({ goods }) => {
  const { addGoods, setFiledToOrder } = useOrder();

  const handlerOnClick = () => {
    setFiledToOrder("shop", goods.shop);
    addGoods(goods, 1);
  };

  return (
    <div className={styles.CartGoods}>
      <img
        src={goods.urlPicture}
        alt={goods.name}
        height="20"
        className={styles.Image}
      />
      <h3>{goods.name}</h3>
      <p>Price: {goods.price}</p>
      <button
        type="button"
        className={styles.ButtonAdd}
        onClick={handlerOnClick}
      >
        add to Cart
      </button>
    </div>
  );
};

export default GoodsCartShop;
