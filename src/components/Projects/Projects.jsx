import ProjectCard from "./mini-component/ProjectCard";
import styles from "./Projects.module.css";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import Footer from "./mini-component/Footer";

function Projects() {
  const data = {
    projects: [
      {
        title: "Game Management",
        img: project1,
        github: "https://github.com/FadyDMK/game-inventory",
        live: "https://empathetic-harmony-production.up.railway.app/",
      },
      {
        title: "movie rental store",
        img: project2,
        github: "https://github.com/FadyDMK/dio",
        live: "https://dio-blond.vercel.app/",
      },
      {
        title: "Resume Maker App",
        img: project3,
        github: "https://github.com/FadyDMK/cv-maker",
        live: "https://cv-maker-silk-gamma.vercel.app/",
      },
      {
        title: "Project 4",
        img: "https://via.placeholder.com/150",
        github: "https://github.com",
        live: "https://github.com",
      },
      {
        title: "Project 5",
        img: "https://via.placeholder.com/150",
        github: "https://github.com",
        live: "https://github.com",
      },
      {
        title: "Project 6",
        img: "https://via.placeholder.com/150",
        github: "https://github.com",
        live: "https://github.com",
      },
      {
        title: "Project 7",
        img: "https://via.placeholder.com/150",
        github: "https://github.com",
        live: "https://github.com",
      },
      {
        title: "Project 8",
        img: "https://via.placeholder.com/150",
        github: "https://github.com",
        live: "https://github.com",
      },
      {
        title: "Project 9",
        img: "https://via.placeholder.com/150",
        github: "https://github.com",
        live: "https://github.com",
      },
    ],
  };
  return (
    <div className={styles.container}>
      <h1>Projects</h1>
      <div className={styles.projects}>
        <ProjectCard data={data.projects[0]} />
        <ProjectCard data={data.projects[1]} />
        <ProjectCard data={data.projects[2]} />
      </div>
      <Footer/>
    </div>
  );
}
export default Projects;
