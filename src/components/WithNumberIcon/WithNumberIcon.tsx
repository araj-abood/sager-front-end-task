import type { ComponentType } from "react";
import defaultColors from "../../theme/colors";

function WithNumberIocn(Component: ComponentType) {
  return function WithNumberIconComponent({ amount }: { amount: number }) {
    return (
      <div style={{ position: "relative" }}>
        <p
          style={{
            position: "absolute",
            right: -8,
            top: -8,
            minWidth: 20,
            height: 20,
            fontSize: 12,
            color: defaultColors.white1,
            backgroundColor: defaultColors.red1,
            padding: "2px 6px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            boxSizing: "border-box",
          }}
        >
          {amount}
        </p>
        <Component />
      </div>
    );
  };
}

export default WithNumberIocn;
