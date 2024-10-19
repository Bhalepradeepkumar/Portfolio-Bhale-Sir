import React, {useEffect, useState} from 'react'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CatBox from './CatBox.jsx';
import { useDispatch,useSelector } from 'react-redux';
import { setSideList,setTopList } from '../../redux/slices/research.js';

const CategoryBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch=useDispatch()
  const {topListVar}=useSelector(state=>state.research)
  useEffect(()=>{
    dispatch(setSideList(0))
  },[topListVar])
  const handleClick = (index) => {
    setActiveIndex(index);
    dispatch(setTopList(index))
  };

  return (
    <div className='w-[80vw] flex flex-wrap gap-4 justify-center'>
      {['Journals', 'Confrences', 'Workshops', 'Pre-prints','Patents'].map((text, index) => (
        <CatBox
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

export default CategoryBar
