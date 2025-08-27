import defaultColors from "../../../../theme/colors";
import styles from "./styles.module.css";
function DroneListOptions() {
  return (
    <div className={styles.droneListOptionsContainer}>
      <div style={{ paddingBottom: 10, borderBottom: "6px solid var(--red1)" }}>
        <p style={{ color: defaultColors.white1, fontSize: 16 }}>Drones</p>
      </div>
      <div>
        <p style={{ color: defaultColors.white3, fontSize: 16 }}>
          Flights History
        </p>
      </div>
    </div>
  );
}

export default DroneListOptions;
