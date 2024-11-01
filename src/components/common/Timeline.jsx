import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';
import { educationAndWork } from '../../data/myExperience';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function CustomizedTimeline() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const icons=new Map([
    ["school", <SchoolIcon sx={{ color: 'white' }} />],
    ["work", <WorkIcon sx={{ color: 'white' }} />],
  ])


  return (
    <Timeline position="alternate">
      {
        educationAndWork.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
            >
              {item.year}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ backgroundColor: item.dotColor }}>
                {icons.get(item.icon)}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              {
                (isMobile)?
                  <Typography variant="h6" component="span" sx={{fontSize:14}}>{item.type}</Typography>:
              <Typography variant="h6" component="span">{item.type}</Typography>                
              }
              {(isMobile)?(
                <Typography sx={{fontSize:12}}>{item.name}</Typography>
              ):
              (<Typography>{item.name}</Typography>)
            }
            </TimelineContent>
          </TimelineItem>
        ))
      }
    </Timeline>
  );
}