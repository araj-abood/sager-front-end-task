import { useDroneStore } from "../../../../store/drone";
import { DroneToolTipProps } from "../../../../types/DroneToolTipProps";
import { formatTime } from "../../utils/drone";
import styles from "./styles.module.css";

function DroneToolTip({ droneId, x, y }: DroneToolTipProps) {
  const droneData = useDroneStore((store) => store.drones[droneId]);
  return (
    <div
      className={styles.toolTipContainer}
      style={{
        left: x,
        top: y - 120,
      }}
    >
      <h3 className={styles.droneName}>{droneData?.name}</h3>
      <div style={{ display: "flex", flexDirection: "row", marginTop: 9 }}>
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
            flex: 1,
          }}
        >
          <p className={styles.toolTipParagraph}>Altitude</p>
          <p className={styles.toolTipValue}>{droneData?.altitude}</p>
        </div>
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
            flex: 1,
          }}
        >
          <p className={styles.toolTipParagraph}>Flight Time</p>
          <p className={styles.toolTipValue}>
            {formatTime(droneData?.timeAdded)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DroneToolTip;
