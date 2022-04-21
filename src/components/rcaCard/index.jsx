import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Data from "./items";

const RacCard = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.headerContainer}>
        <Typography variant="h3">RCAS</Typography>
        <Button>add</Button>
      </Box>
      <Box className={classes.racCardTitles}>
        <Typography variant="h6" className={classes.racTitle}></Typography>
        <Typography variant="h6" className={classes.racTitle}>
          tiltle
        </Typography>
        <Typography variant="h6" className={classes.racTitle}>
          description
        </Typography>
        <Typography variant="h6" className={classes.racTitle}>
          category
        </Typography>
        <Typography variant="h6" className={classes.racTitle}>
          image
        </Typography>
        <Typography variant="h6" className={classes.racTitle}>
          price
        </Typography>
        <Typography variant="h6" className={classes.racTitle}>
          action
        </Typography>
      </Box>

      {Data.map(
        ({
          title,
          description,
          image,
          price,
          category,
          id,

          divider,
        }) => {
          return (
            <>
              <Box className={classes.racCardTitles}>
                <Typography variant="h6" className={classes.id}>
                  {id}
                </Typography>
                <Typography variant="h6" className={classes.id}>
                  {title}
                </Typography>
                <Typography variant="h6" className={classes.id}>
                  {description}
                </Typography>
                <Typography variant="h6" className={classes.id}>
                  {category}
                </Typography>
                <img src={image} alt="" />
                <Typography variant="h6" className={classes.id}>
                  {price}
                </Typography>
                <Box variant="h6">
                  <Button className={classes.id}>View</Button>
                </Box>
              </Box>
              {divider}
            </>
          );
        }
      )}
    </Box>
  );
};
export default RacCard;
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    color: theme.palette.color.main,
    backgroundColor: theme.palette.backgroundColor.main,
    border: "1px solid #DFE0EB",
    boxSizing: "border-box",
    borderRadius: "8px",
    padding: "17px",
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  racTitle: {
    fontSize: "15px",
  },
  id: {
    fontSize: "15px",
    fontWeight: "400",
    color: theme.palette.color.secondary,
  },
  racCardTitles: {
    display: "grid",
    gridTemplateColumns: "0.3fr 1fr 2fr 1fr 1fr 1fr 1fr",
    margin: "15px 0",
  },

  innnerContainer: {
    display: "flex",
  },
}));
