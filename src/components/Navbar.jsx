import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "white", color: "white", width: "100%" }}>
      
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "#27ae60" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>AdventureX</Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Tours", path: "/tour" },
              { label: "Destination", path: "/destination" },
              { label: "Gallery", path: "/gallery" },
              { label: "Contact", path: "/contact" }
            ].map(({ label, path }) => (
              <Typography key={label} component={Link} to={path} sx={{ color: "white", textDecoration: "none", '&:hover': { color: "#FFD700" } }}>
                {label}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Page Content */}
      <Outlet />
      
    </Box>
  );
};

export default Navbar;
