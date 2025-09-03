import React from "react";
import styles from "./Skills.module.css";
import { FaCheckCircle } from "react-icons/fa";

const Skills = () => {
  return (
    <div className={styles.skillsSection}>
      <h2 className={styles.title}>MY SKILLS</h2>

      <div className={styles.skillsContainer}>
        {/* Technical Skills */}
        <div className={styles.skillBox}>
          <h3>Technical Skills</h3>
          <ul>
            <li><FaCheckCircle /> Programming Languages: Java, JavaScript, SQL, HTML, CSS</li>
            <li><FaCheckCircle /> Frameworks & Libraries: React.js, Spring Boot, Hibernate, Bootstrap</li>
            <li><FaCheckCircle /> Database: MySQL</li>
            <li><FaCheckCircle /> Version Control: Git, GitHub</li>
            <li><FaCheckCircle /> Tools & IDEs: VS Code, IntelliJ IDEA, Eclipse, Postman</li>
            <li><FaCheckCircle /> Concepts: OOP, REST API, CRUD Operations, MVC</li>
          </ul>
        </div>

        {/* Full Stack Development Skills */}
        <div className={styles.skillBox}>
          <h3>Full Stack Development Skills</h3>
          <ul>
            <li><FaCheckCircle /> Building backend APIs with Java & Spring Boot</li>
            <li><FaCheckCircle /> Handling database operations with MySQL & Hibernate</li>
            <li><FaCheckCircle /> Developing responsive frontends with React.js, HTML, CSS, Bootstrap</li>
            <li><FaCheckCircle /> Integrating frontend ↔ backend (React + Spring Boot)</li>
            <li><FaCheckCircle /> Deploying & debugging applications</li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div className={styles.skillBox}>
          <h3>Soft Skills 🤝</h3>
          <ul>
            <li><FaCheckCircle /> Problem-Solving & Debugging</li>
            <li><FaCheckCircle /> Team Collaboration</li>
            <li><FaCheckCircle /> Communication Skills</li>
            <li><FaCheckCircle /> Adaptability & Quick Learner</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
