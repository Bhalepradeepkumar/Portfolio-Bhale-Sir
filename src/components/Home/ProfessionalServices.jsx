import React from "react";
import {
  membership,
  reviewer,
  technicalProgramCommittee,
  volunteer,
} from "../../data/data.js";

import { useSelector } from "react-redux";

const ProfessionalServices = () => {
  const { isActive } = useSelector((state) => state.active);
  return (
    <div>
      <div className="w-[90vw] mt-14 border-[#007cff] border-[1px] p-4 rounded-xl text-white">
        {(membership.length>0)&&(<div className="mt-4">
          <p className="font-bold text-xl m-2">membership</p>
          {(membership.map((data, index) => (
            <div key={index} className="flex gap-4">
              - {data.text}{" "}
              <span className="date">
                {data.date !== "N/A" ? data.date : ""}
              </span>
            </div>
          )))}
        </div>)}
        <div className="mt-4">
          <p className="font-bold text-xl m-2">reviewer</p>
          {reviewer.map((data, index) => (
            <div key={index} className="flex gap-4">
              - {data.text}{" "}
              <span className="date">
                {data.date !== "N/A" ? data.date : ""}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <p className="font-bold text-xl m-2">technicalProgramCommittee</p>
          {technicalProgramCommittee.map((data, index) => (
            <div key={index} className="flex gap-4">
              - {data.text}{" "}
              <span className="date">
                {data.date !== "N/A" ? data.date : ""}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <p className="font-bold text-xl m-2">volunteer</p>
          {volunteer.map((data, index) => (
            <div key={index} className="flex gap-4">
              - {data.text}{" "}
              <span className="date">
                {data.date !== "N/A" ? data.date : ""}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalServices;
