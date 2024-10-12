import React from 'react'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import NavbarBox from '../common/NavbarBox.jsx'

const Navbar2 = () => {
  return (
    <div className='w-[80vw] flex gap-4 justify-center'>
      <NavbarBox icon={<EmojiEventsIcon/>} text="Awards"/>
      <NavbarBox icon={<EmojiEventsIcon/>} text="Acheivements"/>
      <NavbarBox icon={<EmojiEventsIcon/>} text="Professional Service"/>
      <NavbarBox icon={<EmojiEventsIcon/>} text="Resource Person"/>
    </div>
  )
}

export default Navbar2
