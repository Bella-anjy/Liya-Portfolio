import styles from "./skills.module.css";
import { skills } from "../../utils/data";

const Skills = () => {
  return (
    <section className={styles.skillsContainer} id="skills">
      <div className={styles.skillsWrapper}>
        <h2 className={styles.skillsTitle}>Skills</h2>
        <h4 className={styles.skillsSemiTitle}>
          Technologies and Tools I work with
        </h4>
      </div>

      <div className={styles.skillGridWrapper}>
        {skills.map((section, index) => (
          <div key={index} className={styles.skillColumn}>
            <h3 className={styles.categoryTitle}>{section.category}</h3>
            <div className={styles.skillsGrid}>
              {section.items.map(({ id, name, icon: Icon }) => (
                <div key={id} className={styles.skillCard}>
                  
                  <Icon className={styles.skillIcon} />
                  
                  <p>{name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
