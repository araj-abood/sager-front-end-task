import Map, { MapRef } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRef, useState } from "react";
import useSocketData from "./hooks/use-socket-data";
import DroneLayer from "./components/DroneLayer/DroneLayer";
import DroneIcon from "../../assets/drone-icon.png";

function MainMap() {
  const mapRef = useRef<MapRef>();
  useSocketData();

  const [viewState, setViewState] = useState({
    longitude: 35.93131881204147,
    latitude: 31.94878648036645,
    zoom: 14,
  });

  return (
    <div style={{ flex: 1 }}>
      <Map
        ref={mapRef}
        reuseMaps
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        pitch={0}
        onLoad={() => {
          console.log(mapRef.current);
          mapRef.current.loadImage(DroneIcon, (error, image) => {
            if (error) {
              console.log(error);
              return;
            }
            console.log("Image loaded successfully");
            mapRef.current.addImage("drone", image);
          });
        }}
      >
        <DroneLayer />
      </Map>
    </div>
  );
}

export default MainMap;
