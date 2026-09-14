import { BrowserRouter, Route, Routes } from "react-router";
import { Home, About, Skills, Focus, Contact } from "./pages/index";
import { TopNav, Footer } from "./layout";

function App() {
  return (
    <>
      {/* Background  */}
      <div class="background-grid"></div>
      <div class="glow glow-one"></div>
      <div class="glow glow-two"></div>

      <BrowserRouter basename="/mantubhavi">
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/focus" element={<Focus />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
