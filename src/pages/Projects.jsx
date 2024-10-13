import React from "react";
import Navbar from "../components/navbar/Navbar";  
import Container from "../components/Projects/Container";

const Projects = () => {
  return (
    <div>
      {/* navbar  */}
      <div className="absolute">
        <Navbar />
      </div>
      <div className="bg-[#585858] w-[100vw] h-[100vh]">
        <Container/>

      </div>
    </div>
  );
};

export default Projects;
