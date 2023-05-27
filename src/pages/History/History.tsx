import { FC, useState, useEffect, ChangeEvent } from "react";
import styles from "./History.module.scss";
import type { IOrder } from "../../types/typeShop";
import { emptyFilter } from "../../types/typeShop";
import Loader from "../../components/Loader/Loader";
import { getOrders } from "../../services/apiBackend";
import OrdersList from "../../components/OrdersList/OrdersList";
import { useDebouncedCallback } from "use-debounce";

const History: FC = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [showLoad, setShowLoad] = useState(false);
  const [filter, setFilter] = useState({ ...emptyFilter });

  const [valueFilter, setVaLueFilter] = useState({ ...emptyFilter });

  const debouncedChangeFilter = useDebouncedCallback((value) => {
    console.log("Change filter");
    setFilter(value);
  }, 1000);

  const handlerOnChangeFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setVaLueFilter({
      ...emptyFilter,
      [event.target.id]: event.target.value,
    });

    debouncedChangeFilter({
      ...emptyFilter,
      [event.target.id]: event.target.value,
    });
  };

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      setShowLoad(true);
      try {
        const listOrders = await getOrders(filter, controller);
        setOrders(listOrders);
      } catch (Error) {
        setOrders([]);
        // console.log("Error fetch", Error);
      } finally {
        setShowLoad(false);
      }
    };

    load();

    return () => {
      controller.abort();
    };
  }, [filter]);

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
              id="id"
              type="text"
              value={valueFilter.id}
              onChange={handlerOnChangeFilter}
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
              value={valueFilter.email}
              // // pattern="^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})$"
              onChange={handlerOnChangeFilter}
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
              value={valueFilter.phone}
              onChange={handlerOnChangeFilter}
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