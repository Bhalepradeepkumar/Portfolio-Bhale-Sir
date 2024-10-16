import React from "react";

const ImageText = (props) => {
  return (
    <div
      className="w-[100vw] min-h-[100vh] flex font-[kanit] max-sm:flex-col items-center"
    >
      <div className="w-[50vw] max-sm:hidden flex justify-center items-center h-[100vh]">
        <div className={`image w-[40vw]  h-[70vh]`}></div>
      </div>
      <div className="absolute z-10 w-[70vw] h-[1vh] top-[15vh] left-10 bg-[#ca6715]"></div>
      <div className="w-[50vw] h-fit max-sm:w-[100vw] z-10 flex flex-col text-[#d7d7d7] px-10">
        <h1 className="text-[5rem] max-sm:text-[3.5rem] mt-10 font-bold">
          About <span className="text-[#007cff]">Me</span>
        </h1>
        <div className="mt-10">
          <p className="text-[2rem] max-sm:text-[1.5rem] font-bold">{props.subtitle}</p>
          <p className="text-[1.2rem] mt-5">
            {props.content.split("-").map(
              (part, index) =>
                index !== 0 && (
                  <span key={index}>
                    <li>{part}</li>
                    <br />
                  </span>
                )
            )}
          </p>
        </div>
      </div>
      <div className={`image1 w-[80vw] h-[70vh]`}></div>
    </div>
  );
};

export default ImageText;
