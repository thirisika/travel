import React from "react";
import { Grid, Container } from "@mui/material";
import DestinationCard from "./DestinationCard";
import { destinationsData } from "../../utils/data";

const Destination = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Grid container spacing={3}>
        {destinationsData.map((destination, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <DestinationCard destination={destination} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Destination;
