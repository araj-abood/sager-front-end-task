import BellSvg from "../../assets/bell.svg";
import WithNumberIocn from "../WithNumberIcon/WithNumberIcon";

function BellIcon() {
  return <img src={BellSvg} style={{ display: "block", cursor: "pointer" }} />;
}

export const BellIconWithNumber = WithNumberIocn(BellIcon);

export default BellIcon;
