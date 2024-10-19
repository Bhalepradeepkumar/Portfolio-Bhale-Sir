import React from 'react'

const ProjectData = (props) => {
  return (
    <div className='w-[60vw] h-[100vh] ml-10 text-white font-sans'>
      {console.log("hello",props.lol)}
      <div className='text-[2.5rem] text-white font-bold'>My <span className='text-[#007cff] '>Projects</span></div>
      <div className='mt-10 text-[1.7rem]'>{props.title}</div>  
      <div className='mt-5 text-[1.2rem]'>{props.description}</div>
      <div className='mt-5 text-[1.3rem] decoration-solid text-[#097cff]'><a href={props.link}>Click for research paper</a></div>
    </div>
  )
}

export default ProjectData
