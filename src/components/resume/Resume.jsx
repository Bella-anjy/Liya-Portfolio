import { FaFileAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

import styles from "./resume.module.css";
const Resume = () => {
  return (
    <section className={styles.resumeContainer}>
      <div className={styles.resumeHead}>
        <h2 className={styles.resumeTitle}>Resume</h2>
      </div>
      <div className={styles.resumeContent}>
        <FaFileAlt className={styles.fileIcon} />
        <h3>My Resume</h3>
        <h4>
          Download my resume to learn more about my experience, skills, and
          qualifications.
        </h4>
        <a href="/MY CV.pdf" download="MY CV.pdf">
          <button className={styles.resumeBtn}>
            <IoMdDownload className={styles.icon} /> Download My CV
          </button>
        </a>
      </div>
    </section>
  );
};
export default Resume;
