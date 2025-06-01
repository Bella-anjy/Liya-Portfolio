import styles from "./hero.module.css";
import { FaEnvelope } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

const Hero = () => {
  return (
    <section className={styles.heroContainer} id="home">
      <section className={styles.heroContent}>
        <h3 className={styles.heroTitle}>Hello, It's Me</h3>
        <h1 className={styles.heroName}>Aliyah Olubiyo</h1>
        <h3 className={styles.heroPara}>
          And I'm a <span>Full Stack Developer</span>
        </h3>
        <p className={styles.heroDesc}>
          Creative full stack developer passionate about crafting responsive,
          user-friendly web interfaces with HTML, CSS, and JavaScript.
        </p>

        <div className={styles.buttons}>
          <div className={styles.btn}>
            <a href="#contact">
              <button className={styles.btns}>
                <FaEnvelope className={styles.icon} />
                Get In Touch
              </button>
            </a>
          </div>

          <div className={styles.btn}>
            <a href="/public/MY CV.pdf" download="MY CV.pdf">
              <button className={styles.btnse}>
                <IoMdDownload className={styles.icon} /> Download My CV
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.heroImage}>
        <img src="/liya-code.jpg" alt="hero" className={styles.image} />
      </section>
    </section>
  );
};

export default Hero;
