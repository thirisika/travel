import React, { useEffect } from "react";
import { Container, Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";
import aboutImg from "../../images/aboutimg.png";
import "./about.css";
import icons1 from "../../images/destination.png";
import icons2 from "../../images/best-price.png";
import icons3 from "../../images/quick.png";

const About = () => {

  useEffect(() => {
    document.title = "About Us";
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container sx={{ py: 3 }}> {/* Reduced padding to remove blank space */}
      <Grid container spacing={4} alignItems="center">
        
        {/* Left Side */}
        <Grid item xs={12} md={8}>
          <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ mt: 0, pt: 0 }} style={{ color: "black" }} >
            HOW WE ARE BEST FOR TRAVEL!
          </Typography>
          
          <Card sx={{ borderRadius: 3, boxShadow: 3, mb: 3 }}>
            <CardMedia 
              component="img"
              image={aboutImg}
              alt="About Us"
              sx={{ borderRadius: 3 }}
            />
          </Card>

          <Typography variant="body1" paragraph  style={{ color: "black" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Typography>
          <Typography variant="body1" paragraph style={{ color: "black" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </Typography>
        </Grid>

        {/* Right Side */}
        <Grid item xs={12} md={4}>
          {/* Card 1 */}
          <Card sx={{ borderRadius: 3, boxShadow: 3, mb: 3, textAlign: "center" }}>
            <CardMedia
              component="img"
              image={icons1}
              alt="50+ Destination"
              sx={{ width: 80, mx: "auto", mt: 2 }}
            />
            <CardContent>
              <Typography variant="h5" fontWeight="bold">50+ Destination</Typography>
              <Typography variant="body2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Typography>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card sx={{ borderRadius: 3, boxShadow: 3, mb: 3, textAlign: "center" }}>
            <CardMedia
              component="img"
              image={icons2}
              alt="Best Price"
              sx={{ width: 80, mx: "auto", mt: 2 }}
            />
            <CardContent>
              <Typography variant="h5" fontWeight="bold">Best Price In The Industry</Typography>
              <Typography variant="body2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Typography>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card sx={{ borderRadius: 3, boxShadow: 3, textAlign: "center" }}>
            <CardMedia
              component="img"
              image={icons3}
              alt="Super Fast Booking"
              sx={{ width: 80, mx: "auto", mt: 2 }}
            />
            <CardContent>
              <Typography variant="h5" fontWeight="bold">Super Fast Booking</Typography>
              <Typography variant="body2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Container>
  );
};

export default About;
