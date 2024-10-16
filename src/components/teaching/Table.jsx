import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {students} from '../../data/data.js'

function createData(Name, Institute, Degree, Year, Outcome) {
  return { Name, Institute, Degree, Year, Outcome };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '100vw', padding:"1vw" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Institute</TableCell>
            <TableCell align="right">Degree</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Outcome</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.name}
              </TableCell>
              <TableCell align="right">{student.institute}</TableCell>
              <TableCell align="right">{student.degree}</TableCell>
              <TableCell align="right">{student.year}</TableCell>
              <TableCell align="right">{student.outcome}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
