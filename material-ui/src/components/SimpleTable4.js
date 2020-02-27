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
    id: 1,
    name: "Eclair1",
    calories: 159,
    fat: 6,
    options: [{ carbs: 4 }, { carbs: 5 }]
  },
  {
    id: 2,
    name: "Frozen yoghurt2",
    calories: 111,
    fat: 9,
    options: [{ carbs: 50 }]
  },
  {
    id: 3,
    name: "Ice cream sandwich3",
    calories: 262,
    fat: 16,
    options: [{ carbs: 60 }]
  },
  {
    id: 4,
    name: "Cupcake4",
    calories: 305,
    fat: 4,
    options: [{ carbs: 70 }]
  }
];

const columns = [
  {
    id: "Dessert (100g serving)",
    label: "Dessert (100g serving)",
    align: "center"
  },
  { id: "Calories", label: "Calories", align: "center" },
  { id: "Fat (g)", label: "Fat (g)", align: "center" },
  { id: "carbs", label: "carbs", align: "center" }
];

const map = new Map([
  [0, "name"],
  [1, "calories"],
  [2, "fat"],
  [3, "carbs"]
]);

export default function SimpleTable4() {
  const classes = useStyles();
  const columnCount = 4;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column, index) => {
              return <TableCell key={index}>{column.label}</TableCell>;
            })}
            {/* <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="center">Calories</TableCell>
            <TableCell align="center">Fat&nbsp;(g)</TableCell>
            <TableCell align="center">carbs</TableCell> */}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, index) => {
            let optionLength = row.options.length;
            if (optionLength > 1) {
              let addTableRow = [];
              for (let i = 1; i < optionLength; i++) {
                console.log(row.options[i].carbs);
                addTableRow.push(
                  <TableRow key={i}>
                    <TableCell>{row.options[i].carbs}</TableCell>
                  </TableRow>
                );
              }
              console.log(addTableRow);

              return (
                <React.Fragment key={index}>
                  <TableRow key={row.id}>
                    <TableCell rowSpan={optionLength}>{row.name}</TableCell>
                    <TableCell rowSpan={optionLength}>{row.calories}</TableCell>
                    <TableCell rowSpan={optionLength}>{row.fat}</TableCell>
                    <TableCell>{row.options[0].carbs}</TableCell>
                  </TableRow>
                  {addTableRow}
                </React.Fragment>
              );
            }

            return (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.options[0].carbs}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
