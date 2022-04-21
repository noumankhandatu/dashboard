import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import { makeStyles } from "@material-ui/core";
/**
 * @dev simple card
 * @props takes icons
 * @props two texts
 */
const IconCard = () => {
  const classes = useStyles();
  return (
    <Box pt={3}>
      <Paper className={classes.paper}>
        <Box p={2} display="flex" alignItems="center">
          <Box className={classes.bgIcon}>
            <SportsEsportsIcon className={classes.iconSize} />
          </Box>
          <Box pl={3}>
            <div>
              <Box>
                <Typography variant="h3">ORDERS</Typography>
              </Box>
              <Box pt={1}>
                <Typography variant="h1">30</Typography>
              </Box>
            </div>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default IconCard;
const useStyles = makeStyles((theme) => ({
  iconSize: {
    width: "40px",
    height: "40px",
  },
  bgIcon: {
    padding: "10px",
    background: theme.palette.icon.primary,
    borderRadius: "10px",
  },
  paper: {
    color: theme.palette.color.primary,
    backgroundColor: theme.palette.backgroundColor.main,
    width: "275px",
    height: "100px",
  },
}));
