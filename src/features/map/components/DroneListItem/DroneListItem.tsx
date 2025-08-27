import defaultColors from "../../../../theme/colors";
import { IDroneData } from "../../../../types/Drone";

function DroneListItem({
  drone,
  isActive = false,
  onClick,
}: {
  drone: IDroneData;
  isActive: boolean;
  onClick: VoidFunction;
}) {
  return (
    <div
      data-drone-id={drone.id}
      style={{
        padding: 24,
        cursor: "pointer",
        backgroundColor: isActive ? "#272727" : "",
      }}
      onClick={onClick}
    >
      <h1 style={{ fontSize: 16, color: defaultColors.white1 }}>
        {drone?.name}
      </h1>
      <div
        style={{
          fontSize: 11,
          color: defaultColors.white5,
          marginTop: 28,
          display: "flex",
          gap: 47,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "45px",
            rowGap: "15px",
          }}
        >
          <div>
            <p>Serial #</p>
            <p style={{ fontWeight: 700 }}>{drone?.id}</p>
          </div>
          <div>
            <p>Registration #</p>
            <p style={{ fontWeight: 700 }}>{drone?.registration}</p>
          </div>
          <div>
            <p>Pilot</p>
            <p style={{ fontWeight: 700 }}>{drone?.pilot}</p>
          </div>
          <div>
            <p>Organization</p>
            <p style={{ fontWeight: 700 }}>{drone?.organization}</p>
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundColor: drone?.allowed
                ? defaultColors.green1
                : defaultColors.red1,
              height: 19,
              width: 19,
              borderRadius: "50%",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default DroneListItem;
