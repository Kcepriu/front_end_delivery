import { FC, ChangeEvent, FormEvent } from "react";
import { useOrder } from "../../hooks/contextOrder";
import styles from "./FormAdressOrder.module.scss";
import { forwardRef } from "react";

const phoneRegExp =
  "^+?d{1,4}[-.s]?(?d{1,3})?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}$";

const emailRegExp = "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$";

interface IProps {
  handlerOnSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const FormAdressOrder: FC<IProps> = ({ handlerOnSubmit }) => {
  const { order, setFiledToOrder } = useOrder();

  // const handlerOnSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log("handlerOnSubmit");
  // };

  const handlerOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    setFiledToOrder(event.target.id, event.target.value);
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
          pattern={emailRegExp}
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
          type="tel"
          pattern={phoneRegExp}
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
      <button type="submit">TEst</button>
    </form>
  );
};

export default FormAdressOrder;
