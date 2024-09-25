import React from "react";
import "./css/BottomAnimation.css";

const BottomAnimation = () => {
  const data = [
    {
      headline: "paper1",
      date: "2021-10-10",
    },
    {
      headline: "paper1",
      date: "2021-10-10",
    },
    {
      headline: "paper1",
      date: "2021-10-10",
    },
    {
      headline: "paper1",
      date: "2021-10-10",
    },
    {
      headline: "paper1",
      date: "2021-10-10",
    },
    {
      headline: "paper1",
      date: "2021-10-10",
    },
    {
      headline: "paper1",
      date: "2021-10-10",
    },
    {
      headline: "paper1",
      date: "2021-10-10",
    },
    {
      headline: "paper1",
      date: "2021-10-10",
    },
    {
      headline: "paper1",
      date: "2021-10-10",
    },
    {
      headline: "paper1",
      date: "2021-10-10",
    },
    {
      headline: "paper1",
      date: "2021-10-10",
    },
    {
      headline: "paper1",
      date: "2021-10-10",
    },
    {
      headline: "paper1",
      date: "2021-10-10",
    },
    {
      headline: "paper1",
      date: "2021-10-10",
    },
    {
      headline: "paper1",
      date: "2021-10-10",
    },
    {
      headline: "paper1",
      date: "2021-10-10",
    },
    {
      headline: "paper1",
      date: "2021-10-10",
    },
  ];

  return (
    <div className="contentBox flex gap-10 overflow-hidden text-white h-[10vh] w-[60vw]">

      <div className="w-[60vw] h-[10vh] flex absolute justify-between">
        <div className="blurRight w-[10vw] h-[10vh] "></div>
        <div className="blurLeft  w-[10vw] h-[10vh] "></div>
      </div>

      <div className="content flex gap-10">
        {data.map((item, index) => {
          return (
            <div key={index} className="inline-block h-[4vh]">
              <div className="headline">{item.headline}</div>
              <div className="date">{item.date}</div>
            </div>
          );
        })}
      </div>
      <div className="content flex gap-10 ">
        {data.map((item, index) => {
          return (
            <div key={index} className="inline-block h-[4vh]">
              <div className="headline">{item.headline}</div>
              <div className="date">{item.date}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BottomAnimation;
