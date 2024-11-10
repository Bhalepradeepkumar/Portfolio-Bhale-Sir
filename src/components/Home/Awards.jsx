import React,{useEffect} from 'react'
import {awards} from '../../data/data.js'
import { useSelector } from 'react-redux'

const Awards = () => {
  const {isActive}=useSelector(state=>state.active)

  return (
    <div className='w-[60vw] mt-14 border-[#007cff] border-[1px] p-4 rounded-xl text-white'>
    {awards.map((achievement, index) => (
      <div key={index} className={`flex gap-4 ${awards.length>1?'mb-4':''} ${index===awards.length-1 && 'mb-0'}`}>
       - {achievement.title} <span className='date'>{achievement.year}</span>
      </div>
    ))}
    </div>
  )
}

export default Awards
