import React from 'react'
import Navbar from '../components/navbar/Navbar';
import researchPapers from '../data/researchData';
import { Chrono } from "react-chrono";
import './css/research.css';

const Research = () => {
  return (
    <div className='research font-mono'>
      <Navbar/> 
      {/* <Timeline/> */}
      <div className='pt-10'>
      <Chrono items={researchPapers} mode="VERTICAL_ALTERNATING" hideControls />
      </div>
    </div>
  );
}

export default Research
