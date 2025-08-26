import { droneCanFly } from "../features/map/utils/drone";
import { IDroneData } from "../types/Drone";

export function createRandomDrone(): { [x: string]: IDroneData } {
  const registration = "SD-" + makeID(4);
  const [lng, lat] = makeLocation();
  return {
    [registration]: {
      id: makeID(10),
      registration,
      allowed: droneCanFly(registration),
      lng,
      lat,
      altitude: Math.floor(Math.random() * 100),
      yaw: 120 + Math.floor(Math.random() * 20),
      organization: "asd",
      path: [],
      pilot: "zxcz",
      timeAdded: new Date(),
    },
  };
}

function makeID(number) {
  const characters = "ABCD";
  let result = "";

  for (let i = 0; i < number; i++) {
    result += characters.charAt(Math.floor(Math.random() * 4));
  }

  return result;
}

function makeLocation() {
  const base = [
    35.93131881204147 + (Math.random() * 2 - 1) / 10,
    31.94878648036645 + (Math.random() * 2 - 1) / 10,
  ];
  return base;
}
