import styles from "./About.module.css";
import uni from "../../assets/mik.png";

function About() {
  
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h1 className={styles.aboutTitle}>About Me</h1>
        <p className={styles.aboutText}>
          I am a student at the <strong>University of Pécs</strong> ,based in Hungary, studying{" "}
          <strong>Computer Science Engineering</strong>. I have a passion for
          software development and I am always looking for opportunities to
          learn and grow. I am currently seeking a{" "}
          <strong>software development internship.</strong>
        </p>
      </div>
      <div className={styles.line}></div>
      <div className={styles.uni}>
        <img
          src={uni}
          alt="faculty"
          className={`${styles.image} ${styles.uniImage}`}
        />
        <div className={styles.spinner}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default About;
