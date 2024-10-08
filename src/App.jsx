import About from "./components/About/About";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import styles from "./App.module.css";
import Socials from "./components/Socials/Socials";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.container} >
      <section className={styles.first} id="first">
        <Header />
        <Intro />
        <Socials />
      </section>

      <section className={styles.second} id="second">
        <About />
      </section>

      <section className={styles.third} id="third">
        <Skills />
      </section>

      <section className={styles.fourth} id="fourth">
        <Projects />
      </section>
    </div>
  );
}

export default App;
