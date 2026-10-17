import { BrowserRouter, Route, Routes } from "react-router";
import { Home, About, Skills, Focus, Contact } from "./pages/index";
import { TopNav, Footer } from "./layout";

function App() {
  const portfolio = (
    <Home About={About} Skills={Skills} Focus={Focus} Contact={Contact} />
  );
  return (
    <BrowserRouter basename="/mantubhavi">
      {/* Background */}
      <div className="background-grid"></div>
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      <TopNav />

      <Routes>
        <Route path="/" element={portfolio} />
        <Route path="/about" element={portfolio} />
        <Route path="/skills" element={portfolio} />
        <Route path="/focus" element={portfolio} />
        <Route path="/contact" element={portfolio} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
