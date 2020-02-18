import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const rows = [
  {
    name: "Eclair",
    calories: 159,
    fat: 6,
    options: [{carbs: 4}, {carbs: 5}],
  },
  {
    name: "Frozen yoghurt",
    calories: 159,
    fat: 9,
    options: [{carbs: 5}],
  },
  {
    name: "Ice cream sandwich",
    calories: 262,
    fat: 16,
    options: [{carbs: 6}],
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 4,
    options: [{carbs: 7}],
  }
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="center">Calories</TableCell>
            <TableCell align="center">Fat&nbsp;(g)</TableCell>
            <TableCell align="center" colSpan={2}>test</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {

            return (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">{"TEST"}</TableCell>
                <TableCell align="center">{"TEST2"}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
