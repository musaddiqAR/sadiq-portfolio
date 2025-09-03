import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <nav className={styles.navbar}>
      {/* Desktop center nav OR Mobile slide-out */}
      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        {menuOpen && (
          <div className={styles.closeBtn} onClick={() => setMenuOpen(false)}>
            ×
          </div>
        )}
        <li onClick={() => scrollToSection("hero")}>// home</li>
        <li onClick={() => scrollToSection("education")}>// education</li>
        <li onClick={() => scrollToSection("skills")}>// skills</li>
        <li onClick={() => scrollToSection("projects")}>// projects</li>
        <li onClick={() => scrollToSection("contact")}>// contact</li>
      </ul>

      {/* Hamburger always right (mobile only visible) */}
      {!menuOpen && (
        <div className={styles.hamburger} onClick={() => setMenuOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
