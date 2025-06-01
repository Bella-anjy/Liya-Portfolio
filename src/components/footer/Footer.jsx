import { FaRegCopyright } from "react-icons/fa";
import styles from "./footer.module.css"
const Footer = () => {
  return (
    <section className={styles.footerContainer}>
      <p>
        <FaRegCopyright />
        2025 Aliyah Olubiyo. All rights reserved.
      </p>
    </section>
  );
};
export default Footer;
