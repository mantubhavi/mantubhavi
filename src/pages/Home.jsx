import { Outlet } from "react-router";
import { Hero } from "./index";

const Home = () => {
  return (
    <>
      <main>
        <Outlet />
        <Hero />
      </main>
    </>
  );
};

export default Home;
