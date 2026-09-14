import { FaRobot } from "react-icons/fa6";
import Styles from "./Focus.module.css";

const Focus = () => {
  return (
    <section className={Styles["ai-section"]} id="focus">
      <div className="container">
        <div className={Styles["ai-content"]}>
          <div className={Styles["ai-icon"]}>
            <FaRobot size={30} />
          </div>

          <p className={Styles["eyebrow"]}>CURRENTLY EXPLORING</p>

          <h2>
            Artificial
            <span>Intelligence</span>
          </h2>

          <p>
            Exploring how Artificial Intelligence can be integrated with modern
            software engineering and enterprise applications to create smarter,
            more efficient and more valuable solutions.
          </p>

          <div className={Styles["ai-pills"]}>
            <span>AI Engineering</span>
            <span>Enterprise AI</span>
            <span>Modern Development</span>
            <span>Continuous Learning</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Focus;
