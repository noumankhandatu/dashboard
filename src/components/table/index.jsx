import React from "react";
import {
  makeStyles,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
export default function BasicTable({ head = null, body = null }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>{head}</TableRow>
        </TableHead>
        <TableBody>{body}</TableBody>
      </Table>
    </TableContainer>
  );
}
