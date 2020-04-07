import React from "react";
import {
  Table,
  TableContainer,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
} from "@material-ui/core";

const TableComponent = () => {
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead style={{ backgroundColor: "#eee" }}>
            <TableRow>
              <TableCell>구분1</TableCell>
              <TableCell>구분2</TableCell>
              <TableCell>구분3</TableCell>
              <TableCell>구분4</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell rowSpan={4}>111</TableCell>
              <TableCell rowSpan={4}>222</TableCell>
              <TableCell rowSpan={2}>33</TableCell>
              <TableCell>44</TableCell>
            </TableRow>
            <TableRow>
              {/* TableCell */}
              {/* TableCell */}
              {/* TableCell */}
              <TableCell>4444</TableCell>
            </TableRow>
            <TableRow>
              {/* TableCell */}
              {/* TableCell */}
              <TableCell rowSpan={2}>333</TableCell>
              <TableCell>444</TableCell>
            </TableRow>
            <TableRow>
              {/* TableCell */}
              {/* TableCell */}
              {/* TableCell */}
              <TableCell>4444</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>111</TableCell>
              <TableCell>222</TableCell>
              <TableCell>333</TableCell>
              <TableCell>444</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>111</TableCell>
              <TableCell>222</TableCell>
              <TableCell>333</TableCell>
              <TableCell>444</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default TableComponent;
