import styles from "./Skills.module.css";

function Skills() {
  return (
    <div className={styles.container}>
      <h1 className={styles.skillsTitle}>Skills</h1>
      <div className={styles.skills}>
        <div className={styles.skill}>
          <h2 className={styles.skillTitle}>Frontend</h2>
          <div className={styles.skillList}>
            <p className={styles.skillItem}>HTML5</p>
            <p className={styles.skillItem}>CSS3</p>
            <p className={styles.skillItem}>JavaScript</p>
            <p className={styles.skillItem}>React</p>
          </div>
        </div>
        <div className={styles.skill}>
          <h2 className={styles.skillTitle}>Backend</h2>
          <div className={styles.skillList}>
            <p className={styles.skillItem}>Node.js</p>
            <p className={styles.skillItem}>Express</p>
            <p className={styles.skillItem}>PostgreSQL</p>
            <p className={styles.skillItem}>SQL</p>
          </div>
        </div>
        <div className={styles.skill}>
          <h2 className={styles.skillTitle}>Programming Languages</h2>
          <div className={styles.skillList}>
            <p className={styles.skillItem}>Python</p>
            <p className={styles.skillItem}>C#</p>
            <p className={styles.skillItem}>Java</p>
            <p className={styles.skillItem}>C</p>
          </div>
        </div>
        <div className={styles.skill}>
          <h2 className={styles.skillTitle}>Tools</h2>
          <div className={styles.skillList}>
            <p className={styles.skillItem}>Git</p>
            <p className={styles.skillItem}>GitHub</p>
            <p className={styles.skillItem}>VSCode</p>
            <p className={styles.skillItem}>NPM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
