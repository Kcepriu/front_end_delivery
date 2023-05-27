import { FC, FormEvent, ChangeEvent } from "react";
import { useOrder } from "../../hooks/contextOrder";
import styles from "./FormAdressOrder.module.scss";
import { createOrder } from "../../services/apiBackend";

const FormAdressOrder: FC = () => {
  const { order, setFiledToOrder, clearOrder } = useOrder();

  const handlerOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    setFiledToOrder(event.target.id, event.target.value);
  };

  const handlerOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const result = await createOrder(order);
      if (result) {
        console.log("OK");
        //clearOrder();
      }
    } catch (Error) {
      console.log(Error);
    }
  };

  return (
    <form className={styles.Form} onSubmit={handlerOnSubmit}>
      <div className={styles.WrapInput}>
        <label htmlFor="adress" className={styles.Label}>
          Address:
        </label>
        <input
          className={styles.Input}
          id="adress"
          type="text"
          value={order.adress}
          onChange={handlerOnChange}
          placeholder="Input address"
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
          value={order.email}
          // pattern="^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})$"
          onChange={handlerOnChange}
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
          value={order.phone}
          onChange={handlerOnChange}
          placeholder="Input phone"
          required
        />
      </div>

      <div className={styles.WrapInput}>
        <label htmlFor="name" className={styles.Label}>
          Name:
        </label>
        <input
          className={styles.Input}
          id="name"
          type="text"
          value={order.name}
          onChange={handlerOnChange}
          placeholder="Input Name"
          required
        />
      </div>
      <button type="submit" className={styles.ButtonSubmit}>
        Submit
      </button>
    </form>
  );
};

export default FormAdressOrder;
