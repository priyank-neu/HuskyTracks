import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Container
} from "@mui/material";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import HubIcon from "@mui/icons-material/Hub";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

const steps = [
  {
    icon: <FindInPageIcon sx={{ fontSize: 40, color: "#b00020", mb: 2 }} />,
    title: "Submit Report",
    desc: "Provide a few details and an image of your lost item. It's quick and easy!",
  },
  {
    icon: <HubIcon sx={{ fontSize: 40, color: "#b00020", mb: 2 }} />,
    title: "Smart Matchmaking",
    desc: "Our backend helps connect lost items to potential finders using match logic.",
  },
  {
    icon: <VerifiedUserIcon sx={{ fontSize: 40, color: "#b00020", mb: 2 }} />,
    title: "Safe Return",
    desc: "Items are returned directly or handed off to NUPD.",
  },
];

const HowItWorksHero = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: "#111", my: 10, borderRadius: 4, width: '100%' }}> 
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 6, md: 12 } }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, color: "#b00020", textAlign: "center", mb: 6 }}
        >
          How It Works
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {steps.map((step, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Paper
                elevation={6}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  textAlign: "center",
                  height: "100%",
                  backgroundColor: "#fff",
                  transition: "transform 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  '&:hover': {
                    transform: "translateY(-6px)",
                  },
                }}
              >
                {step.icon}
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: "#111" }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#444" }}>
                  {step.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorksHero;