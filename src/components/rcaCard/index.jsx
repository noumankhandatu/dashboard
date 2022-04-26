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
import RacOptionsBtn from "./racOptionsBtn";
export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.mainContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>tiltle</TableCell>
            <TableCell align="right">description</TableCell>
            <TableCell align="right">category</TableCell>
            <TableCell align="right">image</TableCell>
            <TableCell align="right">price</TableCell>
            <TableCell align="right">action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.map(
            ({ id, title, description, category, image, price, action }) => (
              <TableRow key={id}>
                <TableCell align="right">{id}</TableCell>
                <TableCell component="th" scope="row">
                  {title}
                </TableCell>

                <TableCell align="right">{description}</TableCell>
                <TableCell align="right">{category}</TableCell>
                <TableCell align="right">
                  <img src={image} alt="" />
                </TableCell>
                <TableCell align="right">{price}</TableCell>
                <TableCell align="right" className={classes.actionBox}>
                  <RacOptionsBtn />
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    color: theme.palette.color.main,
    backgroundColor: theme.palette.backgroundColor.main,
    border: "1px solid #DFE0EB",

    [theme.breakpoints.down("sm")]: {},
  },
  actionBox: {
    width: "200px",
    display: "flex",
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
