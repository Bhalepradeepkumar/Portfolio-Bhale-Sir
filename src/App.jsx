import { useState } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import ResearchWork from "./pages/ResearchWork";
import Projects from "./pages/Projects";
import { AnimatePresence } from "framer-motion";
import Teaching from "./pages/Teaching";

function App() {
  const location = useLocation();
  const [count, setCount] = useState(0);

  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/ResearchWork" element={<ResearchWork />} />
          <Route path="/Teaching" element={<Teaching />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
