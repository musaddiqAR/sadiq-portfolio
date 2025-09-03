import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Hero.module.css";

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }
    );

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, delay: 0.6, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      scrollRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, delay: 1.5, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 ref={titleRef} className={styles.heroTitle}>
          MOHAMMED SADIQ
        </h1>
        <p ref={subtitleRef} className={styles.heroSubtitle}>
          Backend & Frontend Integration Developer (Java/React)
        </p>
        <div ref={scrollRef} className={styles.scrollDown}>
          ↓
        </div>
      </div>
    </section>
  );
};

export default Hero;
