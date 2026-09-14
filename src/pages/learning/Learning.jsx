import { FaLeaf } from "react-icons/fa6";
import Styles from "./Learning.module.css";

const Learning = () => {
  return (
    <section classNameName={Styles["learning-section"]}>
      <div className="container">
        <div className={Styles["learning-box"]}>
          <div>
            <p className={Styles["eyebrow"]}>MY MINDSET</p>
            <h2>Learn → Apply → Improve → Adapt → Repeat</h2>
          </div>

          <div className={Styles["learning-icon"]}>
            <FaLeaf size={30} color="green" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learning;
