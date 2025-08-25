import type { DashboardItemProps } from "../../types/DashboardItemProps";
import { applyStyleIfTrue } from "../../utils/common";
import styles from "./styles.module.css";

function DasboardItem({ isActive, icon, text, onClick }: DashboardItemProps) {
  return (
    <div
      className={`${styles.dashboardItemContainer} ${applyStyleIfTrue(
        isActive,
        styles.dashboardItemContainerActive
      )}`}
      onClick={onClick}
    >
      <img src={icon} />
      <p
        className={`${styles.dashboardText} ${applyStyleIfTrue(
          isActive,
          styles.dashboardTextActive
        )}`}
      >
        {text}
      </p>
      {isActive && <div className={styles.activeIndicator} />}
    </div>
  );
}

export default DasboardItem;
