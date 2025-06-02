import styles from "./blog.module.css";
import { FaArrowRight } from "react-icons/fa";
const Blog = () => {
  return (
    <section className={styles.blogContainer} id="blog">
      <div className={styles.blogHead}>
        <h2>Blog</h2>
        <p>
          Thoughts, tutorials, and insights on how the start of a Tech Fresher
          might be{" "}
        </p>
      </div>
      <div className={styles.blogContent}>
        <div className={styles.blogCard}>
          <img
            src="/blog-card1.jpg"
            alt=""
            className={styles.blogImage}
          />
          <div className={styles.blogContain}>
            <h2 className={styles.blogTitle}>
              Tools you can Learn during your First two weeks of Programming
            </h2>
            <p>
              Learning programming can be a very exciting journey, especially in
              the first two weeks when you get to explore various tools and
              technologies.
            </p>
            <a
              href="
            https://medium.com/@aliyaholubiyo2008/the-tools-i-learnt-during-my-first-two-weeks-of-learning-programming-611efb1e3a3d
            "
              target="_blank"
              className={styles.link}
            >
              Read more <FaArrowRight className={styles.arrowRight} />
            </a>
          </div>
        </div>
        <div className={styles.blogCard}>
          <img
            src="/blog-card2.jpg"
            alt=""
            className={styles.blogImage}
          />
          <div className={styles.blogContain}>
            <h2 className={styles.blogTitle}>
              What No One Tells You About Learning to Code: The Real Journey
            </h2>
            <p>
              No one really prepares you for what it feels like to learn how to
              code. The internet is filled with tutorials that say “Build a
              website in 5 minutes!”
            </p>
            <a
              href="
            https://medium.com/@aliyaholubiyo2008/the-tools-i-learnt-during-my-first-two-weeks-of-learning-programming-611efb1e3a3d
            "
              target="_blank"
            >
              Read more <FaArrowRight className={styles.arrowRight} />
            </a>
          </div>
        </div>{" "}
        <div className={styles.blogCard}>
          <img
            src="/blog-card3.jpg"
            alt=""
            className={styles.blogImage}
          />
          <div className={styles.blogContain}>
            <h2 className={styles.blogTitle}>
              Just Got Into Tech? Yeah, It’s Exhausting (But You’re Not Alone)
            </h2>
            <p>
              So, you’ve just stepped into the world of tech. Welcome! 🎉 But
              also… deep sigh, I get it. You’re probably already tired.
              Mentally, emotionally —
            </p>
            <a
              href="
            https://medium.com/@aliyaholubiyo2008/just-got-into-tech-yeah-its-exhausting-but-you-re-not-alone-896e538c2089
            "
              target="_blank"
            >
              Read more <FaArrowRight className={styles.arrowRight} />
            </a>
          </div>
        </div>
      </div>
      <a href="https://medium.com/@aliyaholubiyo2008" target="_blank">
        <button className={styles.blogBtn}>View all Posts</button>
      </a>
    </section>
  );
};
export default Blog;
