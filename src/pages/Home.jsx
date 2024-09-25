import React from "react";
import Navbar from "../components/navbar/Navbar";
import ScrambleText from "../components/Home/ScrambleText.jsx";
import BottomAnimation from "../components/Home/BottomAnimation.jsx";
import "./css/Home.css";
// import dots from "../assets/dots.drawio.svg";

const Home = () => {
  const text = "Hi, I am Dr.Pradeep Kumar Bhale";
  return (
    <div className="home w-[100vw]">
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

        </div>
        
      {/* bottom content  */}
      <div className="w-[100vw] flex justify-center">
        <BottomAnimation/>
      </div>

    </div>
  );
};

export default Home;
