import { useEffect, useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { FaMoon, FaSun } from "react-icons/fa";
import { navbarData } from "../../utils/data";

import styles from "./navbar.module.css";

const Navbar = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const [menuOpen, setMenuOpen] = useState(false); // <-- track menu open/close

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <section className={styles.navbar} >
      <section>
        <a href="#" className={styles.logo}>
          Liya
        </a>
      </section>

      {/* Nav list comes BEFORE the menu icon */}
      <ul className={`${styles.navLists} ${menuOpen ? styles.showMenu : ""}`}>
        {navbarData.map((item) => (
          <a key={item.id} href={`#${item.path}`} className={styles.navLink}>
            <li className={styles.navList}>{item.name}</li>
          </a>
        ))}
      </ul>

      <div className={styles.rightControls}>
        <button onClick={toggleTheme} className={styles.themeToggle}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
        <VscMenu onClick={toggleMenu} className={styles.menuIcon} />
      </div>
    </section>
  );
};

export default Navbar;
