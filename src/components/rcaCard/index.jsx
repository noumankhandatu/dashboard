import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Data from "./items";

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>tiltle</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    color: theme.palette.color.main,
    backgroundColor: theme.palette.backgroundColor.main,
    border: "1px solid #DFE0EB",
    boxSizing: "border-box",
    borderRadius: "8px",
    padding: "17px",
    overflowX: "scroll",

    [theme.breakpoints.down("sm")]: {},
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 55px",
  },
  racTitle: {
    fontSize: "15px",
  },
  id: {
    fontSize: "15px",
    fontWeight: "400",
    color: theme.palette.color.secondary,
    display: "flex",

    alignItems: "center",
  },
  button: {
    fontSize: "11px",
    height: "27px",
    width: "67px",
    fontWeight: "400",
    color: "white",
    backgroundColor: "#21A365",
    "&:hover": {
      backgroundColor: "#21A365",
    },
  },
  addBtn: {
    display: "felx",
    alignItems: "center",
    textTransform: "none",
    backgroundColor: "#0660FE",
    color: "white",
    "&:hover": {
      backgroundColor: "#0660FE",
    },
  },
  viewBtn: {
    width: "150px",
    height: "27px",
    fontSize: "13px",
    backgroundColor: "#CFEEFF",
    color: "black",
    marginTop: "55px",
    "&:hover": {
      backgroundColor: "#CFEEFF",
    },
  },
  racCardTitles: {
    display: "grid",
    gridTemplateColumns: "0.2fr 0.7fr 2fr 0.5fr 0.5fr 0.3fr 0.9fr",
    margin: "15px 0",
    gridGap: "10px",
  },

  innnerContainer: {
    display: "flex",
  },
  viewBtnBox: {
    display: "flex",
    justifyContent: "center",
  },
}));
