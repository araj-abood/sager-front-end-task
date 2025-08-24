import BellIcon from "../BellIcon/BellIcon";
import CaptureIcon from "../CaptureIcon/CaptureIcon";
import LanguageIcon from "../LanguageIcon/LanguageIcon";

function NavbarInfo() {
  return (
    <div>
      <div>
        <CaptureIcon />
        <LanguageIcon />
        <BellIcon />
      </div>
      <div>
        <p>
          Hello, <span>Mohammed Omar</span>
        </p>
        <p>Technical Support</p>
      </div>
    </div>
  );
}

export default NavbarInfo;
