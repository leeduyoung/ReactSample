import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
    options: [{ carbs: 4 }, { carbs: 5 }],
  },
  {
    name: "Frozen yoghurt",
    calories: 159,
    fat: 9,
    options: [{ carbs: 5 }],
  },
  {
    name: "Ice cream sandwich",
    calories: 262,
    fat: 16,
    options: [{ carbs: 6 }],
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 4,
    options: [{ carbs: 7 }],
  }
];

/**
 * 참고 
 * https://stackblitz.com/edit/angular-lnahlh?file=app%2Ftable-basic-example.ts
 */
export default function SimpleTableRowspan() {
  const classes = useStyles();

  return (
    <table>
      <caption>Favorite and Least Favorite Things</caption>
      <tr className="tr">
        <th></th><th></th>
        <th>Bob</th>
        <th>Alice</th>
      </tr>
      <tr className="tr">
        <th rowspan="2">Favorite</th>
        <th>Color</th>
        <td>Blue</td>
        <td>Purple</td>
      </tr>
      <tr className="tr">
        <th>Flavor</th>
        <td>Banana</td>
        <td>Chocolate</td>
      </tr>
      <tr className="tr">
        <th rowspan="2">Least Favorite</th>
        <th>Color</th>
        <td>Yellow</td>
        <td>Pink</td>
      </tr>
      <tr className="tr">
        <th>Flavor</th>
        <td>Mint</td>
        <td>Walnut</td>
      </tr>
    </table>
  );
}
