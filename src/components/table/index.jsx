import React from "react";
import {
  makeStyles,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@material-ui/core";

export default function BasicTable({
  tableName = null,
  head = null,
  body = null,
}) {
  const classes = useStyles();

  return (
    <TableContainer className={classes.main} component={Paper}>
      <Box className={classes.tableHeading}>{tableName}</Box>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className="tablehead">
          <TableRow className={classes.textrow}>{head}</TableRow>
        </TableHead>
        <TableBody className={classes.textcol}>{body}</TableBody>
      </Table>
    </TableContainer>
  );
}
const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: theme.palette.backgroundColor.bgtab,
  },
  table: {
    width: "100%",
    [theme.breakpoints.down("md")]: {
      scrollDirection: "horizontal",
      // scrollDehavior: "smooth",
    },
    "& .tablehead": {
      color: theme.palette.color.primary,
    },
  },
  textrow: {
    frontWidth: 500,
    fonrSize: 15,
    textTransform: "capitalize",
    color: theme.palette.color.primary,
  },
  textcol: {
    frontWidth: 400,
    color: theme.palette.color.secondary,
  },
  tableHeading: {
    padding: "30px  0px 30px 78px",
    color: theme.palette.color.primary,
    fontSize: 15,
    fontWeight: 600,
  },
}));
