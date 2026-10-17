import { useEffect } from "react";
import { useLocation } from "react-router";
import { Hero } from "./index";

const Home = ({ About, Skills, Focus, Contact }) => {
  const location = useLocation();

  useEffect(() => {
    const sectionId =
      location.pathname === "/" ? "home" : location.pathname.slice(1);

    const frame = requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [location.pathname]);

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Focus />
      <Contact />
    </main>
  );
};

export default Home;
