import React from "react";
import Education from "./Education";
import SchoolIcon from '@mui/icons-material/School';
// import './css/card.css'

const Card = (props) => {
  return (
    <div className="w-[90vw] h-[30vh]">
      <div className="flex w-[100%] h-[100%]">
        <div className="w-[20vw] h-[10vh] text-[#d5d5d5] flex justify-end absolute font-bold left-10 text-4xl">MY <br />EDUCATION</div>
        <div className="w-[20vw] h-[100%] flex justify-end font-bold text-4xl"></div>
        <div className="w-[70vw] h-[100%] flex gap-10 font-mono justify-center bg-[#F8B21C]">
          <Education icon={<SchoolIcon sx={{ fontSize: 40 }}/>} content={`2008: <br/> Higher Secondary`}/>
          <Education icon={<SchoolIcon sx={{ fontSize: 40 }}/>} content={`2008: <br/> Higher Secondary`}/>
          <Education icon={<SchoolIcon sx={{ fontSize: 40 }}/>} content={`2008: <br/> Higher Secondary`}/>
          <Education icon={<SchoolIcon sx={{ fontSize: 40 }}/>} content={`2008: <br/> Higher Secondary`}/>
        </div>
      </div>
    </div>
  );
};

export default Card;
