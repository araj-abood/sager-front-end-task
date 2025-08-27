import { useEffect, useMemo, useRef } from "react";
import { useDroneStore } from "../../../../store/drone";
import DroneListHeader from "../DroneListHeader/DroneListHeader";
import DroneListOptions from "../DroneListOptions/DroneListOptions";
import styles from "./styles.module.css";
import DroneListItem from "../DroneListItem/DroneListItem";
function DroneList({
  focusedDroneId,
  onClick,
}: {
  focusedDroneId: string;
  onClick: (droneId: string, lng: number, lat: number) => void;
}) {
  const listRef = useRef<HTMLDivElement>(null);
  const drones = useDroneStore((state) => state.drones);

  useEffect(() => {
    if (focusedDroneId && listRef.current) {
      const focusedElement = listRef.current.querySelector(
        `[data-drone-id="${focusedDroneId}"]`
      );

      console.log(focusedElement);

      if (focusedElement) {
        focusedElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [focusedDroneId]);

  const memoedDrones = useMemo(() => Object.values(drones), [drones]);
  return (
    <menu className={styles.droneListCotainer}>
      <div className={styles.droneListInnerContainer}>
        <DroneListHeader />
        <DroneListOptions />
        <div ref={listRef} className={styles.listContainter}>
          {memoedDrones.map((drone) => (
            <DroneListItem
              key={drone.id}
              drone={drone}
              isActive={focusedDroneId === drone.id}
              onClick={() => onClick(drone.id, drone.lng, drone.lat)}
            />
          ))}
        </div>
      </div>
    </menu>
  );
}

export default DroneList;
