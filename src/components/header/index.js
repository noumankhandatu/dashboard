import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import { useState } from "react";
import { toggleAction } from "../../Redux-Toolkit/buttonSlice";
import { useSelector, useDispatch } from "react-redux";
const Header = () => {
  const [mode, setMode] = useState(false);
  const dispatch = useDispatch();
  const handleChange = () => {
    setMode(!mode);
    dispatch(toggleAction(mode));
  };
  const classes = useStyles();
  return (
    <div className={classes.head}>
      <Switch onClick={handleChange} />
    </div>
  );
};

export default Header;
const useStyles = makeStyles((theme) => ({
  head: {
    color: theme.palette.color.main,
    backgroundColor: theme.palette.backgroundColor.main,
  },
}));
