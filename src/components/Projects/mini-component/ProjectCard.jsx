import styles from "./ProjectCard.module.css";
import propTypes from "prop-types";

ProjectCard.propTypes = {
  data: propTypes.shape({
    title: propTypes.string,
    img: propTypes.string,
    github: propTypes.string,
    live: propTypes.string,
  }),
};

function ProjectCard({ data }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.projectImg}>
        <img src={data.img}></img>
      </div>
      <div className={styles.projectTitle}>{data.title}</div>
      <div className={styles.buttons}>
        <a href={data.github}>Github Repo</a>
        <a href={data.live}>Live Website</a>
      </div>
    </div>
  );
}
export default ProjectCard;
