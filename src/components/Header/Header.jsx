import letter from "../../assets/letter-fv2.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img src={letter} alt="logo" className={styles.logo} />
      <ul className={styles.links}>
        <li>Home</li>
        <li>Projects</li>
        <li>About</li>
      </ul>
    </header>
  );
}

export default Header;
