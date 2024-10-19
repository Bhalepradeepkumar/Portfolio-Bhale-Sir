import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import Card from './Card';
import { useDispatch,useSelector } from 'react-redux';
import {setSideList} from '../../redux/slices/research.js';
import './css/scroller.css';

export default function WovenImageList(props) {
  const {sideListVar}= useSelector(state=>state.research)
  const dispatch = useDispatch();
  const handleClick = (index) => {
    dispatch(setSideList(index));
  };

  return (
    <ImageList
      className="hide-scrollbar"
      sx={{ width: '30vw', marginLeft: "10px", height: "100vh" }}
      variant="woven"
      cols={1}
    >
      <div className='flex flex-col gap-4'>
        {props.data && Array.isArray(props.data) && props.data.map((item, index) => (
          index !== 0 && <Card key={index} title={item.title} field={item.field} onClick={() => handleClick(index)} />
        ))}
      </div>
    </ImageList>
  );
}
