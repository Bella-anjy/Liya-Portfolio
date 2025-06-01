import { FaExternalLinkAlt } from "react-icons/fa";
import styles from "./projects.module.css";
const Projects = () => {
  return (
    <section className={styles.projectContainer} id="projects">
      <div className={styles.projectHead}>
        <h2 className={styles.projectTitle}>Projects</h2>
        <h3 className={styles.projectSemiTitle}>My Recent Works</h3>
      </div>
      <section className={styles.projectContent}>
        <div className={styles.projectCard}>
          <img
            src="/card-img1.jpg"
            alt="card-img1"
            className={styles.cardImage}
          />
          <div className={styles.projectLayer}>
            <h4>DMS APPLICATION</h4>
            <p>
              Creating a smooth DMs app connecting riders and clients
              effortlessly.
            </p>
            <a
              href="https://bella-anjy.github.io/DMS-APPLICATION-ASSIGNMENT-/"
              target="_blank"
            >
              <FaExternalLinkAlt className={styles.linkIcon} />
            </a>
          </div>
        </div>
        <div className={styles.projectCard}>
          <img
            src="/card-img2.jpg"
            alt="card-img2"
            className={styles.cardImage}
          />
          <div className={styles.projectLayer}>
            <h4>REAL ESTATE LANDING PAGE</h4>
            <p>
              Designing a sleek real estate landing page for seamless property
              discovery.
            </p>
            <a
              href="https://bella-anjy.github.io/Landing-page-assignment-/"
              target="_blank"
            >
              <FaExternalLinkAlt className={styles.linkIcon} />
            </a>
          </div>
        </div>{" "}
        <div className={styles.projectCard}>
          <img
            src="/card-img3.jpg"
            alt="card-img3"
            className={styles.cardImage}
          />
          <div className={styles.projectLayer}>
            <h4>ESTATE LANDIG PAGE</h4>
            <p>
              Crafting a modern estate landing page for smarter home searching.
            </p>
            <a
              href="https://bella-anjy.github.io/Estate-management-page/"
              target="_blank"
            >
              <FaExternalLinkAlt className={styles.linkIcon} />
            </a>
          </div>
        </div>{" "}
        <div className={styles.projectCard}>
          <img
            src="/card-img4.jpg"
            alt="card-img4"
            className={styles.cardImage}
          />
          <div className={styles.projectLayer}>
            <h4>STUDENT LOGIN PAGE</h4>
            <p>
              Creating a clean, user-friendly school login page for seamless
              access.
            </p>
            <a href="https://flexbox-project-four.vercel.app/" target="_blank">
              <FaExternalLinkAlt className={styles.linkIcon} />
            </a>
          </div>
        </div>{" "}
        <div className={styles.projectCard}>
          <img
            src="/card-img5 (2).jpg"
            alt="card-img5"
            className={styles.cardImage}
          />
          <div className={styles.projectLayer}>
            <h4>HEALTHPRO</h4>
            <p>
              Developing an efficient hospital management app for streamlined
              healthcare operations.
            </p>
            <a
              href="https://health-pro-8meh-git-develop-aliyah-olubiyos-projects.vercel.app/"
              target="_blank"
            >
              <FaExternalLinkAlt className={styles.linkIcon} />
            </a>
          </div>
        </div>{" "}
        <div className={styles.projectCard}>
          <img
            src="/card-img6.jpg"
            alt="card-img6"
            className={styles.cardImage}
          />
          <div className={styles.projectLayer}>
            <h4>SCHOOL LOGIN PAGE</h4>
            <p>Building a secure school login page for easy student access.</p>
            <a href="https://flexbox-project-three.vercel.app/" target="_blank">
              <FaExternalLinkAlt className={styles.linkIcon} />
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};
export default Projects;
