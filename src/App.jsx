import { BrowserRouter, Route, Routes } from "react-router";
import { Home, About, Skills, Focus, Projects, Contact } from "./pages/index";
import { TopNav, Footer } from "./layout";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/focus" element={<Focus />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
