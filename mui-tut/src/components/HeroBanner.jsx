// src/components/HeroBanner.jsx

import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        background: "linear-gradient(to bottom right, #0f2027, #203a43, #2c5364)",
        display: "flex",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "left", maxWidth: "600px" }}>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Welcome to Our Platform
          </Typography>
          <Typography variant="h6" color="gray.300" paragraph>
            Build faster, smarter, and better. Join us and take your skills to the next level.
          </Typography>
          <Button variant="contained" size="large" sx={{ mt: 2 }}>
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroBanner;
