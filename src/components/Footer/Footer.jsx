import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="w-[100vw] flex mt-10 flex-col items-center justify-center bg-[#3b3b3b18]">
      <div className="flex gap-10 mt-10 text-white">
        <a href="https://www.facebook.com/pradeepkumar.bhale?mibextid=JRoKGi"><FacebookIcon fontSize="large" sx={{ cursor: "pointer" }} /></a>
        <a href="https://www.linkedin.com/in/pradeepkumar-bhale-ph-d-b82970171/"><LinkedInIcon fontSize="large" sx={{ cursor: "pointer" }} /></a>
      </div>

      <div className="flex items-center mt-5 flex-col w-[100vw] mb-10 text-white font-sans xl:hidden">
            <div className=" text-xl font-bold"><span className="text-[#007cff]">Developed</span> By</div>
          <div className="mt-2 flex justify-center flex-col items-center text-[0.8rem] font-bold">
            <p>
              Devansh Pratap Sisodiya
            </p>
            <p >devanshpratap21@gmail.com</p>
          </div>
      </div>

      <div className="flex justify-end w-[100vw] mb-20 text-white max-xl:hidden">
        <div className="font-sans w-[25vw] flex">
          <p
            className="text-2xl font-bold"
            style={{ transform: "rotate(270deg)" }}
          >
            <span className="text-[#007cff]">Developed</span> By
          </p>
          <div>
            <p className="mr-10 text-[1.1rem] font-bold">
              Devansh Pratap Sisodiya
            </p>
            <p>devanshpratap21@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
