import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GoodsCartShop from "../GoodsCartShop/GoodsCartShop";
import { getGoodsShop } from "../../services/apiBackend";
import Loader from "../Loader/Loader";
import styles from "./GoodsListShop.module.scss";
import type { IGoods } from "../../types/typeShop";

const GoodsListShop: FC = () => {
  const [showLoad, setShowLoad] = useState(false);
  const [goods, setGoods] = useState<IGoods[]>([]);

  const { shopId } = useParams();

  useEffect(() => {
    if (!shopId) {
      setGoods([]);
      return;
    }

    const controller = new AbortController();
    const load = async () => {
      setShowLoad(true);
      try {
        const listGoods = await getGoodsShop(controller, shopId);
        setGoods(listGoods);
      } catch (Error) {
        setGoods([]);
        // console.log("Error fetch goods", Error);
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
      {!showLoad && goods.length > 0 && (
        <ul className={styles.ListGoods}>
          {goods.map((articl) => {
            return (
              <li key={articl._id} className={styles.Goods}>
                <GoodsCartShop goods={articl} />
              </li>
            );
          })}
        </ul>
      )}
      {showLoad && <Loader />}
    </div>
  );
};

export default GoodsListShop;
