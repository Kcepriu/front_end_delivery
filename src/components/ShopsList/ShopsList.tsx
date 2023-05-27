import { FC, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { nameRouters } from "../../constants/nameRouters";
import { getShops } from "../../services/apiBackend";
import ShopCart from "../ShopCart/ShopCart";
import styles from "./ShopsList.module.scss";
import type { IShop } from "../../types/typeShop";
import { useOrder } from "../../hooks/contextOrder";
import Loader from "../Loader/Loader";

const ShopsList: FC = () => {
  const [shops, setShops] = useState<IShop[]>([]);
  const [showLoad, setShowLoad] = useState(false);
  const { order } = useOrder();

  const { shopId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      setShowLoad(true);
      try {
        const listShops = await getShops(controller);
        setShops(listShops);
      } catch (Error) {
        setShops([]);
        console.log("Error fetch", Error);
      } finally {
        setShowLoad(false);
      }
    };

    load();

    return () => {
      controller.abort();
    };
  }, [shopId]);

  return (
    <div className={styles.WrapList}>
      <ul className={styles.ListShop}>
        {shops.length > 0 &&
          shops.map((shop) => {
            return (
              <li key={shop._id}>
                {order.shop ? (
                  <ShopCart
                    shop={shop}
                    active={shopId === shop._id}
                    isHover={false}
                  />
                ) : (
                  <NavLink to={`${nameRouters.shop}/${shop._id}`}>
                    <ShopCart
                      shop={shop}
                      active={shopId === shop._id}
                      isHover={true}
                    />
                  </NavLink>
                )}
              </li>
            );
          })}
      </ul>
      {shops.length === 0 && showLoad && <Loader />}
    </div>
  );
};

export default ShopsList;
