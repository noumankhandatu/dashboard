import React from "react";
import { makeStyles } from "@material-ui/core";
/**
 * @dev Wrapper is container with holds data
 * @props Children takes only

 */
const Wrapper = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.wraped}>{children}</div>;
};

export default Wrapper;
const useStyles = makeStyles((theme) => ({
  wraped: {
    padding: "20px",
    margin: "20px",
  },
}));
