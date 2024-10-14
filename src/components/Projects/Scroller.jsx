import * as React from 'react';
import { useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import Card from './Card';
import { projects } from '../../data/data';
import { useDispatch } from 'react-redux';
import { setIndex } from '../../redux/slices/index.js';
import './css/scroller.css'; // Import the CSS file

export default function WovenImageList() {
  const dispatch=useDispatch()
  const handleClick = (index) => {
      dispatch(setIndex(index))
  };
  return (
    <ImageList 
      className="hide-scrollbar" // Apply the custom class
      sx={{ width: '30vw', marginLeft: "10px", height: "100vh" }} 
      variant="woven" 
      cols={1}
    >
      <div className='flex flex-col gap-4'>
      {projects.map((item, index) => (
        index!==0 && <Card key={index} title={item.title} field={item.field} onClick={()=>handleClick(index)} />
      ))}
      </div>
    </ImageList>
  );
}