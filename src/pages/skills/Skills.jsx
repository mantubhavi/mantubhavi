import Styles from "./Skills.module.css";
import { developmentSkills } from "../../util/data";

const Skills = () => {
  return (
    <section className={`section section-dark}`}>
      <div className={`container`}>
        <div className="section-heading">
          <div>
            <p className={`${Styles.eyebrow}`}>MY TOOLKIT</p>
            <h2>
              Technical <span>Skills</span>
            </h2>
          </div>
        </div>

        <div className={Styles["skills-grid"]}>
          {developmentSkills.map((category) => (
            <div className={Styles["skill-card"]} key={category.text}>
              <div className={Styles["skill-header"]}>
                <category.icon size={30} />

                <div>
                  <span>{String(category.skills.length).padStart(2, "0")}</span>

                  <h3>{category.text}</h3>
                </div>
              </div>

              <div className={Styles.tags}>
                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
