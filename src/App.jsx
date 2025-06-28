import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Freelance from "./pages/Freelance";
import Experience from "./pages/Experience";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Projects />
                <Experience />
                <Contact />
              </>
            }
          />
          <Route path="/freelance" element={<Freelance />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
