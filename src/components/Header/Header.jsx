import letter from "../../assets/letter-fv2.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img src={letter} alt="logo" className={styles.logo} />
      <ul className={styles.links}>
        <li><a href="#first">Home</a></li>
        <li><a href="#second">About</a></li>
        <li><a href="#third">Skills</a></li>
        <li><a href="#fourth">Projects</a></li>
      </ul>
    </header>
  );
}

export default Header;
