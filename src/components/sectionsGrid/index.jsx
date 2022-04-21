import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Button from "../buttons";

function Section() {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.headSection}>
        <Typography variant="h2" className="typo">
          hot collection
        </Typography>
      </Box>
    </Box>
  );
}

export default Section;

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: 400,
    border: "1px solid" + theme.border.main,
    boxSizing: " border-box",
    borderRadius: "8px",
  },
  headSection: {
    padding: "20px 40px 0px 50px",
    "& .typo": {
      textTransform: "uppercase",
    },
  },
}));
