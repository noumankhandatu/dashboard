import React, { useState } from "react";
import { Box, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Data from "./items";
import Button from "../buttons/index";

const RacCard = () => {
  const classes = useStyles();
  const [load, setLoad] = useState(2);
  const length = Data.length;
  const showMoreItems = () => {
    setLoad(length);
  };
  const showLessItems = () => {
    setLoad(2);
  };
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.headerContainer}>
        <Typography variant="h3">RCAS</Typography>
        <Button variant="inline">add</Button>
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
      <Divider />
      {Data.slice(0, load).map(
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
                  <Button variant="outlined">View</Button>
                </Box>
              </Box>
              {divider}
            </>
          );
        }
      )}
      <Box className={classes.viewBtnBox}>
        {load <= 2 ? (
          <Button className={classes.id} onClick={showMoreItems}>
            View all
          </Button>
        ) : (
          <Button className={classes.id} onClick={showLessItems}>
            View less
          </Button>
        )}
      </Box>
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
  button: {
    fontSize: "15px",
    fontWeight: "400",
    color: theme.palette.color.alpha,
  },
  racCardTitles: {
    display: "grid",
    gridTemplateColumns: "0.3fr 1fr 2fr 1fr 1fr 1fr 1fr",
    margin: "15px 0",
  },

  innnerContainer: {
    display: "flex",
  },
  viewBtnBox: {
    display: "flex",
    justifyContent: "center",
  },
}));
