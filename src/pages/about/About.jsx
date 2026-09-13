import { FaLaptopCode, FaPuzzlePiece, FaDraftingCompass } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className={styles["section-heading"]}>
          <div>
            <p className={`${styles.eyebrow}`}>WHO I AM</p>
            <h2>
              About <span>Me</span>
            </h2>
          </div>
        </div>

        <div className={styles["about-grid"]}>
          <div className={styles["about-text"]}>
            <p className={`${styles.lead}`}>
              I'm a <strong>Lead Consultant</strong> passionate about building
              reliable, scalable and maintainable enterprise software.
            </p>

            <p>
              My experience spans backend and frontend development, software
              architecture, database design and modern engineering practices. I
              enjoy turning complex business requirements into clean, practical
              technical solutions.
            </p>

            <p>
              Currently, I'm expanding my knowledge in
              <strong className={`${styles.highlight}`}>
                {" "}
                Artificial Intelligence{" "}
              </strong>
              and exploring how AI can be integrated into modern enterprise
              applications and software development workflows.
            </p>

            <div className={`${styles.quote}`}>
              <span>"</span>
              Always learning. Always improving. Always evolving.
            </div>
          </div>

          <div className={styles["about-cards"]}>
            <div className={styles["info-card"]}>
              <div className={styles["info-icon"]}>
                <FaDraftingCompass size={30} title="Architecture" />
              </div>
              <div>
                <h3>Architecture</h3>
                <p>Designing scalable software solutions.</p>
              </div>
            </div>

            <div className={styles["info-card"]}>
              <div className={styles["info-icon"]}>
                <FaLaptopCode size={30} title="Development" />
              </div>
              <div>
                <h3>Enterprise Development</h3>
                <p>Building robust business applications.</p>
              </div>
            </div>

            <div className={styles["info-card"]}>
              <div className={styles["info-icon"]}>
                <FaPuzzlePiece size={30} title="Problem Solving" />
              </div>
              <div>
                <h3>Problem Solving</h3>
                <p>Breaking complex problems into simple solutions.</p>
              </div>
            </div>

            <div className={styles["info-card"]}>
              <div className={styles["info-icon"]}>
                <GiArtificialIntelligence size={30} title="AI" />
              </div>
              <div>
                <h3>AI Exploration</h3>
                <p>Exploring AI-powered software experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
