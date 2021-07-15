import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
});


export default function TableStyle({data}) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>College Name</TableCell>
            <TableCell align="right">College Id</TableCell>
            <TableCell align="right">Founded Year&nbsp;(g)</TableCell>
            <TableCell align="right">State&nbsp;(g)</TableCell>
            <TableCell align="right">Courses&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.collegeId}</TableCell>
              <TableCell align="right">{row.founded_year}</TableCell>
              <TableCell align="right">{row.state}</TableCell>
              <TableCell align="right">
                {row.courses.map((a)=>(
                  <span style={{margin:'1vh'}}>{a}</span>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  )
};
