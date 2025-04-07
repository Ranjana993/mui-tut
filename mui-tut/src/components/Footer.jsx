import React from "react";
import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#0D0D0D", color: "#fff", py: 5, mt: 8 }}>
      <Grid container spacing={4} justifyContent="center" px={3}>
        {/* Company Info */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            PhoneKart
          </Typography>
          <Typography variant="body2">
            PhoneKart is your trusted platform for finding top smartphones at the best prices.
          </Typography>
        </Grid>

        {/* Useful Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Useful Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Link href="#" color="inherit" underline="hover">Pricing</Link>
            <Link href="#" color="inherit" underline="hover">Terms & Conditions</Link>
            <Link href="#" color="inherit" underline="hover">Privacy Policy</Link>
            <Link href="#" color="inherit" underline="hover">Support</Link>
          </Box>
        </Grid>

        {/* Contact */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2">Email: support@phonekart.com</Typography>
          <Typography variant="body2">Phone: +91 9876543210</Typography>
          <Typography variant="body2">Location: New Delhi, India</Typography>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box>
            <IconButton color="inherit" href="#"><Facebook /></IconButton>
            <IconButton color="inherit" href="#"><Instagram /></IconButton>
            <IconButton color="inherit" href="#"><Twitter /></IconButton>
            <IconButton color="inherit" href="#"><YouTube /></IconButton>
          </Box>
        </Grid>
      </Grid>

      <Typography variant="body2" align="center" mt={5}>
        © {new Date().getFullYear()} PhoneKart. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
