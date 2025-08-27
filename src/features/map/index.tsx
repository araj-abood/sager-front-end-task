import Map, {
  AttributionControl,
  MapMouseEvent,
  MapRef,
} from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRef, useState } from "react";
import useSocketData from "./hooks/use-socket-data";
import DroneLayer from "./components/DroneLayer/DroneLayer";
import DroneIcon from "../../assets/drone-icon.png";
import DroneToolTip from "./components/DroneToolTip/DroneToolTip";
import DroneList from "./components/DroneList/DroneList";

function MainMap() {
  const mapRef = useRef<MapRef>(null);

  const [viewState, setViewState] = useState({
    longitude: 35.93131881204147,
    latitude: 31.94878648036645,
    zoom: 14,
  });

  const [focusedDroneId, setFocusedDroneId] = useState("");

  const [hoveredDrone, setHoveredDrone] = useState<{
    id: string;
    x: number;
    y: number;
  }>(null);

  useSocketData();

  const onMouseHover = (evt: MapMouseEvent) => {
    const {
      features,
      point: { x, y },
    } = evt;

    if (features && features[0]) {
      const feature = features[0];
      const droneId = feature.properties?.id;
      setHoveredDrone({ id: droneId, x: x, y: y });
    } else {
      setHoveredDrone(null);
    }
  };

  const onMouseDown = (evt: MapMouseEvent) => {
    const { features } = evt;

    console.log(evt);

    if (features && features[0]) {
      const feature = features[0];
      const droneId = feature.properties?.id;
      setFocusedDroneId(droneId);
    } else {
      setHoveredDrone(null);
    }
  };

  const onClickDroneListItem = (droneId: string, lng: number, lat: number) => {
    setFocusedDroneId(droneId);
    setViewState({ longitude: lng, latitude: lat, zoom: 16 });
  };

  return (
    <div style={{ flex: 1, position: "relative" }}>
      <DroneList
        focusedDroneId={focusedDroneId}
        onClick={onClickDroneListItem}
      />
      <Map
        interactiveLayerIds={["drone-icons"]}
        ref={mapRef}
        reuseMaps
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        pitch={0}
        onMouseMove={onMouseHover}
        onMouseDown={onMouseDown}
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
        {hoveredDrone && (
          <DroneToolTip
            droneId={hoveredDrone.id}
            x={hoveredDrone.x}
            y={hoveredDrone.y}
          />
        )}
        <AttributionControl customAttribution="Created By Abdullah Al-araj" />
      </Map>
    </div>
  );
}

export default MainMap;
