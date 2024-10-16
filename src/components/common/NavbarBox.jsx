import React from 'react'

const NavbarBox = (props) => {
  return (
    <div className={`text-white cursor-pointer ${props.addedProperty} max-lg:w-[20vw] max-md:text-[0.8rem] max-sm:w-fit font-bold text-[1rem] w-[12vw] flex items-center justify-center border-[#007cff] rounded-md p-3 border-2 hover:bg-[rgba(0,124,255,0.15)] transition ease-in`}
    style={{fontFamily: "Josefin Sans"}} onClick={props.onClick}
    >
      <div className={`text-[rgba(125,136,147,0.7)] mr-2`}>{props.icon}</div>
      {props.text}
    </div>
  )
}

export default NavbarBox
