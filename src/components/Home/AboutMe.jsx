import React from 'react'
import Navbar2 from '../navbar/Navbar2'
import ProfessionalServices from './ProfessionalServices'
import Achievements from './Achievements'
import './css/aboutMe.css'

const AboutMe = () => {
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
    <Achievements />
    <ProfessionalServices />
    </div>
  )
}

export default AboutMe
