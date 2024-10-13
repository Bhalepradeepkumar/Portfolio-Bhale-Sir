import React,{useEffect, useState} from 'react'
import Navbar2 from '../navbar/Navbar2'
import ProfessionalServices from './ProfessionalServices'
import Achievements from './Achievements'
import Awards from './Awards'
import './css/aboutMe.css'
import { useDispatch,useSelector } from 'react-redux';

const AboutMe = () => {
  const {isActive}=useSelector(state=>state.active)
  useEffect(() => {
   
  }, [isActive]);
  return (
    <div className='text-white w-[100vw] flex flex-col items-center font-sans'>
      <div className='w-[90vw] h-[25vh] flex flex-col items-center justify-center'
        style={{fontFamily: "Josefin Sans"}}
      >
        <p className='text-4xl'>Want To Know</p> 
        <p className='text-[#007cff]  text-4xl'>About Me</p>
        <p className='text-[#CDCDCD] mt-4'>A carefully curated blend of technical expertise and creative problem-solving,</p>
        <p className='text-[#CDCDCD]'>focused on delivering impactful and fully functional solutions.</p>
    </div>
    <Navbar2 />
    {isActive.payload===0 && <Awards />}
    {isActive.payload===1 && <Achievements />}
    {isActive.payload===2 && <ProfessionalServices />}
    {console.log(isActive)}
    </div>
  )
}

export default AboutMe
