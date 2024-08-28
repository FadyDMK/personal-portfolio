import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.about}>
      <h1 className={styles.aboutTitle}>About Me</h1>
      <p className={styles.aboutText}>
        I am a student at the University of Pécs studying Computer Science Engineering.
        I have a passion for software development and I am always looking for
        opportunities to learn and grow. I am currently seeking a software
        development internship.
      </p>
    </div>
  );
}

export default About;