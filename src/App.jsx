import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Button } from '@mui/material';
import DrawAnimation from './components/Home/DrawAnimation';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/draw" element={<DrawAnimation />} />
      </Routes>
    </div>
  )
}

export default App
