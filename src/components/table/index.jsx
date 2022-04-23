import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Box, Typography } from "@material-ui/core/";
import Button from "../buttons";

function createData(
  id,
  projectName,
  description,
  artPrice,
  image,
  creatorName,
  sequence,
  action
) {
  return {
    id,
    projectName,
    description,
    artPrice,
    image,
    creatorName,
    sequence,
    action,
  };
}

const rows = [
  createData(1, "Lorem Ipsum", "fade away", 1, 4.0, "Test02"),
  createData(
    1,
    "Lorem Ipsum",
    "fade away",
    1,
    4.0,
    "0xab5801a7d398351b8be11c439e05c5b3259aec9b"
  ),
  createData(3, 262, 16.0, 24, 6.0),
  createData(4, 305, 3.7, 67, 4.3),
  createData(5, 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Box className={classes.tableHead}>
        <Typography variant="h2" className="typo">
          Hot Collection
        </Typography>
      </Box>
      <Table className={classes.table} aria-label="Hot Collection">
        <TableHead>
          <TableRow>
            <TableCell
              className={classes.heading}
              size="small"
              style={{ borderBottom: "none" }}
            ></TableCell>
            <TableCell className={classes.heading} align="left">
              Project Name
            </TableCell>
            <TableCell className={classes.heading} align="left">
              Description
            </TableCell>
            <TableCell className={classes.heading} align="left">
              Art Price
            </TableCell>
            <TableCell className={classes.heading} align="left">
              Image
            </TableCell>
            <TableCell className={classes.heading} align="left">
              Creator Name
            </TableCell>
            <TableCell className={classes.heading} align="left">
              Sequence
            </TableCell>
            <TableCell className={classes.heading} align="left">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell
                component="th"
                scope="row"
                variant="footer"
                size="small"
                style={{ borderBottom: "none" }}
              >
                {row.id}
              </TableCell>

              <TableCell align="left">{row.projectName}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left">{row.artPrice}</TableCell>
              <TableCell align="left">{row.image}</TableCell>
              <TableCell align="left">{row.creatorName}</TableCell>
              <TableCell align="left">{row.sequence}</TableCell>
              <TableCell align="left">
                <Box>
                  <Button variant="outline" color="primary">
                    View
                  </Button>
                  <Button variant="contain" color="secondary">
                    Edit
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableHead: {
    fontFamily: theme.typography.fontFamily,
    padding: "30px 0 10px 80px",
    "& .typo": {
      textTransform: "capitalize",
    },
  },
  heading: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: 500,
    fontSize: 15,
  },
}));
