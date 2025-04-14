import React, { MouseEvent as ReactMouseEvent, useCallback } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const HeroSpotlight = ({ userEmail }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const navigate = useNavigate();

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const handleMouseMove = (event) => {
    const { currentTarget, clientX, clientY } = event;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const background = useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.07), transparent 80%)`;

  const userName = userEmail?.split("@")[0];

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        backgroundColor: "#1E293B",
        borderRadius: "16px",
        padding: "3rem 2.5rem",
        marginBottom: "3rem",
        color: "#F1F5F9",
        boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
        overflow: "hidden",
      }}
    >
      {/* Subtle background particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 35 },
            color: { value: "#ffffff" },
            opacity: { value: 0.08 },
            size: { value: 2 },
            move: {
              enable: true,
              speed: 0.2,
              direction: "none",
              outModes: { default: "bounce" },
            },
            links: { enable: false },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "attract" },
              onClick: { enable: false },
            },
            modes: {
              attract: {
                distance: 100,
                duration: 0.4,
                speed: 0.5,
              },
            },
          },
        }}
        style={{
          position: "absolute",
          zIndex: 0,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />

      {/* Spotlight Glow */}
      <motion.div
        style={{
          pointerEvents: "none",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: "16px",
          opacity: 0.6,
          background,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Content */}
      <Grid container alignItems="center" spacing={4} zIndex={1} position="relative">
        {/* Left Side: Welcome Message */}
        <Grid item xs={12} md={8}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: "#F87171" }}>
            Welcome, {userName}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              fontSize: "1.1rem",
              color: "#E2E8F0",
              maxWidth: "90%",
            }}
          >
            Track and recover your lost items across campus easily with HuskyTracks. We’re here to help you stay calm and connected.
          </Typography>
        </Grid>

        {/* Right Side: Button */}
        <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "right" }}>
          <Button
            onClick={() => navigate("/report-lost-item")}
            variant="contained"
            sx={{
              backgroundColor: "#7F1D1D",
              color: "#fff",
              fontWeight: 600,
              textTransform: "none",
              px: 4,
              py: 1.5,
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#DC2626",
              },
            }}
          >
            Report a Lost Item
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeroSpotlight;
