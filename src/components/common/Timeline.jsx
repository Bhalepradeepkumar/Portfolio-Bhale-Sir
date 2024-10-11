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

export default function CustomizedTimeline() {
  const educationAndWork = [
    {
      type: "School",
      name: "XYZ High School",
      year: "2010-2015",
      icon: <SchoolIcon sx={{ color: 'white' }} />,
      dotColor: '#007cff'
    },
    {
      type: "College",
      name: "ABC College of Engineering",
      year: "2016-2020",
      icon: <SchoolIcon sx={{ color: 'white' }} />,
      dotColor: 'green'
    },
    {
      type: "Current Work",
      name: "Peak Flo",
      year: "2024-Present",
      icon: <WorkIcon sx={{ color: 'white' }} />,
      dotColor: 'red'
    }
  ];

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
                {item.icon}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                {item.type}
              </Typography>
              <Typography>{item.name}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))
      }
    </Timeline>
  );
}