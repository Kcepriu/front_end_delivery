import { FC } from "react";
import { useOrder } from "../../hooks/contextOrder";
import styles from "./Order.module.scss";
import FormAdressOrder from "../../components/FormAdressOrder/FormAdressOrder";
import Map from "../../components/Map/Map";
import GoodsCartOrder from "../../components/GoodsCartOrder/GoodsCartOrder";

const Order: FC = () => {
  const { order, clearOrder } = useOrder();

  return (
    <div className={styles.WrapPage}>
      <div className={styles.WrapColumn}>
        <div className={styles.WrapMap}>
          <Map />
        </div>
        <FormAdressOrder />
      </div>
      <div className={styles.WrapRight}>
        <div className={styles.WrapOrderContent}>
          <ul className={styles.ListGoods}>
            {order.goodsDocument.map((goods) => {
              return (
                <li key={goods.goods}>
                  <GoodsCartOrder goods={goods} />
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.Basement}>
          <p className={styles.TotalPrice}>
            Total price: <span>{order.sum} </span>
          </p>
          {/* <button
            type="button"
            className={styles.ButtonSubmit}
            // onClick={handlerOnClickSubmit}
          >
            Submit
          </button> */}
        </div>
        <button
          type="button"
          className={styles.ButtonCancel}
          onClick={() => clearOrder()}
        >
          Cancel order
        </button>
      </div>
    </div>
  );
};

export default Order;
