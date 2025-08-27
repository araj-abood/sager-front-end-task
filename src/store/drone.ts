import { create } from "zustand";
import { DroneState, IDroneData } from "../types/Drone";
import { droneCanFly } from "../features/map/utils/drone";

export const useDroneStore = create<DroneState>((set) => {
  const dummyDrones: Record<string, IDroneData> = {};

  return {
    drones: dummyDrones,
    updateDrone: (drone) =>
      set((state) => {
        const { id, lat, lng, yaw, registration } = drone;
        const prev = state.drones[drone.id];

        const allowed = droneCanFly(registration);
        const newLocation: [number, number] = [lng, lat];
        const path = prev ? [...prev.path, newLocation] : [newLocation];
        return {
          drones: {
            ...state.drones,
            [id]: { ...prev, id, lat, lng, path, allowed, yaw },
          },
        };
      }),
    setDrone: (drone) =>
      set((state) => {
        const {
          id,
          lat,
          lng,
          yaw,
          altitude,
          organization,
          registration,
          name,
        } = drone;

        const allowed = droneCanFly(registration);

        const droneData: IDroneData = {
          id: id,
          name,
          lat,
          lng,
          path: [],
          allowed,
          yaw,
          altitude,
          organization,
          pilot: drone.pilot,
          registration: drone.registration,
          timeAdded: new Date(),
        };

        return { drones: { ...state.drones, [id]: droneData } };
      }),
  };
});
