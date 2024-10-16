import React from "react";
import Navbar from "../components/navbar/Navbar";
import Table from "../components/teaching/Table";
import Card from "../components/teaching/Card";
import { resources } from "../data/data";
import "./css/Teaching.css";

const Teaching = () => {
  return (
    <div className="teaching w-[100vw] h-[100vh]">
      <div className="absolute">
        <Navbar />
      </div>
      <div className="w-[100vw] flex pt-[11vh] flex-col items-center">
        <div className="text-4xl w-fit font-bold mb-8 text-white">
          My <span className="text-[#007cff]">Students</span>
        </div>
        <div className="w-[100vw]">
          <Table />
        </div>
        {/* <div className="m-10 flex justify-between w-[80vw] gap-10">
          {
            resources.map((resource, index) => (
              <Card
                key={index}
                category={resource.category}
                items={resource.items}
              />
            ))
          }
        </div> */}
      </div>
    </div>
  );
};

export default Teaching;
