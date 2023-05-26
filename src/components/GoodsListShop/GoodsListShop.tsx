import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import type { IGoods } from "../../types/typeShop";
import { getGoodsShop } from "../services/apiBackend";

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
        console.log("Error fetch goods", Error);
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
    <>
      {goods.length > 0 &&
        goods.map((articl) => {
          return <p key={articl._id}>{articl.name}</p>;
        })}
      {showLoad && <>....Loading</>}
    </>
  );
};

export default GoodsListShop;
