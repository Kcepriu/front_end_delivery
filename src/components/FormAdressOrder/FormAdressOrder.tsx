import { FC, FormEvent, ChangeEvent, useState, useCallback } from "react";
import { useOrder } from "../../hooks/contextOrder";
import styles from "./FormAdressOrder.module.scss";
import { createOrder } from "../../services/apiBackend";

import { GoogleReCaptcha } from "react-google-recaptcha-v3";

const FormAdressOrder: FC = () => {
  const { order, setFiledToOrder, clearOrder } = useOrder();

  const [token, setToken] = useState();
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);

  const onVerify = useCallback((token: any) => {
    setToken(token);
  }, []);

  const doSomething = () => {
    /* do something like submit a form and then refresh recaptcha */
    setRefreshReCaptcha((r) => !r);
  };

  const handlerOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    setFiledToOrder(event.target.id, event.target.value);
  };

  const handlerOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (token) {
      console.log("token ok");
    } else {
      console.log("token ERRR");
      return;
    }

    try {
      const result = await createOrder(order);
      if (result) {
        clearOrder();
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
      <GoogleReCaptcha
        onVerify={onVerify}
        refreshReCaptcha={refreshReCaptcha}
      />
      <button onClick={doSomething}>Do Something</button>
    </form>
  );
};

export default FormAdressOrder;
