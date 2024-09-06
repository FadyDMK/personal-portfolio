import styles from "./Skills.module.css";
import html from "../../assets/html-5.svg";
import css from "../../assets/css-3.svg";
import js from "../../assets/javascript.svg";
import react from "../../assets/react.svg";
import node from "../../assets/nodejs-icon.svg";
import express from "../../assets/express.svg";
import postgresql from "../../assets/postgresql.svg";
import python from "../../assets/python.svg";

function Skills() {
  return (
    <div className={styles.container}>
      <h1 className={styles.skillsTitle}>Skills</h1>
      <div className={styles.skills}>
        <div className={styles.skill}>
          <h2 className={styles.skillTitle}>Frontend</h2>
          <div className={styles.skillList}>
            <p className={styles.skillItem}>HTML5<span><img src={html} style={{width:'1rem', paddingLeft:'1rem'}}></img></span></p>
            <p className={styles.skillItem}>CSS3<span><img src={css} style={{width:'1rem', paddingLeft:'1rem'}}></img></span></p>
            <p className={styles.skillItem}>JavaScript<span><img src={js} style={{width:'1rem', paddingLeft:'1rem'}}></img></span></p>
            <p className={styles.skillItem}>React<span><img src={react} style={{width:'1rem', paddingLeft:'1rem'}}></img></span></p>
          </div>
        </div>
        <div className={styles.skill}>
          <h2 className={styles.skillTitle}>Backend</h2>
          <div className={styles.skillList}>
            <p className={styles.skillItem}>Node.js<span><img src={node} style={{width:'1rem', paddingLeft:'1rem'}}></img></span></p>
            <p className={styles.skillItem}>Express<span><img src={express} style={{width:'3rem', paddingLeft:'1rem'}}></img></span></p>
            <p className={styles.skillItem}>PostgreSQL<span><img src={postgresql} style={{width:'1.5rem', paddingLeft:'1rem'}}></img></span></p>
            <p className={styles.skillItem}>SQL</p>
          </div>
        </div>
        <div className={styles.skill}>
          <h2 className={styles.skillTitle}>Programming Languages</h2>
          <div className={styles.skillList}>
            <p className={styles.skillItem}>Python<span><img src={python} style={{width:'1rem', paddingLeft:'1rem'}}></img></span></p>
            <p className={styles.skillItem}>C#<span><img src={html} style={{width:'1rem', paddingLeft:'1rem'}}></img></span></p>
            <p className={styles.skillItem}>Java<span><img src={html} style={{width:'1rem', paddingLeft:'1rem'}}></img></span></p>
            <p className={styles.skillItem}>C<span><img src={html} style={{width:'1rem', paddingLeft:'1rem'}}></img></span></p>
          </div>
        </div>
        <div className={styles.skill}>
          <h2 className={styles.skillTitle}>Tools</h2>
          <div className={styles.skillList}>
            <p className={styles.skillItem}>Git<span><img src={html} style={{width:'1rem', paddingLeft:'1rem'}}></img></span></p>
            <p className={styles.skillItem}>GitHub<span><img src={html} style={{width:'1rem', paddingLeft:'1rem'}}></img></span></p>
            <p className={styles.skillItem}>VSCode<span><img src={html} style={{width:'1rem', paddingLeft:'1rem'}}></img></span></p>
            <p className={styles.skillItem}>NPM<span><img src={html} style={{width:'1rem', paddingLeft:'1rem'}}></img></span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
