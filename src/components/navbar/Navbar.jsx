import React from 'react'
import './css/navbar.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className='w-full flex justify-between items-center h-[8vh] fixed top-0 shadow-lg text-white  shadow-[833ab4]/50 bg-[#49456117] backdrop-blur-md z-50 px-10'>
      <div>Navbar</div>
      <div className='flex items-center justify-between gap-10 h-auto border border-[#00000061] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
        <Link to='/'>Home</Link>  
        <Link to='/AboutMe'>About</Link>
        <Link to='/Research'>Research</Link>
      </div>
      <div className='flex gap-3'>
        <FacebookIcon/>
        <InstagramIcon/>
      </div>
    </div>
  )
}

export default Navbar
