import { Link } from "react-router";
import Styles from "./TopNav.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiChevronRight, FiChevronLeft, FiX } from "react-icons/fi";
import { useState } from "react";

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`${Styles.navbar} ${Styles.scrolled}`}>
      <div className={`container ${Styles["nav-container"]}`}>
        <Link to="/" className={Styles.logo} onClick={closeMenu}>
          <FiChevronLeft className={Styles.logoIcon} size={20} />
          MB<span className={Styles.slash}>/</span>
          <FiChevronRight className={Styles.logoIcon} size={20} />
        </Link>

        {/* Mobile menu button */}
        <button
          className={Styles["menu-toggle"]}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <FiX /> : <GiHamburgerMenu />}
        </button>

        <nav
          className={`${Styles.navMenu} ${isMenuOpen ? Styles.menuOpen : ""}`}
        >
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
          <Link to="/skills" onClick={closeMenu}>
            Skills
          </Link>
          <Link to="/focus" onClick={closeMenu}>
            Focus
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default TopNav;
