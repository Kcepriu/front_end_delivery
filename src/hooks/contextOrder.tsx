import {
  FC,
  createContext,
  useContext,
  // useEffect,
  useState,
  // Dispatch,
  // SetStateAction,
  ReactNode,
} from "react";
import type { IOrder, IGoods } from "../types/typeShop";

const emptyOrder: IOrder = {
  _id: "",
  name: "",
  shop: "",
  phone: "",
  email: "",
  location: "",
  adress: "",
  sum: 0,
  goodsDocument: [],
};

interface IContextProps {
  order: IOrder;
  setFiledToOrder: <
    T extends keyof Omit<IOrder, "goodsDocument">,
    U extends IOrder[T]
  >(
    nameField: T,
    value: U
  ) => void;
  addGoods: (goods: IGoods, count: number) => void;
  deleteGoods: (goodsId: string) => void;
  changeCountGoods: (goodsId: string, count: number) => void;
}

const ContextOrder = createContext({} as IContextProps);

export const useOrder = () => useContext(ContextOrder);

export const OrderProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [order, setOrder] = useState<IOrder>(emptyOrder);

  //TODO Save to local storage

  function setFiledToOrder<
    T extends keyof Omit<IOrder, "goodsDocument">,
    U extends IOrder[T]
  >(nameField: T, value: U) {
    setOrder((prev) => {
      return {
        ...prev,
        [nameField]: value,
      };
    });
  }

  function addGoods(goods: IGoods, count: number) {
    // 1 Якщо така номенклатура є, то знаходимо рядок
    // 1.2 Додаємо ткількість до пепоредньої
    // 2 якщо нема то створюємо новий
    // 2.1 Заповнюємо поля
    // 3 Рахуємо суму рядка
    // 4 рахуємо суму документу
    console.log("addGoods");
  }

  //TODO changeCountGoods
  function changeCountGoods(goodsId: string, count: number) {
    console.log("changeCountGoods");
    // 1 то знаходимо рядок
    // 1.2 Змінюємо кількість
    // 3 Рахуємо суму рядка
    // 4 рахуємо суму документу
  }

  // *  deleteGoods
  function deleteGoods(goodsId: string) {
    setOrder((prev) => {
      const { goodsDocument } = prev;

      const newGoodsDocument = goodsDocument.filter(
        (elem) => elem.goods !== goodsId
      );

      return {
        ...prev,
        goodsDocument: newGoodsDocument,
      };
    });
  }

  return (
    <ContextOrder.Provider
      value={{
        order,
        setFiledToOrder,
        addGoods,
        deleteGoods,
        changeCountGoods,
      }}
    >
      {children}
    </ContextOrder.Provider>
  );
};
