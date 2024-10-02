import React from "react";
import Navbar from "../components/navbar/Navbar";
import Card from "../components/education/Card";
import Line from "../components/common/Line";
import './css/aboutMe.css'
import tom from '../assets/tom.jpeg'

const AboutMe = () => {
  return (
    <div className="w-[100%] h-[100%] bg-[#2a2a2a]">
      <Navbar />
      <div className="w-[100vw] h-[100vh] flex font-[kanit]">
        <div className="absolute w-[70vw] h-[1vh] top-[15vh] left-10 bg-[#ca6715]"></div>
        <div className="w-[50vw] h-[100vh] flex flex-col text-[#d7d7d7] items-center justify-center p-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-[5rem] font-bold">About Me</h1>
            <p className="text-[2rem] font-bold">I’m passionate about innovation and driven by impact.</p>
            <p className="text-[1.5rem]">
              I really enjoy working on cutting-edge projects and developing
              enabling new technologies in the hope that these will one day
              translate back to the real world and have a direct impact on our
              lives. I also enjoy being surrounded by brilliant people that
              share the vision of “technology for good” and I’m truly humbled by
              their support. Meanwhile, I’m excited by the ever-growing
              challenges I’m faced with as my career unfolds and keen to take
              them on.
            </p>
          </div>
        </div>
        <div className="image w-[50vw] h-[100vh]">
        </div>
      </div>

      <div className="w-[100vw] flex justify-center items-center h-[30vh]">
      <Line />

      </div>
      
      {/* Education */}
      <div>
        <Card path={tom}/>
      </div>
    </div>
  );
};

export default AboutMe;
