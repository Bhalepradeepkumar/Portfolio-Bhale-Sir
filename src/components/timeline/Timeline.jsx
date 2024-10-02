import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import researchPapers from '../../data/researchData';

export default function OutlinedTimeline() {
  const colors=['primary','secondary','success','warning','error']
  return (
    <Timeline position="alternate">
      {
        researchPapers.map((paper, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color={colors[index%colors.length]} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='border-2 border-[#9a9a9a] rounded-md flex flex-col'>
              <h3>{paper.title}</h3>
              <p>{paper.field}</p>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))
      }
      
    </Timeline>
  );
}