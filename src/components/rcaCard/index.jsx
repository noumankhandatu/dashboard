import React, { useState } from "react";
import { Box, Typography, Divider } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/styles";
import Data from "./items";
import Button from "../buttons/index";
import RacOptionsBtn from "./racOptionsBtn";

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
        <Button
          className={classes.addBtn}
          variant="outlined"
          endIcon={<AddIcon />}
        >
          Add
        </Button>
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
                <Box className={classes.id}>
                  <img src={image} alt="" />
                </Box>
                <Typography variant="h6" className={classes.id}>
                  {price}
                </Typography>
                <Box className={classes.id} variant="h6">
                  <Button className={classes.button} variant="outlined">
                    View
                  </Button>
                  <RacOptionsBtn />
                </Box>
              </Box>
              {divider}
            </>
          );
        }
      )}
      <Box className={classes.viewBtnBox}>
        {load <= 2 ? (
          <Button
            variant="outlined"
            className={classes.viewBtn}
            onClick={showMoreItems}
            endIcon={<ArrowForwardIcon style={{ fontSize: "16px" }} />}
          >
            View all
          </Button>
        ) : (
          <Button
            variant="outlined"
            className={classes.viewBtn}
            onClick={showLessItems}
            endIcon={<ArrowForwardIcon style={{ fontSize: "16px" }} />}
          >
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
    width: "100%",
    color: theme.palette.color.main,
    backgroundColor: theme.palette.backgroundColor.main,
    border: "1px solid #DFE0EB",
    boxSizing: "border-box",
    borderRadius: "8px",
    padding: "17px",

    [theme.breakpoints.down("sm")]: {
      overflowX: "scroll",
    },
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 55px",
  },
  racTitle: {
    fontSize: "15px",
  },
  id: {
    fontSize: "15px",
    fontWeight: "400",
    color: theme.palette.color.secondary,
    display: "flex",

    alignItems: "center",
  },
  button: {
    fontSize: "11px",
    height: "27px",
    width: "67px",
    fontWeight: "400",
    color: "white",
    backgroundColor: "#21A365",
    "&:hover": {
      backgroundColor: "#21A365",
    },
  },
  addBtn: {
    display: "felx",
    alignItems: "center",
    textTransform: "none",
    backgroundColor: "#0660FE",
    color: "white",
    "&:hover": {
      backgroundColor: "#0660FE",
    },
  },
  viewBtn: {
    width: "150px",
    height: "27px",
    fontSize: "13px",
    backgroundColor: "#CFEEFF",
    color: "black",
    marginTop: "55px",
    "&:hover": {
      backgroundColor: "#CFEEFF",
    },
  },
  racCardTitles: {
    display: "grid",
    gridTemplateColumns: "0.2fr 0.7fr 2fr 0.5fr 0.5fr 0.3fr 0.9fr",
    margin: "15px 0",
    gridGap: "10px",
  },

  innnerContainer: {
    display: "flex",
  },
  viewBtnBox: {
    display: "flex",
    justifyContent: "center",
  },
}));
