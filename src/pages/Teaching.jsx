import React from "react";
import Navbar from "../components/navbar/Navbar";
import Table from "../components/teaching/Table";

const Teaching = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-slate-300">
      <div className="absolute">
        <Navbar />
      </div>
      <div className="w-[100vw] flex pt-16 flex-col items-center">
        <div className="text-4xl w-fit font-bold mb-8 text-white">
          My <span className="text-[#007cff]">Students</span>
        </div>
        <div className="w-[60vw]">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Teaching;
