import { Outlet } from "react-router";

const Home = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Home;
