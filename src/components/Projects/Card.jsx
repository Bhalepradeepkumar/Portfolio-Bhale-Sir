import React,{useEffect} from 'react'

const Card = (props) => {
  return (
    <div className={`flex ${props.property} cursor-pointer hover:shadow-blue-500/50 hover:shadow-md text-white p-4 hover:bg-[rgba(0,124,255,0.2041608879880077)] max-h-[17vh] h-fit border-[1px] rounded-xl border-[rgba(0,124,255,1)] font-sans`} onClick={props.onClick}>
        <div>{props.logo}</div>
        <div>
            <div className='text-[1.2rem] '>{props.title}</div>
            <div>{props.field}</div>
        </div>
    </div>
  )
}

export default Card
