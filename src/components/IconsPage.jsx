import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { TravelExplore, Hiking, Flight, Camera } from "@mui/icons-material";

const iconsData = [
  { icon: <TravelExplore fontSize="large" />, title: "Explore", description: "Discover amazing destinations." },
  { icon: <Hiking fontSize="large" />, title: "Adventure", description: "Experience thrilling outdoor activities." },
  { icon: <Flight fontSize="large" />, title: "Travel", description: "Fly to your dream destinations." },
  { icon: <Camera fontSize="large" />, title: "Capture", description: "Take stunning photos of your journey." },
];

const IconsPage = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", py: 5, backgroundColor: "white"}}>
      <Grid container spacing={4} sx={{ maxWidth: "800px" }}>
        {iconsData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ textAlign: "center", p: 2, borderRadius: "12px", boxShadow: 3 }}>
              <Box sx={{ color: "primary.main", mb: 1 }}>{item.icon}</Box>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">{item.title}</Typography>
                <Typography variant="body2" color="textSecondary">{item.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default IconsPage;
