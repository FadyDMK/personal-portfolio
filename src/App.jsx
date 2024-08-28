import About from "./components/About/About";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import styles from "./App.module.css";
import Socials from "./components/Socials/Socials";

function App() {
  return (
    <div className={styles.container}>
      <section className={styles.first}>
        <Header />
        <Intro />
        <Socials />
      </section>
      <section className={styles.second}>
        <About />
      </section>
    </div>
  );
}

export default App;
