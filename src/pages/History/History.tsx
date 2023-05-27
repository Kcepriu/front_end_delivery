import { FC, useState, useEffect } from "react";
import styles from "./History.module.scss";
import type { IOrder } from "../../types/typeShop";
import Loader from "../../components/Loader/Loader";
import { getOrders } from "../../services/apiBackend";
import OrdersList from "../../components/OrdersList/OrdersList";

const History: FC = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [showLoad, setShowLoad] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      setShowLoad(true);
      try {
        const listOrders = await getOrders(controller);
        setOrders(listOrders);
      } catch (Error) {
        setOrders([]);
        console.log("Error fetch", Error);
      } finally {
        setShowLoad(false);
      }
    };

    load();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className={styles.WrapPage}>
      <div className={styles.WrapFilter}>
        <form className={styles.Form}>
          <div className={styles.WrapInput}>
            <label htmlFor="id" className={styles.Label}>
              ID:
            </label>
            <input
              className={styles.Input}
              id="adress"
              type="text"
              // value={order.adress}
              // onChange={handlerOnChange}
              placeholder="Input ID order"
              required
            />
          </div>

          <div className={styles.WrapInput}>
            <label htmlFor="email" className={styles.Label}>
              Email:
            </label>
            <input
              className={styles.Input}
              id="email"
              type="email"
              // value={order.email}
              // // pattern="^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})$"
              // onChange={handlerOnChange}
              placeholder="Input email"
              required
            />
          </div>

          <div className={styles.WrapInput}>
            <label htmlFor="phone" className={styles.Label}>
              Phone:
            </label>
            <input
              className={styles.Input}
              id="phone"
              pattern="^[+]?\d{1,4}[-.\s]?(\d{1,3})?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$"
              type="tel"
              // value={order.phone}
              // onChange={handlerOnChange}
              placeholder="Input phone"
              required
            />
          </div>
        </form>
      </div>
      <div className={styles.WrapOrders}>
        {showLoad && <Loader />}
        {!showLoad && (
          <ul className={styles.ListOrders}>
            {orders.map((order) => (
              <li key={order._id}>
                <OrdersList order={order} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default History;
