import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jidapa</h1>
        <p className={styles.description}>
          I'm a I graduated from the Faculty of Informatics, Burapha University, with a GPA of 3.06.

During my studies, I had the opportunity to develop programming skills and create applications using various languages. I worked on projects such as a movie theater website, a coffee shop website, and an exam checking system, which helped me enhance my problem-solving abilities and effectively collaborate within a team.

In addition, I gained practical experience through an internship at IRPC, which gave me a better understanding of real-world work environments and motivated me to continuously learn new things.

I am committed to continuously developing my skills in this field and am eager to take on new challenges to grow in the career I love.
        </p>
        <a href="mailto:jibjidapa36854@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
