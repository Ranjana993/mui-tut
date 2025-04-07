import React from "react";
import { Box, Container, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      {/* Banner */}
      <Box
        sx={{
          height: { xs: 200, md: 300 },
          backgroundImage: `url('https://img.lovepik.com/background/20211022/medium/lovepik-5g-technology-mobile-phone-blue-glare-banner-background-image_605672458.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          About Us
        </Typography>
      </Box>

      {/* Content */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Our Store
        </Typography>
        <Typography>
          This is a sample about page. You can add more content here.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quia delectus voluptatem saepe quam molestias? Nemo fuga minima ab sed magni expedita fugit qui debitis? Harum, consectetur. Voluptates, quae adipisci?
        </Typography>
      </Container>
    </>
  );
};

export default About;
