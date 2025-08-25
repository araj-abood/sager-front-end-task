import styles from "./styles.module.css";
import DashboardLogo from "../../assets/dashboard-logo.svg";
import MapLogo from "../../assets/map-logo.svg";
import defaultColors from "../../theme/colors";
import DasboardItem from "../DashboardItem/DashboardItem";
import { useState } from "react";
import { DashboardOptions } from "../../types/common";

function LeftMenu() {
  const [currentActive, setCurrentActive] = useState<DashboardOptions>(
    DashboardOptions.MAP
  );

  const setActive = (option: DashboardOptions) => {
    return () => setCurrentActive(option);
  };
  return (
    <menu className={styles.leftMenu}>
      <DasboardItem
        icon={DashboardLogo}
        text={DashboardOptions.DASHBOARD}
        isActive={currentActive === DashboardOptions.DASHBOARD}
        onClick={setActive(DashboardOptions.DASHBOARD)}
      />
      <div
        style={{
          width: 49,
          height: 1,
          backgroundColor: defaultColors.white2,
          margin: "0px auto",
        }}
      />
      <DasboardItem
        icon={MapLogo}
        text={DashboardOptions.MAP}
        isActive={currentActive === DashboardOptions.MAP}
        onClick={setActive(DashboardOptions.MAP)}
      />
    </menu>
  );
}

export default LeftMenu;
