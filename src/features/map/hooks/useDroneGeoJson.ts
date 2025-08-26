import { useMemo } from "react";
import { useDroneStore } from "../../../store/drone";

export function useDroneGeoJson() {
  const drones = useDroneStore((s) => s.drones);

  console.log("Drones in store:", drones);

  return useMemo(
    () => ({
      type: "FeatureCollection",
      features: Object.values(drones).flatMap((d) => [
        {
          type: "Feature",
          properties: { id: d.id, allowed: d.allowed, type: "path" },
          geometry: { type: "LineString", coordinates: d.path },
        },
        {
          type: "Feature",
          properties: {
            id: d.id,
            allowed: d.allowed,
            yaw: d.yaw,
            type: "drone",
          },
          geometry: { type: "Point", coordinates: [d.lng, d.lat] },
        },
      ]),
    }),
    [drones]
  );
}
