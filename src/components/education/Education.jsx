import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Education.module.css";

const Education = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.to(cardsRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.3, // animate one by one
      ease: "power3.out",
    });
  }, []);

  return (
    <section className={styles.education}>
      <h2 className={styles.educationTitle}>My Education</h2>
      <div className={styles.educationContainer}>
        
        {/* Card 1 */}
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className={styles.educationCard}
        >
          <div className={styles.icon}>🎓</div>
          <h3>
            <span className={styles.highlightPink}>BCA</span> (2021–2024)
          </h3>
          <p>
            Completed Bachelor of Computer Applications with core subjects like Java, DBMS, Web Development, and Data Structures.
          </p>
        </div>

        {/* Card 2 */}
        <div
          ref={(el) => (cardsRef.current[1] = el)}
          className={styles.educationCard}
        >
          <div className={styles.icon}>📜</div>
          <h3>
            <span className={styles.highlightBlue}>Java Development</span> Course
          </h3>
          <p>
            Completed a 6-month Java Full Stack Development course covering Spring Boot, Hibernate, MySQL, React, and REST APIs.
          </p>
        </div>

        {/* Card 3 */}
        <div
          ref={(el) => (cardsRef.current[2] = el)}
          className={styles.educationCard}
        >
          <div className={styles.icon}>💻</div>
          <h3>
            <span className={styles.highlightOrange}>Projects</span> & Practical
          </h3>
          <p>
            Worked on real-time projects like Online Hospital Management System and Employee CRUD application with SQL + Hibernate.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Education;
