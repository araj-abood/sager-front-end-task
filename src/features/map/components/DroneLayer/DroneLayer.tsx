// components/DroneLayer.tsx
import { Source, Layer } from "react-map-gl/mapbox";
import { useDroneGeoJson } from "../../hooks/useDroneGeoJson";

function DroneLayer() {
  const geoJson = useDroneGeoJson();

  return (
    <Source
      id="drones"
      type="geojson"
      data={geoJson as GeoJSON.FeatureCollection}
    >
      <Layer
        id="drone-paths"
        type="line"
        filter={["==", ["get", "type"], "path"]}
        paint={{
          "line-color": [
            "case",
            ["==", ["get", "allowed"], true],
            "#00ff00",
            "#ff0000",
          ],
          "line-width": 2,
        }}
      />

      <Layer
        id="drone-backgrounds"
        type="circle"
        filter={["==", ["get", "type"], "drone"]}
        paint={{
          "circle-radius": 15,

          "circle-color": [
            "case",
            ["==", ["get", "allowed"], true],
            "#00ff00",
            "#ff0000",
          ],
        }}
      />

      <Layer
        id="drone-icons"
        type="symbol"
        filter={["==", ["get", "type"], "drone"]}
        layout={{
          "icon-image": "drone",
          "icon-size": 0.5,
        }}
      />
    </Source>
  );
}

export default DroneLayer;
