import { useState } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { Button } from "@mui/material";
import AboutMe from "./pages/AboutMe";
import Research from "./pages/Research";
import Projects from "./pages/Projects";
import { AnimatePresence } from "framer-motion";

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
          <Route path="/Research" element={<Research />} />
          <Route path="/button" element={<Button />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
