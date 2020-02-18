import React from "react";

/**
 * 참고
 * https://stackblitz.com/edit/angular-lnahlh?file=app%2Ftable-basic-example.ts
 */
export default function SimpleTableRowspan() {
  return (
    <table>
      <caption>Favorite and Least Favorite Things</caption>
      <tr className="tr">
        <th></th>
        <th></th>
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
