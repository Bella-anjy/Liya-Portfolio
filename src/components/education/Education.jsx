import styles from './education.module.css';
const Education = () => {
  return (
    <section className={styles.educationContainer} id="education">
      <div className={styles.educationHeader}>
        <h2 className={styles.educationTitle}>Education</h2>
      </div>
      <section className={styles.education}>
        <section className={styles.educationContent}>
          <div className={styles.educationItem}>
            <div className={styles.div}>
              <h3 className={styles.educationDegree}>
                Currently Studying Computer Science
              </h3>
              <p className={styles.educationYear}>2025 - Present</p>
            </div>
            <div className={styles.diva}>
              <p className={styles.educationInstitution}>
                Tai Solarin University
              </p>
              <p>CGPA 3.98/4.0</p>
            </div>
            <p>
              I am currently pursuing a degree in Computer Science at
              university, where I am dedicated to expanding my knowledge and
              technical skills. Studying this field allows me to stay up-to-date
              with the latest technologies.
            </p>
          </div>
          <div className={styles.educationItem}>
            <div className={styles.divb}>
              <h3 className={styles.educationDegree}>Graduated College</h3>
              <p className={styles.educationYear}>2017 - 2023</p>
            </div>
            <div className={styles.divc}>
              <p className={styles.educationInstitution}>Investors College</p>
              <p>z-score: 3.0865</p>
            </div>
            <p>
              I graduated from Investors College with a focus on Computer
              Science. My time there was marked by a strong academic
              performance, achieving a z-score of 3.0865, which reflects my
              dedication and proficiency in the subject.
            </p>
          </div>
        </section>
        <section className={styles.educationContain}>
          <h2 className={styles.educationText}>Certifications</h2>
          <section className={styles.educationItems}>
            <div className={styles.educationIteme}>
              <h4 className={styles.certification}>
                Introduction to Frontend Development - Frontend Developer
              </h4>
              <p>AAM Technologies Limiited - 2022</p>
            </div>
            <div className={styles.educationIteme}>
              <h4 className={styles.certification}>
                React Basis - Frontend Developer
              </h4>
              <p>Marusoft Technologies Limited - 2025</p>
            </div>
            <div className={styles.educationIteme}>
              <h4 className={styles.certification}>
                Javascript Completion - Backend Developer
              </h4>
              <p>Marusoft Technologies Limiited - 2025</p>
            </div>
            <div className={styles.educationIteme}>
              <h4 className={styles.certification}>
                Node.js Completion - Frontend Developer
              </h4>
              <p>Marusoft Technologies Limiited - 2024</p>
            </div>
            <div className={styles.educationIteme}>
              <h4 className={styles.certification}>
                Version Control - Full Stack Developer
              </h4>
              <p>Marusoft Technologies Limiited - 2024</p>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}
export default Education