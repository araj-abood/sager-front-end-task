import { useMemo } from "react";
import { useDroneStore } from "../../../../store/drone";
import styles from "./styles.module.css";

function RedDroneFlying() {
  const drones = useDroneStore((state) => state.drones);

  const redDronesCount = useMemo(() => {
    const allDrones = Object.values(drones);

    const redDrones = allDrones.filter((d) => !d.allowed);

    return redDrones.length;
  }, [drones]);
  return (
    <div className={styles.redDroneFlyingContainer}>
      <div className={styles.numberContainer}>{redDronesCount}</div>
      <p style={{ fontSize: 14 }}>Drones Flying</p>
    </div>
  );
}

export default RedDroneFlying;
