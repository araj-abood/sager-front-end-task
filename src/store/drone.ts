import { create } from "zustand";
import { DroneState, IDroneData } from "../types/Drone";
import { droneCanFly } from "../features/map/utils/drone";

export const useDroneStore = create<DroneState>((set) => ({
  drones: {
    test1: {
      id: "B123",
      lat: 31.95,
      altitude: 100,
      organization: "asdsad",
      pilot: "asdsadsad",
      registration: "AB-BC",
      lng: 35.91,
      yaw: 90,
      allowed: true,
      path: [
        [35.91, 31.95],
        [35.912, 31.951],
        [35.915, 31.952],
      ],
    },
  },
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
      const { id, lat, lng, yaw, altitude, organization, registration } = drone;

      const allowed = droneCanFly(registration);

      const droneData: IDroneData = {
        id: id,
        lat,
        lng,
        path: [],
        allowed,
        yaw,
        altitude,
        organization,
        pilot: drone.pilot,
        registration: drone.registration,
      };

      return { drones: { ...state.drones, [id]: droneData } };
    }),
}));
