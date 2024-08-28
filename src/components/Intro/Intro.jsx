// import { useEffect, useState } from "react";
import avatar from "../../assets/Open Peeps - Bust.png";
import styles from "./Intro.module.css";
import TypeIt from "typeit-react";

function Intro() {
  return (
    <>
      <div className={styles.intro}>
        <img src={avatar} alt="avatar" className={styles.avatar} />
        <div className={styles.text}>
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.blob}
          >
            <path
              fill="#54BFB6"
              d="M42.3,-55.1C53.5,-50.1,60.2,-35.9,62.3,-22C64.4,-8.1,62,5.6,57.8,18.8C53.6,32,47.6,44.7,37.7,52C27.8,59.3,13.9,61.3,-2.2,64.3C-18.3,67.4,-36.7,71.5,-51.8,65.9C-67,60.3,-79.1,45,-83.5,27.9C-88,10.9,-84.8,-7.8,-75.1,-20.2C-65.3,-32.6,-48.8,-38.6,-35.2,-42.7C-21.6,-46.9,-10.8,-49.2,2.4,-52.5C15.6,-55.8,31.2,-60.1,42.3,-55.1Z"
              transform="translate(100 100)"
            />
          </svg>
          <div className={styles.textOverlay}>
            <h1>Hi, I&apos;m Fady</h1>
            <TypeIt
              options={{ loop: true }}
              getBeforeInit={(instance) => {
                instance
                  .type("student")
                  .pause(2000)
                  .delete(7)
                  .pause(500)
                  .type("developer")
                  .pause(2000)
                  .delete(9)
                  .pause(500)
                  .type("programmer")
                  .pause(2000)
                  .delete(10)
                  .pause(500);
                return instance;
              }}
            ></TypeIt>
          </div>
        </div>
      </div>

      <div className={styles.scrollDown}>
        <div className={styles.svgContainer}>
          <svg
            fill="#000000"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 330 330"
          >
            <path
              d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
            />
          </svg>
          <svg
            fill="#000000"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 330 330"
          >
            <path
              d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Intro;
