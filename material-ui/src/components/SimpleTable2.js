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
    fat: 6,
    options: [{ carbs: 4 }, { carbs: 5 }]
  },
  {
    name: "Frozen yoghurt",
    calories: 111,
    fat: 9,
    options: [{ carbs: 50 }]
  },
  {
    name: "Ice cream sandwich",
    calories: 262,
    fat: 16,
    options: [{ carbs: 60 }]
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 4,
    options: [{ carbs: 70 }]
  }
];

export default function SimpleTable2() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="center">Calories</TableCell>
            <TableCell align="center">Fat&nbsp;(g)</TableCell>
            <TableCell align="center">carbs</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow key={"0"}>
            <TableCell component="th" scope="row" rowSpan={2}>
              {rows[0].name}
            </TableCell>
            <TableCell align="center" rowSpan={2}>
              {rows[0].calories}
            </TableCell>
            <TableCell align="center" rowSpan={2}>
              {rows[0].fat}
            </TableCell>
            <TableCell align="center">{rows[0].options[0].carbs}</TableCell>
          </TableRow>

          <TableRow key={"1"}>
            <TableCell align="center">{rows[0].options[1].carbs}</TableCell>
          </TableRow>

          <TableRow key={"2"}>
            <TableCell component="th" scope="row">
              {rows[1].name}
            </TableCell>
            <TableCell align="center">{rows[1].calories}</TableCell>
            <TableCell align="center">{rows[1].fat}</TableCell>
            <TableCell align="center">{rows[1].options[0].carbs}</TableCell>
          </TableRow>

          <TableRow key={"3"}>
            <TableCell component="th" scope="row">
              {rows[2].name}
            </TableCell>
            <TableCell align="center">{rows[2].calories}</TableCell>
            <TableCell align="center">{rows[2].fat}</TableCell>
            <TableCell align="center">{rows[2].options[0].carbs}</TableCell>
          </TableRow>

          <TableRow key={"4"}>
            <TableCell component="th" scope="row">
              {rows[3].name}
            </TableCell>
            <TableCell align="center">{rows[3].calories}</TableCell>
            <TableCell align="center">{rows[3].fat}</TableCell>
            <TableCell align="center">{rows[3].options[0].carbs}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
