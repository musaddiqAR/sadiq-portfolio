import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contact.module.css';

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_oemnkct',   
        'template_e6kpzte',   
        form.current,
        '8DfXnt2De4p7rc5h4'     
      )
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          setSuccess(true);
          setError(false);
          form.current.reset();
        },
        (error) => {
          console.error('Error sending email:', error.text);
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <div className={styles.contactSection} id="contact">
      <div className={styles.contactContainer}>
        <div className={styles.left}>
          <h1>Let's work together</h1>
          <p>
            "Hi, I’m Sadiq 👋 A curious developer who loves crafting modern,
             user-friendly applications. From designing responsive frontends
             with React to building powerful backends with Spring Boot,
             I strive to deliver seamless digital experiences."
          </p>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <span>📞</span>
              <p>72595-80453</p>
            </div>
            <div className={styles.infoItem}>
              <span>📧</span>
              <p>mohammedsadiq5804@gmail.com</p>
            </div>
            <div className={styles.infoItem}>
              <span>📍</span>
              <p>9th A 1st B Cross Rd, KEB Colony, 1st Stage, BTM 1st Stage, Bengaluru, Karnataka 560029</p>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <form ref={form} onSubmit={sendEmail} className={styles.form}>
            <input type="text" name="user_name" placeholder="Full Name" required />
            <input type="email" name="user_email" placeholder="Email Address" required />
            <textarea name="message" placeholder="Message" rows="5" required />
            <button type="submit">Submit</button>

            {success && <p className={styles.success}>Message sent successfully!</p>}
            {error && <p className={styles.error}>Failed to send message. Please try again.</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
