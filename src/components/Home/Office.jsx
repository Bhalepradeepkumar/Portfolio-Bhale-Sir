import React from "react";
import Timeline from "../common/Timeline";
import "./css/office.css";
import '../../App.css'
import '../../index.css'

const Office = () => {
  return (
    <div className="office mt-10 max-md:flex-col-reverse w-[100vw] min-h-[60vh] border-t-1 border-b-1 flex justify-center text-white items-center">
      <div className="w-[50vw] max-md:w-[90vw]  min-h-[60vh] p-5 flex justify-center items-center">
        <Timeline />
      </div>
      <div className="p-5 max-md:w-[90vw] min-h-[60vh] max-md:h-[40vh] w-[50vw] font-sans">
        <p className="mt-[5vh] max-xl:text-4xl text-5xl">
          My <span className="text-[#007cff] font-bold">Education</span> and
        </p>
        <p className="text-5xl max-xl:text-4xl mt-4">
          My <span className="text-[#007cff] font-bold"> Work Experience</span>
        </p>
        <p className="mt-4 text-[#CDCDCD]">
          The gentle breeze rustled through the trees, carrying the scent of
          fresh rain across the fields. Sunlight filtered through the clouds,
          casting soft shadows on the ground. Birds chirped in the distance,
          their melodies blending with the rustle of leaves, creating a
          peaceful, timeless moment in nature’s embrace.
        </p>
      </div>
    </div>
  );
};

export default Office;
