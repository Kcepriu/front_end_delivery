import { FC, useEffect, useState } from "react";
import type { IGoodsOrder } from "../../types/typeShop";
import { emptyGoods } from "../../types/typeShop";
import { getInfoGoods } from "../../services/apiBackend";
import styles from "./GoodsCartHistory.module.scss";

interface IProps {
  goods: IGoodsOrder;
}

const GoodsCartHistory: FC<IProps> = ({ goods }) => {
  const [goodsFull, setGoodsFull] = useState({ ...emptyGoods });

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      try {
        const goodsInfo = await getInfoGoods(goods.goods, controller);
        setGoodsFull(goodsInfo);
      } catch (Error) {
        setGoodsFull({ ...emptyGoods });
        // console.log("Error fetch information obout goods", Error);
      }
    };

    load();

    return () => {
      controller.abort();
    };
  }, [goods.goods]);

  return (
    <div className={styles.WrapCart}>
      <div className={styles.WrapImg}>
        <img
          src={goodsFull.urlPicture}
          alt={goodsFull.name}
          height="20"
          className={styles.Image}
        />
      </div>
      <div className={styles.WrapContent}>
        <h4>{goodsFull.name} </h4>

        <p>
          Count: <span>{goods.count}</span>
        </p>
        <p>
          Price: <span>{goods.price}</span>
        </p>

        <p>
          Summ: <span>{goods.sum}</span>
        </p>
      </div>
    </div>
  );
};

export default GoodsCartHistory;
