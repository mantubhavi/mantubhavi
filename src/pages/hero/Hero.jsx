import { Link } from "react-router";
import Styles from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={Styles.hero} id="home">
      <div className={`container ${Styles.heroContent}`}>
        <div>
          <p className={Styles.eyebrow}>Namaste, I'M</p>

          <h1>
            Mahantesh
            <span>Bhavi.</span>
          </h1>

          <h2>
            Lead Consultant
            <span>|</span>
            Software Engineering
          </h2>

          <p className={Styles.heroDescription}>
            I design and develop scalable enterprise applications, combining
            strong software engineering practices with modern technologies and
            an evolving passion for Artificial Intelligence.
          </p>

          <div className={Styles.heroActions}>
            <Link
              to="/contact"
              className={`${Styles.btn} ${Styles.btnSecondary}`}
            >
              Get In Touch
            </Link>
          </div>

          <div className={Styles["quick-stats"]}>
            <div>
              <strong>.NET Core</strong>
              <span>Backend</span>
            </div>

            <div>
              <strong>.NET</strong>
              <span>Backend</span>
            </div>

            <div>
              <strong>React</strong>
              <span>Frontend</span>
            </div>

            <div>
              <strong>AI</strong>
              <span>Exploring</span>
            </div>
          </div>
        </div>

        {/* Developer Card */}
        <div className={Styles["hero-card reveal"]}>
          <div className={`${Styles.terminal}`}>
            <div className={Styles["terminal-header"]}>
              <div className={Styles["terminal-dots"]}>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span>mahantesh.cs</span>

              <span></span>
            </div>

            <div className={Styles["terminal-body"]}>
              <p>
                <span className={Styles["code-purple"]}>const </span>
                {"developer"}
                <span className={Styles["code-white"]}>{" = "}</span>
                <span className={Styles["code-yellow"]}>{"{"}</span>
              </p>

              <p className={Styles["indent"]}>
                {"name: "}
                <span className={Styles["code-green"]}>"Mahantesh Bhavi"</span>,
              </p>

              <p className={Styles["indent"]}>
                {"role: "}
                <span className={Styles["code-green"]}>"Lead Consultant"</span>,
              </p>

              <p className={Styles["indent"]}>
                {"backend: "}
                <span className={Styles["code-green"]}>
                  [".Net Core", ".Net", "C#"]
                </span>
                ,
              </p>

              <p className={Styles["indent"]}>
                {"frontend: "}
                <span className={Styles["code-green"]}>
                  ["React", "JavaScript", "TypeScript", "CSS"]
                </span>
                ,
              </p>

              <p className={Styles["indent"]}>
                {"databases: "}
                <span className={Styles["code-green"]}>["SQL", "MySQL"]</span>,
              </p>

              <p className={Styles["indent"]}>
                {"learning: "}
                <span className={Styles["code-green"]}>
                  "Artificial Intelligence"
                </span>
                ,
              </p>

              <p className={Styles["indent"]}>
                {"cloud: "}
                <span className={Styles["code-green"]}>"Azure"</span>
              </p>

              <p className={Styles["indent"]}>
                {"mindset: "}
                <span className={Styles["code-green"]}>"Always Learning"</span>
              </p>

              <p>
                <span className={Styles["code-yellow"]}>{"}"}</span>
              </p>

              <p className={Styles["terminal-cursor"]}>
                <span>▌</span>
              </p>
            </div>
          </div>
        </div>

        <div className={Styles["scroll-indicator"]}>
          <span></span>
          Scroll to explore
        </div>
      </div>
    </section>
  );
};

export default Hero;
