import React from "react";
import Navbar from "../components/navbar/Navbar";
import ScrambleText from "../components/Home/ScrambleText.jsx";
import Button from "../components/Home/Button.jsx";
import Preloader from "../components/Home/Preloader.jsx";
import AboutMe from "../components/Home/AboutMe.jsx";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import Office from "../components/Home/Office.jsx";
import Footer from "../components/Footer/Footer.jsx";
import MyStudents from "../components/Home/MyStudents.jsx";
import {Link} from 'react-router-dom'
import "./css/home.css";
import { setVisibility } from "../redux/slices/timeline.js";
import { phdStudents,mtechStudents,btechStudents,internshipStudents } from '../data/myStudent.js';


const Home = () => {
  const { isVisibility } = useSelector((state) => state.timeline);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setVisibility(1));
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const text = "Hi, I am Dr. प्रदीप कुमार भाले";
  return (
    <motion.div
      className={`home w-[100vw] ${!isVisibility ? "h-[100vh]" : ""}`}
    >
      {/* preloader  */}
      {!isVisibility && <Preloader />}

      {isVisibility && (
        <div>
          {/* navbar  */}
          <div className="absolute">
            <Navbar />
          </div>
          {/* mid content  */}
          <div className="w-[100vw] h-[100vh] flex flex-col text-white gap-5 items-center justify-center">
            <div className="text-box text-5xl">
              <div className="text max-lg:text-4xl max-md:text-3xl max-sm:text-xl">
                {text.split(" ").map((char, index) => (
                  <span key={index} className="glow-letter">
                    {char}
                    &nbsp;
                  </span>
                ))}
              </div>
            </div>
            <ScrambleText/>
            {/* <div className="max-md:text-[1.1rem] text-[1.3rem] flex flex-col justify-center items-center" style={{fontFamily:'Josefin sans'}}>
              <p>
                I did PhD from Indian Institue of Technology Guwahati (IITG)
              </p>
              <p>&</p>
              <p>I teaches Ethical Hacking and Cyber Security</p>
            </div> */}
            <Link to='/AboutMe'>
              <Button />
            </Link>
          </div>

          {/* office  */}
          <Office />
          {/* about me  */}
          <AboutMe />

          <div className="w-[100vw] flex flex-col justify-center items-center">
            {(phdStudents.length>0 || mtechStudents.length>0 || btechStudents.length>0 || internshipStudents.length>0)&&<div className="text-4xl w-fit pt-[10vh] pb-[5vh] font-bold mb-8 text-white">
              My <span className="text-[#007cff]">Students</span>
            </div>}
            <MyStudents />
          </div>

          <Footer />
        </div>
      )}
    </motion.div>
  );
};

export default Home;
