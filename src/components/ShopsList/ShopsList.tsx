import { FC, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { nameRouters } from "../../constants/nameRouters";
import { getShops } from "../services/apiBackend";
import ShopCart from "../ShopCart/ShopCart";
import style from "./ShopsList.module.scss";
import type { IShop } from "../../types/typeShop";

const ShopsList: FC = () => {
  const [shops, setShops] = useState<IShop[]>([]);
  const [showLoad, setShowLoad] = useState(false);

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
    <div className={style.WrapList}>
      <ul className={style.ListShop}>
        {shops.length > 0 &&
          shops.map((shop) => {
            return (
              <li key={shop._id}>
                <NavLink to={`${nameRouters.shop}/${shop._id}`}>
                  <ShopCart shop={shop} active={shopId === shop._id} />
                </NavLink>
              </li>
            );
          })}
      </ul>
      {showLoad && <>....Loading</>}
    </div>
  );
};

export default ShopsList;
