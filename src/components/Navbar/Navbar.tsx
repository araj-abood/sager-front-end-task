import styles from "./styles.module.css";
import SagerLogo from "../../assets/sager-logo.png";
import NavbarInfo from "../NavbarInfo/NavbarInfo";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img src={SagerLogo} className={styles.navbar__logo} />
      <NavbarInfo />
    </nav>
  );
}

export default Navbar;
