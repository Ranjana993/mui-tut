// src/components/HeroCarousel.jsx

import React from "react";
import Slider from "react-slick";
import { Box, Typography, Button, Container } from "@mui/material";

const slides = [
  {
    title: "Welcome to Our Platform",
    description: "Build faster, smarter, and better. Join us and take your skills to the next level.",
    bg: "https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-cool-new-mobile-phone-promotion-purple-banner-image_183067.jpg",
  },
  {
    title: "Create Amazing Projects",
    description: "Turn your ideas into reality with powerful tools and a supportive community.",
    bg: "https://png.pngtree.com/thumb_back/fh260/back_our/20190625/ourmid/pngtree-vector-flat-gradient-mobile-phone-technology-banner-background-image_260312.jpg",
  },
  {
    title: "Join the Future of Tech",
    description: "Get ahead in your career by learning from the best and staying updated.",
    bg: "https://png.pngtree.com/thumb_back/fh260/background/20220215/pngtree-blue-simple-flat-information-security-banner-background-image_926646.jpg",
  },
];

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <Box sx={{ height: "90vh", overflow: "hidden" }}>
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <Box
            key={idx}
            sx={{
              height: "100vh",
              backgroundImage: `url(${slide.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Container
              maxWidth="lg"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "12%",
              }}
            >
              <Box sx={{ maxWidth: "780px" }}>
                <Typography variant="h2" fontWeight="bold" gutterBottom>
                  {slide.title}
                </Typography>
                <Typography variant="h6" color="gray.300" paragraph>
                  {slide.description}
                </Typography>
                <Button variant="contained" size="large" sx={{ mt: 2 }}>
                  Learn More
                </Button>
              </Box>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroCarousel;