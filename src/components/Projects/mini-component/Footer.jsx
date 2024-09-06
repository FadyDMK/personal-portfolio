import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div  className={styles.footerContainer}>

        <div className={styles.item2}>
          <span style={{ paddingRight: 5 }}>Copyright </span>
          <FontAwesomeIcon icon={faCopyright} />{" "}
          <span style={{ paddingLeft: 5 }}>
            {new Date().getFullYear()} Fady Damak. All Rights
            Reserved.
          </span>
        </div>
        <a
          href="https://github.com/FadyDMK"
          target="_blank"
          className={styles.item3}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>

      </div>
    </footer>
  );
}

export default Footer;