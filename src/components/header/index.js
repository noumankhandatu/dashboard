import React from "react";
import { makeStyles } from "@material-ui/core";

const Header = () => {
  const classes = useStyles();
  return <div className={classes.head}>Header</div>;
};

export default Header;
const useStyles = makeStyles((theme) => ({
  head: {
    color: theme.palette.color.main,
    backgroundColor: theme.palette.backgroundColor.main,
  },
}));
