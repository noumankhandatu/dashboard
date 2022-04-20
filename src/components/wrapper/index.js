import React from "react";
import { makeStyles } from "@material-ui/core";

const Wrapper = ({ childern }) => {
  const classes = useStyles();
  return <div className={classes.wraped}>{childern}</div>;
};

export default Wrapper;
const useStyles = makeStyles((theme) => ({
  wraped: {
    marginLeft: "300px",
    padding: "20px",
    margin: "20px",
  },
}));
