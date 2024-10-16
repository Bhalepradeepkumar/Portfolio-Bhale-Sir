import React, {useEffect, useState} from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import './css/navbar.css'

const Navbar = () => {

  return (
    <div className={`w-full flex max-[530]:text-[0.6rem] max-sm:px-2 justify-between items-center h-[8vh] fixed top-0 shadow-lg text-white  shadow-[833ab4]/50 bg-[#49456117] backdrop-blur-md z-50 px-10 transition-all duration-500`}>
      <div className='font-bold'>Dr.Pradeep</div>
      <div className='flex items-center justify-between gap-10 max-sm:gap-4 h-auto border border-[#00000061] bg-[#0300145e] mr-[15px] max-sm:px-[5px] px-[20px] py-[10px] rounded-full text-gray-200'>
        <Link to='/'>Home</Link>  
        <Link to='/Projects'>Projects</Link>
        <Link to='/Teaching'>Teaching</Link>
        <Link to='/AboutMe'>About Me</Link>
      </div>
      <div className='flex gap-3'>
        <FacebookIcon sx={{ cursor: 'pointer' }}/>
        <InstagramIcon sx={{ cursor: 'pointer' }}/>
      </div>
    </div>
  )
}

export default Navbar
