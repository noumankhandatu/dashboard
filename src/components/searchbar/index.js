import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
const SearchBar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box} display="flex" alignItems="center">
      <SearchIcon />
      <input placeholder="Search here" className={classes.input} type="text" />
    </Box>
  );
};

export default SearchBar;
const useStyles = makeStyles((theme) => ({
  box: {
    paddingLeft: "10px",
    width: "300px",
    height: " 37px",
    color: theme.palette.color.main,
    backgroundColor: theme.palette.backgroundColor.main,
    border: "1px solid #E7E7E7",
    borderRadius: " 27px",
  },
  input: {
    width: "250px",
    color: theme.palette.color.main,
    backgroundColor: theme.palette.backgroundColor.main,
    border: "none",
    "&:focus": {
      outline: "none",
    },
  },
}));
