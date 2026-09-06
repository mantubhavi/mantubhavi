import { Link } from "react-router";
import { GoDotFill } from "react-icons/go";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={`container ${Styles["footer-content"]}`}>
        <div>
          <Link to="/" className={Styles.logo}>
            <FiChevronLeft className={Styles.logoIcon} size={20} />
            MB<span className={Styles.slash}>/</span>
            <FiChevronRight className={Styles.logoIcon} size={20} />
          </Link>

          <p>
            Lead Consultant <GoDotFill size={7} /> Software Engineering{" "}
            <GoDotFill size={7} /> AI Enthusiast
          </p>
        </div>

        <div className={Styles["footer-right"]}>
          <p>&copy; {new Date().getFullYear()} Mahantesh Bhavi</p>
          <p>
            🚀 Learn <GoDotFill size={7} /> Build <GoDotFill size={7} /> Improve{" "}
            <GoDotFill size={7} /> Evolve
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
