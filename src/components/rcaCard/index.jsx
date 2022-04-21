import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Data from "./items";

const RacCard = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Typography variant="h3"></Typography>
    </Box>
  );
};
export default RacCard;
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    color: theme.palette.color.main,
    backgroundColor: theme.palette.backgroundColor.main,
  },
  innnerContainer: {
    display: "flex",
  },
}));
// {Data.map(({ title, description, image, price, category, id }) => {
//     return (
//       <Box className={classes.innnerContainer}>
//         <Typography variant="h6" className={classes.id}>
//           {id}
//         </Typography>
//         <Typography variant="h6" className={classes.id}>
//           {title}
//         </Typography>
//         <Typography variant="h6" className={classes.id}>
//           {description}
//         </Typography>
//         <Typography variant="h6" className={classes.id}>
//           {category}
//         </Typography>
//         <Typography variant="h6" className={classes.id}>
//           {price}
//         </Typography>
//       </Box>
//     );
//   })}
