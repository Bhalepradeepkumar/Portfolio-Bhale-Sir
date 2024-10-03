import React from "react";

const ImageText = (props) => {
  return (
    <div
      className="w-[100vw] min-h-[100vh] flex font-[kanit]"
      style={{ flexDirection: props.direction }}
    >
      <div className="absolute w-[70vw] h-[1vh] top-[15vh] left-10 bg-[#ca6715]"></div>
      <div className="w-[50vw] min-h-[100vh] flex flex-col text-[#d7d7d7] items-center justify-center p-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-[5rem] font-bold">{props.title}</h1>
          <p className="text-[2rem] font-bold">{props.subtitle}</p>
          <p className="text-[1.5rem]">
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
      <div className="image w-[50vw] min-h-[100vh]"></div>
    </div>
  );
};

export default ImageText;
