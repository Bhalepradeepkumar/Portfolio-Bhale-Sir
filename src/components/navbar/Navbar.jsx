import React, { useEffect, useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import NavbarPhoneView from "./NavbarPhoneView";
import "./css/navbar.css";

const Navbar = () => {
  return (
    <div>
      <div
        className={`w-[100vw] max-w:[100vw] flex max-[530]:text-[0.6rem] max-sm:px-2 justify-between items-center h-[8vh] fixed top-0 shadow-lg text-white max-md:px-2  shadow-[833ab4]/50 bg-[#49456117] backdrop-blur-md z-50 px-10 transition-all duration-500 max-sm:hidden`}
      >
        <div className="font-bold max-sm:text-[0.9rem]">Dr.Pradeep</div>
        <div className="flex items-center justify-between gap-10 max-sm:gap-4 h-auto border border-[#00000061] bg-[#0300145e] max-sm:text-[0.9rem] max-md:text-[0.75rem] max-md:gap-10 mr-[15px] max-md:p-[10px] max-sm:mx-[7vw] px-[20px] py-[10px] rounded-full text-gray-200">
          <Link to="/">Home</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/ResearchWork">Research Work</Link>
          <Link to="/AboutMe">About Me</Link>
        </div>
        <div className="flex gap-3 px-6 max-sm:hidden">
          <a href="https://www.facebook.com/pradeepkumar.bhale?mibextid=JRoKGi">
            <FacebookIcon sx={{ cursor: "pointer" }} />
          </a>
          <a href="https://www.linkedin.com/in/pradeepkumar-bhale-ph-d-b82970171/">
            <LinkedInIcon sx={{ cursor: "pointer" }} />
          </a>
        </div>
      </div>
      <div className="sm:hidden">
        <NavbarPhoneView />
      </div>
    </div>
  );
};

export default Navbar;
