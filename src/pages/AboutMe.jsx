import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import ImageText from "../components/common/ImageText";
import Footer from "../components/Footer/Footer";
import Icons from "../components/common/Icons";
import "./css/aboutMe.css";
import { aboutMe } from "../data/aboutMe";

const AboutMe = () => {

  return (
    <div className="aboutMe w-[100%] h-[100%] bg-[#2a2a2a]"> 
      <Navbar />
      <div className="pt-20"></div>
      <ImageText title={aboutMe.title} subtitle={aboutMe.subtitle} content={aboutMe.content}/>
      <Icons/>
      <Footer/>
    </div>
  );
};

export default AboutMe;
