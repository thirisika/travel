import React, { useContext } from "react";
import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BookingContext from "./context/BookingContext";
import IconsPage from "./IconsPage";

const AdventureHomepage = () => {
  const navigate = useNavigate();
  const { bookingdata } = useContext(BookingContext);

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", width: "100%" }}>
      {/* Hero Section with Video */}
      <Box sx={{ position: "relative", width: "100%", height: "600px", overflow: "hidden" }}>
        <video
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
          autoPlay
          loop
          muted
          playsInline
          src="./video/video.mp4"
        />
        <Box sx={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.4)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", p: 4 }}>
          {/* Welcome Message */}
          {bookingdata.firstName && (
            <Typography variant="h5" sx={{ mb: 2 }}>Welcome, {bookingdata.firstName}!</Typography>
          )}
          {bookingdata.fullName && (
            <Typography variant="h5" sx={{ mb: 2 }}>Welcome, {bookingdata.fullName}! We received your message: "{bookingdata.message}"</Typography>
          )}
          <Typography variant="h3" fontWeight="bold">Embark on Your Next Adventure</Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>Discover thrilling destinations and unforgettable experiences.</Typography>
          {/* CTA Buttons */}
          <Box sx={{ mt: 6, display: "flex", gap: 2 }}>
            <Button variant="contained" sx={{ backgroundColor: "#FFD700", color: "black", px: 4, py: 1.5, borderRadius: "8px" }} onClick={() => navigate("/booking")}>
              Book an Adventure
            </Button>
            <Button variant="outlined" sx={{ color: "white", borderColor: "white", px: 4, py: 1.5, borderRadius: "8px" }} onClick={() => navigate("/team")}>
              Explore Countries
            </Button>
          </Box>
        </Box>
      </Box>
      {/* Icons Section */}
      <IconsPage />
    </Box>
  );
};

export default AdventureHomepage;
