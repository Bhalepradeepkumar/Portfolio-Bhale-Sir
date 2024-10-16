import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard(props) {
  return (
    <Card sx={{ maxwidth:  "30vw"}}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: '1.3rem' }}>
          {props.category}
        </Typography>
        {props.items.map((item, index) => (
          <React.Fragment key={index}>
            <Typography variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.link}
              </a>
            </Typography>
          </React.Fragment>
        ))}
      </CardContent>
    </Card>
  );
}
