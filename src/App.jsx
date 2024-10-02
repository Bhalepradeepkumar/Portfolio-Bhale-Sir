import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Button } from '@mui/material';
import AboutMe from './pages/AboutMe';
import Research from './pages/Research';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Research" element={<Research />} />
        <Route path="/button" element={<Button />} />
      </Routes>
    </div>
  )
}

export default App
