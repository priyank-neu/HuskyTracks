import React from "react";
import { Box, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HowItWorksHero from "../components/HowItWorksHero";
import FeaturesAtAGlance from "../components/FeaturesAtAGlance";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer1 from "../components/Footer1";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <HeroSection />
      
      {/* Call-to-action button after hero section */}
      <Box 
        sx={{ 
          display: "flex", 
          justifyContent: "center", 
          mt: -10, 
          mb: 8,
          position: "relative",
          zIndex: 2
        }}
      >
        <Button 
          variant="contained" 
          size="large"
          onClick={handleGetStarted}
          sx={{ 
            backgroundColor: "#b00020", 
            px: 4, 
            py: 1.5, 
            fontSize: "1.1rem",
            fontWeight: 600,
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(176, 0, 32, 0.3)",
            "&:hover": {
              backgroundColor: "#900018",
              transform: "translateY(-2px)",
              boxShadow: "0 6px 16px rgba(176, 0, 32, 0.4)",
            },
            transition: "all 0.3s ease"
          }}
        >
          Get Started
        </Button>
      </Box>
      
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
        <HowItWorksHero />
        <FeaturesAtAGlance />
        <TestimonialsSection />
      </Container>
      
      <Footer1 />
    </>
  );
};

export default LandingPage;