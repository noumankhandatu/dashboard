import React from "react";
import RacCard from "../../components/rcaCard";
import { Box, Typography } from "@material-ui/core";
import MiniDrawer from "../../components/sidebar";
import Wrapper from "../../components/wrapper";
import AssessmentIcon from "@material-ui/icons/Assessment";
import Button from "../../components/buttons";
import SearchBar from "../../components/searchbar";
import IconCard from "../../components/iconCard";
import Array from "../../components/arrays";
import { makeStyles } from "@material-ui/core";

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Box display="flex" pt={3}>
      <MiniDrawer />

      <Wrapper>
        <Typography variant="h2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aspernatur
          dicta assumenda, voluptatem vitae enim molestiae. Minus quibusdam
          voluptates illum. Tenetur animi aut, repudiandae quaerat magnam non
          voluptate totam excepturi inventore ad facere, consequatur dolore
          eveniet dicta? Nemo ea vero cupiditate tempore ipsa amet fuga quasi
          optio, voluptatum odit pariatur vel sequi modi facere animi ullam
          corporis. Voluptate, sint! Saepe voluptatum explicabo recusandae
          cupiditate quaerat hic dolores ex, at maiores iure molestiae
          aspernatur placeat non laboriosam sunt dignissimos? Ipsa velit ex vel,
          facere placeat explicabo ratione fugit minus repellat delectus tempora
          voluptatibus earum dicta dolores sed quae unde pariatur cumque!
        </Typography>

        <Box display="flex" justifyContent="space-between">
          <SearchBar />
          <Button variant="inline" endIcon={<AssessmentIcon />}>
            Report
          </Button>
        </Box>
        <div className={classes.grid}>
          {Array.map((items) => {
            return (
              <IconCard
                count={items.count}
                text={items.text}
                icon={items.icon}
              />
            );
          })}
        </div>
        <br />
        <RacCard />
      </Wrapper>
    </Box>
  );
};

export default Dashboard;
const useStyles = makeStyles((theme) => ({
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridGap: "10px",
  },
}));
