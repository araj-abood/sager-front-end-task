import Map from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import DroneLayer from "./components/DroneLayer/DroneLayer";
import { useEffect } from "react";
import { io } from "socket.io-client";
import droneImg from "../../assets/drone-icon.png";
import { createDroneIcon } from "./utils/drone";

function MainMap() {
  useEffect(() => {
    const socket = io("http://localhost:9013");

    // socket.on("message", handleDroneData);

    return () => {
      socket.close();
    };
  }, []);
  return (
    <div style={{ flex: 1 }}>
      <Map
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
        initialViewState={{
          longitude: 35.93131881204147,
          latitude: 31.94878648036645,
          zoom: 14,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        onLoad={(e) => {
          const map = e.target;
          createDroneIcon(droneImg, "green", "drone-green", map);
          createDroneIcon(droneImg, "red", "drone-red", map);
        }}
      >
        <DroneLayer />
      </Map>
    </div>
  );
}

export default MainMap;
