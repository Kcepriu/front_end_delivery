import { ForwardRefRenderFunction, ChangeEvent } from "react";
import { useOrder } from "../../hooks/contextOrder";
import styles from "./FormAdressOrder.module.scss";
import { useRef, useImperativeHandle } from "react";
import type { FormRef, FormProps } from "../../types/typesForRef";

// const FormAdressOrder: FC<IProps> = ({ handlerOnSubmit }, ref) => {

const FormAdressOrder: ForwardRefRenderFunction<FormRef, FormProps> = (
  { handlerOnSubmit },
  ref
) => {
  const { order, setFiledToOrder } = useOrder();

  const formRef = useRef<HTMLFormElement>(null);

  const submitForm = () => {
    if (formRef.current) {
      formRef.current.submit();
    }
  };

  useImperativeHandle(ref, () => ({
    submitForm,
  }));

  const handlerOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    setFiledToOrder(event.target.id, event.target.value);
  };

  return (
    <form className={styles.Form} ref={formRef} onSubmit={handlerOnSubmit}>
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
      <button type="submit">TEst</button>
    </form>
  );
};

export default FormAdressOrder;
