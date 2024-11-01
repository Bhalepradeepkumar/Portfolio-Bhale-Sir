import React,{useEffect} from 'react'
import {achievements} from '../../data/data.js'
import { useSelector } from 'react-redux'

const Achievements = () => {
  const {isActive}=useSelector(state=>state.active)

  return (
    <div className='w-[90vw] mt-14 border-[#007cff] border-[1px] p-4 rounded-xl text-white'>
    {achievements.map((achievement, index) => (
      <div key={index} className='flex gap-4 mb-10'>
       - {achievement.text} <span className='date'>{achievement.date}</span>
      </div>
    ))}
    </div>
  )
}

export default Achievements
