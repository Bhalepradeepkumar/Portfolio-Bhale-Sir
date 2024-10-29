import React from 'react'
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ImageList from '@mui/material/ImageList';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import './css/imageList.css';

const Students = (props) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('1000')); // xs is 0px to 600px by default
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('750')); // xs is 0px to 600px by default
    const isTooSmallScreen = useMediaQuery(theme.breakpoints.down('600')); // xs is 0px to 600px by default
    
  return (
    <div className=''>
        <h1 style={{fontFamily: "Josefin Sans"}} className='text-white text-2xl font-bold p-10'>{props.category}</h1>

        <div>
      <ImageList variant="masonry" cols={isSmallScreen ?(isMediumScreen?(isTooSmallScreen?1:2): 3): 5} gap={8}>
        {props.data.map((item) => (
          <ImageListItem key={item.img}>
            <a href={item.linkedin}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.name}
              loading="lazy"
              style={{ borderRadius: '15px' }}
              className='imgItem hover:scale-95 transition-all'

            />
            </a>
            <ImageListItemBar
              title={item.name}
              subtitle={
                <>
                  {item.institute} {item.year}
                  <br />
                  {item.degree}
                </>
              }
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>

        </div>
    </div>
  )
}

export default Students
