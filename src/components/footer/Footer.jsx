import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a href="https://github.com/musaddiqAR" target="_blank" rel="noopener noreferrer">
          GITHUB
        </a>
        <a href="https://www.linkedin.com/in/mohammed-sadiq-727bb832a" target="_blank" rel="noopener noreferrer">
          LINKEDIN
        </a>
        <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target="_blank" rel="noopener noreferrer">
          NAUKRI.COM
        </a>
        <a href="/resume.pdf" download>
          RESUME
        </a>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.bottomRow}>
        <p>© 2025 Mohammed Sadiq. All rights reserved.</p>
        <div className={styles.logo}>M</div>
        <div className={styles.extraLinks}>
          <a href="#">PRIVACY</a>
          <a href="#">TERMS</a>
          <a href="#">SITEMAP</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
