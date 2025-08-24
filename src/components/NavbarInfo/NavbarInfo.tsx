import { BellIconWithNumber } from "../BellIcon/BellIcon";
import CaptureIcon from "../CaptureIcon/CaptureIcon";
import LanguageIcon from "../LanguageIcon/LanguageIcon";
import styles from "./styles.module.css";

function NavbarInfo() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.iconsContainer}>
        <CaptureIcon />
        <LanguageIcon />
        <BellIconWithNumber amount={2} />
      </div>
      <div className={styles.userInfoContainer}>
        <p className={styles.nameMessage}>
          Hello, <span className={styles.name}>Mohammed Omar</span>
        </p>
        <p className={styles.role}>Technical Support</p>
      </div>
    </div>
  );
}

export default NavbarInfo;
