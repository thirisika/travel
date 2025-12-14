import React from "react";
import { Card, CardMedia, Box, Typography } from "@mui/material";

const DestinationCard = ({ destination }) => {
  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: "10px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      {/* Destination Image */}
      <CardMedia
        component="img"
        image={destination.image}
        alt={destination.name}
        sx={{
          height: 400,
          objectFit: "cover",
          filter: "brightness(0.8)",
          transition: "filter 0.3s",
          "&:hover": { filter: "brightness(1)" },
        }}
      />

      {/* Destination Name (Top-Left) */}
      <Box
        sx={{
          position: "absolute",
          top: 10,
          left: 10,
       
          padding: "6px 12px",
          borderRadius: "5px",
        }}
      >
        <Typography variant="h6" sx={{ color: "#fff", fontWeight: "bold" }}>
          {destination.name}
        </Typography>
      </Box>

      {/* Tours Count (Bottom-Right) */}
      <Box
        sx={{
          position: "absolute",
          bottom: 10,
          right: 10,
          backgroundColor: "#fff",
          color: "red",
          padding: "6px 12px",
          borderRadius: "15px",
          fontWeight: "bold",
        }}
      >
        {destination.tours}
      </Box>
    </Card>
  );
};

export default DestinationCard;
