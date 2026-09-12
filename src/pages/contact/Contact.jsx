import { Link } from "react-router";
import { GoBriefcase, GoMail } from "react-icons/go";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={`section ${styles["contact-section"]}`}>
      <div className={`container`}>
        <div className={styles["contact-content"]}>
          <p className={`${styles.eyebrow}`}>LET'S CONNECT</p>

          <h2>
            Have an idea?
            <span>Let's build it.</span>
          </h2>

          <p>
            Whether it's software engineering, architecture, enterprise
            development or AI, I'm always interested in learning, discussing and
            building meaningful solutions.
          </p>

          <div className={styles["contact-actions"]}>
            <Link
              to="mailto:bhavi.mmahantesh@gmail.com"
              className={`${styles["contact-button"]} ${styles.primary}`}
            >
              <span>
                <GoMail size={15} />
              </span>
              bhavi.mmahantesh@gmail.com
            </Link>

            <Link
              to="https://www.linkedin.com/in/mahantesh-bhavi-9489b977/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["contact-button"]}
            >
              <span>
                <GoBriefcase size={15} color=" #7c5cff" />
              </span>
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
