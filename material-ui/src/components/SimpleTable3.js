import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const rows = [
  {
    name: "Eclair",
    calories: 159,
    options: [{ carbs: 4 }, { carbs: 5 }]
  },
  {
    name: "Frozen yoghurt",
    calories: 111,
    options: [{ carbs: 50 }]
  }
];

export default function SimpleTable3() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Calories</TableCell>
            <TableCell align="center">carbs</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow key={rows[0].name}>
            <TableCell align="center" rowSpan={2}>
              {rows[0].calories}
            </TableCell>
            <TableCell align="center">{rows[0].options[0].carbs}</TableCell>
          </TableRow>

          <TableRow key={rows[1].name}>
            <TableCell align="center">{rows[0].options[1].carbs}</TableCell>
          </TableRow>

          <TableRow key={rows[1].name}>
            <TableCell align="center">{rows[1].calories}</TableCell>
            <TableCell align="center">{rows[1].options[0].carbs}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
