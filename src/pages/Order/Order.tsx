import { FC, FormEvent, useRef, forwardRef } from "react";
import { useOrder } from "../../hooks/contextOrder";
import styles from "./Order.module.scss";
import FormAdressOrder from "../../components/FormAdressOrder/FormAdressOrder";
import Map from "../../components/Map/Map";
import GoodsCartOrder from "../../components/GoodsCartOrder/GoodsCartOrder";
import type { FormRef, FormProps } from "../../types/typesForRef";

const ForwardedForm = forwardRef<FormRef, FormProps>(FormAdressOrder);

const Order: FC = () => {
  const { order, clearOrder } = useOrder();
  const formRef = useRef<FormRef>(null);

  const handlerOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    console.log("11111111111111111111111111");
    console.log("handlerOnSubmit");
    event.preventDefault();
  };

  const handlerOnClickSubmit = () => {
    if (formRef.current) {
      formRef.current.submitForm();
    }
  };

  return (
    <div className={styles.WrapPage}>
      <div className={styles.WrapColumn}>
        <div className={styles.WrapMap}>
          <Map />
        </div>
        <ForwardedForm ref={formRef} handlerOnSubmit={handlerOnSubmit} />
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
          <button
            type="button"
            className={styles.ButtonSubmit}
            onClick={handlerOnClickSubmit}
          >
            Submit
          </button>
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
