import type { Location } from "./common";

export type IDroneDataTransformed = {
  id: string;
  name: string;
  altitude: number;
  organization: string;
  pilot: string;
  registration: string;
  yaw: number;
  lng: number;
  lat: number;
  serial: string;
};

export interface IDroneData {
  id: string;
  lng: number;
  lat: number;
  path: Location[];
  allowed: boolean;
  yaw: number;
  altitude: number;
  organization: string;
  pilot: string;
  registration: string;
  timeAdded: Date;
  name: string;
  serial: string;
}

export type DroneState = {
  drones: Record<string, IDroneData>;
  updateDrone: (data: IDroneDataTransformed) => void;
  setDrone: (drone: IDroneDataTransformed) => void;
};
