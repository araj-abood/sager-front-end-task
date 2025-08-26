import { useEffect } from "react";
import { io } from "socket.io-client";
import { handleDroneData } from "../utils/drone";

function useSocketData() {
  useEffect(() => {
    const socket = io("http://localhost:9013");

    socket.on("message", handleDroneData);

    return () => {
      socket.close();
    };
  }, []);
}

export default useSocketData;
