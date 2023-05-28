import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import styles from "./GoodsListShop.module.scss";
import GoodsCartShop from "../GoodsCartShop/GoodsCartShop";
import { getGoodsShop } from "../../services/apiBackend";
import { showErrorMessage } from "../../helpers/message";
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
      } catch (error) {
        setGoods([]);
        if (!(error instanceof Error)) return;
        if (error.name !== "CanceledError") {
          console.log("Error fetch goods", Error);
          showErrorMessage("Error fetch goods");
        }
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
