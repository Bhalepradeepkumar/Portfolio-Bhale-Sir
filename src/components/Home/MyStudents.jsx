import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import {itemData} from '../../data/myStudent.js';

export default function TitlebarBelowMasonryImageList() {
  return (
    <Box sx={{ width: '80vw'}}>
      <ImageList variant="masonry" cols={4} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.name}
              loading="lazy"
              style={{borderRadius:'15px'}}
            />
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
    </Box>
  );
}


