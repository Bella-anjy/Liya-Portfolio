import styles from "./about.module.css"

const About = () => {
  return (
    <section className={styles.aboutContainer} id="about">
      <div className={styles.aboutHeader}>
      <h2 className={styles.aboutTitle}>
        About <span>Me</span>
      </h2>
      </div>
      <section className={styles.aboutContent}>
        <div className="aboutImg">
          <img
            src="/about.jpg"
            alt="about"
            className={styles.aboutImage}
          />
        </div>
        <div className={styles.textContent}>
          <p className={styles.aboutText}>
            I’m a passionate full stack developer with over two years of
            hands-on experience building diverse projects. From creating sleek
            landing pages to developing complex applications like hospital
            management and delivery management systems, I’ve had the opportunity
            to solve real-world problems through code. Every project has
            sharpened my skills and deepened my love for crafting efficient,
            user-friendly digital experiences. I’m always eager to learn and
            take on new challenges that push my creativity and technical
            abilities further.
          </p>
          <p className={styles.aboutTexts}>
            Over the years, I have successfully developed a variety of projects
            that showcase my versatility and commitment to quality. These
            include a sleek and responsive landing page designed to captivate
            visitors, a robust hospital management application that streamlines
            patient and staff workflows, and a delivery management system
            tailored to optimize logistics and improve operational efficiency.
            Each project presented unique challenges and learning opportunities,
            pushing me to craft scalable, maintainable code while keeping user
            experience at the forefront.
          </p>
        </div>
      </section>
    </section>
  );
}
export default About