import React from "react";
import { Box, Typography } from "@material-ui/core";
import MiniDrawer from "../../components/sidebar";
import Wrapper from "../../components/wrapper";
const Dashboard = () => {
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
      </Wrapper>
    </Box>
  );
};

export default Dashboard;
