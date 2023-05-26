import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import HeaderPages from "../../components/HeaderPages/HeaderPages";
import style from "./MainLayout.module.scss";

const MainLayout: FC = () => {
  return (
    <div className={style.Container}>
      <div className={style.WrapPage}>
        <HeaderPages />

        <Suspense fallback={<p>....Loading</p>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MainLayout;
