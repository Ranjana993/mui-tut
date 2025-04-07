// src/components/HeroCarousel.jsx

import React from "react";
import Slider from "react-slick";
import { Box, Typography, Button, Container } from "@mui/material";

const slides = [
  {
    title: "Welcome to Our Platform",
    description: "Build faster, smarter, and better. Join us and take your skills to the next level.",
    bg: "https://img.freepik.com/free-photo/woman-choosing-phone-technology-store_1303-31328.jpg?t=st=1744014687~exp=1744018287~hmac=94f33ee956b48c3058af19cfb7d16e6d58c0a8a5d0902138ae9147cb364b6f07&w=1380",
  },
  {
    title: "Create Amazing Projects",
    description: "Turn your ideas into reality with powerful tools and a supportive community.",
    bg: "https://img.freepik.com/free-photo/seller-man-mobile-phone-professional-consultant-tech-store-shop-check-new-smart-watches_627829-4979.jpg?t=st=1744014842~exp=1744018442~hmac=1f61a44766dccc98f6dc0675965cbe030d14c23f3cc1736e3eac325a69e1b61f&w=1380",
  },
  {
    title: "Join the Future of Tech",
    description: "Get ahead in your career by learning from the best and staying updated.",
    bg: "https://img.freepik.com/free-photo/woman-choosing-earphones-store_1303-31280.jpg?t=st=1744014744~exp=1744018344~hmac=dd1d7407da853dd85449fc465fb9188b99ae4b2289c5721f44fd3203a5c3a0d8&w=1380",
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