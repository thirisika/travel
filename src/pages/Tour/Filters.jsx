import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Checkbox,
  FormControlLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarIcon from "@mui/icons-material/Star";
import { location, Categories, Duration, PriceRange, Ratings, tourData } from "../../utils/data";

const categoryColors = {
  "Escorted Tour": "#FFDDC1",
  "Rail Tour": "#D1E8E4",
  "River Cruise": "#FFC1E3",
  "Wildlife": "#C1D9FF",
  "Tour & Cruise": "#E1C1FF",
};

const Filters = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    location: [],
    category: [],
    duration: [],
    price: [],
    rating: [],
  });

  const handleFilterChange = (type, value) => {
    setSelectedFilters((prev) => {
      const updatedFilters = prev[type].includes(value)
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value];
      return { ...prev, [type]: updatedFilters };
    });
  };

  const filteredTours = tourData.filter((tour) => {
    return (
      (selectedFilters.location.length === 0 ||
        selectedFilters.location.some((loc) => tour.location.includes(loc))) &&
      (selectedFilters.category.length === 0 ||
        tour.category.some((cat) => selectedFilters.category.includes(cat))) &&
      (selectedFilters.duration.length === 0 ||
        selectedFilters.duration.some((dur) => tour.days.includes(dur))) &&
      (selectedFilters.price.length === 0 ||
        selectedFilters.price.some((priceRange) => {
          const [min, max] = priceRange.replace(/\$|,/g, "").split(" - ").map(Number);
          const tourPrice = tour.afterDiscount > 0 ? tour.afterDiscount : tour.price;
          return tourPrice >= min && tourPrice <= (max || Infinity);
        })) &&
      (selectedFilters.rating.length === 0 || selectedFilters.rating.includes(tour.rating))
    );
  });
  return (
    <Box display="flex" gap={4} p={2}>
      {/* Left Sidebar Filters */}
      <Box width="30%" display="flex" flexDirection="column" alignItems="center">
        <Box width="100%">
          {[
            { label: "Location", options: location, type: "location" },
            { label: "Categories", options: Categories, type: "category" },
            { label: "Duration", options: Duration, type: "duration" },
            { label: "Price", options: PriceRange, type: "price" },
            { label: "Rating", options: Ratings, type: "rating" },
          ].map((filterGroup, index) => (
            <Accordion key={index} sx={{ width: "100%", mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight="bold">{filterGroup.label}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box display="flex" flexDirection="column">
                  {filterGroup.options.map((option, idx) => (
                    <FormControlLabel
                      key={idx}
                      control={
                        <Checkbox
                          checked={selectedFilters[filterGroup.type].includes(option)}
                          onChange={() => handleFilterChange(filterGroup.type, option)}
                        />
                      }
                      label={option}
                      sx={{ mb: 1 }} // Adds spacing between checkboxes
                    />
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>

      {/* Right Side - Tour Cards */}
      <Grid container spacing={3} width="70%">
        {filteredTours.map((tour) => (
          <Grid item xs={12} sm={6} md={4} key={tour.id}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardMedia component="img" height="200" image={tour.image} alt={tour.title} />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {tour.location}
                </Typography>
                <Typography variant="h6" fontWeight="bold" mt={1}>
                  {tour.title}
                </Typography>

                {/* Rating & Reviews */}
                <Box display="flex" alignItems="center" gap={0.5} mt={1}>
                  {/* <StarIcon sx={{ color: "red", fontSize: 18 }} /> */}
                  <Typography variant="body2">
                    {tour.rating} ({tour.reviews} Reviews)
                  </Typography>
                </Box>

                {/* Categories */}
                <Box display="flex" gap={1} mt={1} flexWrap="wrap">
                  {tour.category.map((cat, index) => (
                    <Chip
                      key={index}
                      label={cat}
                      sx={{ backgroundColor: categoryColors[cat] || "#ddd", fontWeight: "bold" }}
                    />
                  ))}
                </Box>

                {/* Separator */}
                <Box mt={2} mb={2} sx={{ borderBottom: "1px solid #ccc" }}></Box>

                {/* Price & Duration */}
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6" fontWeight="bold">
                    ${tour.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {tour.afterDiscount > 0 && (
                      <span style={{ textDecoration: "line-through", marginRight: 5 }}>
                        ${tour.afterDiscount}
                      </span>
                    )}
                    {tour.days}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Filters;
