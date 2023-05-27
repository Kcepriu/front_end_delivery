import { FC } from "react";
import type { IOrder } from "../../types/typeShop";
import GoodsCartHistory from "../GoodsCartHistory/GoodsCartHistory";
import styles from "./OrdersList.module.scss";

interface IProps {
  order: IOrder;
}

const OrdersList: FC<IProps> = ({ order }) => {
  return (
    <div className={styles.WrapCart}>
      <div className={styles.WrapGoods}>
        <ul className={styles.ListGoods}>
          {order.goodsDocument.map((goods) => {
            return (
              <li key={goods.goods}>
                <GoodsCartHistory goods={goods} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.WrapInfo}>
        <p>
          Total price: <span>{order.sum}</span>
        </p>
        <p>
          E-mail: <span>{order.email}</span>
        </p>
        <p>
          Phone: <span>{order.phone}</span>
        </p>
        <p>
          Id: <span>{order._id}</span>
        </p>
      </div>
    </div>
  );
};

export default OrdersList;
