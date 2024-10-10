import React from "react";
import Navbar from "../components/navbar/Navbar";
import ScrambleText from "../components/Home/ScrambleText.jsx";
import BottomAnimation from "../components/Home/BottomAnimation.jsx";
import Button from "../components/Home/Button.jsx";
import Preloader from "../components/Home/Preloader.jsx";
import { useState, useEffect } from "react";
import {motion} from 'framer-motion'
import { useSelector, useDispatch } from "react-redux";
import "./css/Home.css";
import { setVisibility } from "../redux/slices/timeline.js";

const Home = () => {
  const {isVisibility}=useSelector(state=>state.timeline)
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setVisibility(1))
    }, 5000); 

    return () => clearTimeout(timer);

  }, []);

  const text = "Hi, I am Dr.Pradeep Kumar Bhale";
  return (
    <motion.div
    className={`home w-[100vw] ${!isVisibility?'h-[100vh]':''}`}
    >
      {/* preloader  */}
      {!isVisibility&&<Preloader />}

      {isVisibility && (
        <div>
          {/* navbar  */}
          <div className="absolute">
            <Navbar />
          </div>
          {/* mid content  */}
          <div className="w-[100vw] h-[100vh] flex flex-col text-white gap-5 items-center justify-center">
            <div className="text-box text-5xl">
              <div className="text">
                {text.split(" ").map((char, index) => (
                  <span key={index} className="glow-letter">
                    {char}
                    &nbsp;
                  </span>
                ))}
              </div>
            </div>
            <div>
              <ScrambleText />
            </div>
            <Button />
          </div>

          {/* bottom content  */}
          <div className="w-[100vw] flex justify-center">
            <BottomAnimation />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Home;
