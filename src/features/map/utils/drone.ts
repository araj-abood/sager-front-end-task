import { useDroneStore } from "../../../store/drone";
import { IDroneDataTransformed } from "../../../types/Drone";
import { IDroneDataFromWebsocket } from "../../../types/WebSocket";

export function handleDroneData(data: IDroneDataFromWebsocket) {
  const droneData = data.features[0];
  const droneDataTransformed: IDroneDataTransformed = {
    id: droneData.properties.registration,
    lat: droneData.geometry.coordinates[1],
    lng: droneData.geometry.coordinates[0],
    altitude: droneData.properties.altitude,
    registration: droneData.properties.registration,
    organization: droneData.properties.organization,
    yaw: droneData.properties.yaw,
    name: droneData.properties.Name,
    pilot: droneData.properties.pilot,
    serial: droneData.properties.serial,
  };

  const record = useDroneStore.getState().drones;

  const recordExitst = Boolean(record[droneDataTransformed.id]);

  if (!recordExitst) {
    useDroneStore.getState().setDrone(droneDataTransformed);
    return;
  }
  useDroneStore.getState().updateDrone(droneDataTransformed);
}

export function droneCanFly(registration: string) {
  if (
    registration === undefined ||
    registration === "" ||
    registration.split("-").length < 2
  )
    return false;
  return registration?.split("-")[1]?.startsWith("B");
}

export function createDroneIcon(
  src: string,
  bgColor: string,
  name: string,
  map: mapboxgl.Map
) {
  const img = new Image();
  img.src = src;
  img.onload = () => {
    const size = 64;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d")!;

    ctx.fillStyle = bgColor;
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.fill();

    ctx.drawImage(img, 8, 8, size - 16, size - 16);

    if (!map.hasImage(name)) {
      map.addImage(name, ctx.getImageData(0, 0, size, size), { pixelRatio: 2 });
    }
  };
}

export function formatTime(date) {
  return date.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}
