import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container
} from "@mui/material";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import HubIcon from "@mui/icons-material/Hub";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import EmailIcon from "@mui/icons-material/Email";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { CompassCalibration } from "@mui/icons-material";

const features = [
  {
    icon: <DashboardCustomizeIcon sx={{ fontSize: 36, color: "#b00020" }} />,
    title: "Role-Based Dashboards",
    desc: "Students, Admins, and Supervisors each have tailored views.",
  },
  {
    icon: <HubIcon sx={{ fontSize: 36, color: "#b00020" }} />,
    title: "Smart Matching",
    desc: "Lost and found reports are intelligently connected.",
  },
  {
    icon: <CloudUploadIcon sx={{ fontSize: 36, color: "#b00020" }} />,
    title: "Secure File Upload",
    desc: "Upload images of your lost items securely.",
  },
  {
    icon: <EmailIcon sx={{ fontSize: 36, color: "#b00020" }} />,
    title: "Email Notifications",
    desc: "Get updates when there’s a potential match.",
  },
  {
    icon: <AdminPanelSettingsIcon sx={{ fontSize: 36, color: "#b00020" }} />,
    title: "Admin Controls",
    desc: "Admins can review, manage, and moderate reports.",
  },
];

const FeaturesAtAGlance = () => {
  return (
    <Box sx={{ mt: 5, pt: 7, pb: 10, backgroundColor: "#111", color: "#fff", borderTopLeftRadius: "20px", borderTopRightRadius: "20px", borderBottomLeftRadius:"20px", borderBottomRightRadius:"20px"  }}> 
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, textAlign: "center", mb: 6 }}
        >
          Features at a Glance
        </Typography>
        <Grid container spacing={5} justifyContent="center">
          {features.map((feature, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box sx={{ textAlign: "center", px: 2, transition: "all 0.3s ease", '&:hover': { transform: 'translateY(-5px)' } }}>
                {feature.icon}
                <Typography variant="h6" sx={{ mt: 1, fontWeight: 600 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#ccc", mt: 0.5 }}>
                  {feature.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesAtAGlance;