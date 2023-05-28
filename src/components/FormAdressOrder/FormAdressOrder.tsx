import { FC, FormEvent, ChangeEvent } from "react";
import styles from "./FormAdressOrder.module.scss";
import { useOrder } from "../../hooks/contextOrder";
import { createOrder } from "../../services/apiBackend";
import { showErrorMessage } from "../../helpers/message";
interface IProps {
  isPeople: boolean;
}
const FormAdressOrder: FC<IProps> = ({ isPeople }) => {
  const { order, setFiledToOrder, clearOrder } = useOrder();

  const handlerOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    setFiledToOrder(event.target.id, event.target.value);
  };

  const validationData = (): boolean => {
    let message = "";

    if (!order.adress)
      message = message + '\n The "address" field is not filled';
    if (!order.email) message = message + '\n The "email" field is not filled';
    if (!order.phone) message = message + '\n The "phone" field is not filled';
    if (!order.name) message = message + '\n The "name" field is not filled';
    if (order.goodsDocument.length === 0) {
      message = message + "\n No products have been added";
    }
    if (message) showErrorMessage(message);

    return !message;
  };
  const handlerOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isPeople) return;
    if (!validationData()) return;

    try {
      const result = await createOrder(order);
      if (result) clearOrder();
    } catch (error) {
      if (!(error instanceof Error)) return;
      if (error.name !== "CanceledError") {
        console.log("Error create order", error);
        showErrorMessage("Error create order on server");
      }
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

      <button
        type="submit"
        className={styles.ButtonSubmit}
        disabled={!isPeople}
      >
        Submit
      </button>
    </form>
  );
};

export default FormAdressOrder;
