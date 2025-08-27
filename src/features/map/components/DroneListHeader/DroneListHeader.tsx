import defaultColors from "../../../../theme/colors";
import CancelButton from "../../../../assets/cancel.png";

function DroneListHeader() {
  return (
    <div
      style={{
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: 20, color: defaultColors.white1 }}>
        DRONE FLYING
      </h1>
      <img src={CancelButton} height={22} width={22} />
    </div>
  );
}

export default DroneListHeader;
