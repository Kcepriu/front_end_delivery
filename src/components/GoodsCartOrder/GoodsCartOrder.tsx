import { FC, ChangeEvent, useEffect, useState } from "react";
import type { IGoodsOrder } from "../../types/typeShop";
import { useOrder } from "../../hooks/contextOrder";
import styles from "./GoodsCartOrder.module.scss";

interface IProps {
  goods: IGoodsOrder;
}
const GoodsCartOrder: FC<IProps> = ({ goods }) => {
  const { deleteGoods, changeCountGoods } = useOrder();

  const [count, setCount] = useState(goods.count);

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      try {
        // const listShops = await getShops(controller);
        // setShops(listShops);
      } catch (Error) {
        // setShops([]);
        console.log("Error fetch information obout goods", Error);
      }
    };

    load();

    return () => {
      controller.abort();
    };
  }, [goods.goods]);

  const handlerChangeCount = (event: ChangeEvent<HTMLInputElement>) => {
    setCount(Number(event.target.value));
    changeCountGoods(goods.goods, Number(event.target.value));
  };

  return (
    <div className={styles.WrapCart}>
      <div className={styles.WrapImg}>img</div>
      <div className={styles.WrapContent}>
        <button
          type="button"
          className={styles.BtnDelete}
          onClick={() => deleteGoods(goods.goods)}
        >
          Delete
        </button>

        <div className={styles.WrapTitle}>
          <h4>{goods.goods} </h4>

          <p>
            Price: <span>{goods.price}</span>
          </p>
        </div>

        <input
          name="count"
          type="number"
          min="1"
          value={count}
          onChange={handlerChangeCount}
          className={styles.InputCount}
        />
      </div>
    </div>
  );
};

export default GoodsCartOrder;
