import React, {useState} from 'react'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import NavbarBox from '../common/NavbarBox.jsx'
import { useDispatch,useSelector } from 'react-redux';
import { setVisibility } from '../../redux/slices/active.js';

const Navbar2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch=useDispatch()
  
  const handleClick = (index) => {
    setActiveIndex(index);
    dispatch(setVisibility(index))
  };
  const {isActive}=useSelector(state=>state.active)

  return (
    <div className='w-[80vw] flex flex-wrap gap-4 justify-center'>
   
      {['Awards', 'Achievements', 'Professional Service', 'Resource Person'].map((text, index) => (
        <NavbarBox
          key={index}
          icon={<EmojiEventsIcon  />}
          text={text}
          addedProperty={`${activeIndex === index ? 'bg-[rgba(0,124,255,0.25)]' : ''}`}
          onClick={() => handleClick(index)}
        />
      ))}
   
    </div>
  )
}

export default Navbar2
