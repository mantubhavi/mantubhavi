import { Link } from "react-router";
import Styles from "./TopNav.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const TopNav = () => {
  return (
    <header className={`${Styles.navbar} ${Styles.scrolled}`}>
      <div className={`container ${Styles["nav-container"]}`}>
        <Link to="/" className={Styles.logo}>
          <FiChevronLeft className={Styles.logoIcon} size={20} />
          MB<span className={Styles.slash}>/</span>
          <FiChevronRight className={Styles.logoIcon} size={20} />
        </Link>

        <button
          className={Styles["menu-toggle"]}
          id="menuToggle"
          aria-label="Toggle menu"
        >
          <GiHamburgerMenu />
        </button>

        <nav id="navMenu">
          <Link to="/"> Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/focus">Focus</Link>
          <Link to="/projects">Projects</Link>
        </nav>

        <Link to="/contact" className={Styles["nav-button"]}>
          Let's Connect
        </Link>
      </div>
    </header>
  );
};

export default TopNav;
