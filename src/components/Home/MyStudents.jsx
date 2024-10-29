import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';

import { phdStudents,mtechStudents,btechStudents,internshipStudents } from '../../data/myStudent.js';

import Students from './Students.jsx';

export default function TitlebarBelowMasonryImageList() {


  return (
    <Box sx={{ width: '80vw' }}>
        
        {(phdStudents.length>0)&&<Students data={phdStudents} category="PHD STUDENTS"/>}
        {(mtechStudents.length>0)&&<Students data={mtechStudents} category="MTech STUDENTS"/>}
        {(btechStudents.length>0)&&<Students data={btechStudents} category="Btech STUDENTS"/>}
        {(internshipStudents.length>0)&&<Students data={internshipStudents} category="INTERNSHIP STUDENTS"/>}
    </Box>
  );
}