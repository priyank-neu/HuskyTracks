import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LostItemCard from "../components/LostItemCard";
import DashboardNavbar from "../components/DashboardNavbar";
import HeroSpotlight from "../components/HeroSpotlight";

const StudentDashboard = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("huskyUser"));

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5050/api/lost-items?email=${user.email}`
        );
        setItems(res.data);
      } catch (err) {
        console.error("Failed to load items", err);
      }
    };

    if (user?.email) fetchItems();
  }, [user]);

  return (
    <>
      <DashboardNavbar role="student" />

      <Box
        sx={{
          p: { xs: 2, md: 4 },
          backgroundColor: "#f9fafb",
          minHeight: "100vh",
          p: { xs: 2, md: 4 },
        }}
      >
        {/* Spotlight Hero Section */}
        <HeroSpotlight userEmail={user.email} />

        {/* Section Title */}
        <Typography
          variant="h4"
          component="h2"
          sx={{
            mb: 5,
            fontWeight: 700,
            color: "#1f2937",
            textAlign: "center",
          }}
        >
          Your Lost Item Reports
        </Typography>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {items.length === 0 ? (
            <Typography variant="body1" sx={{ color: "#666", pl: 2 }}>
              You haven't reported any lost items yet.
            </Typography>
          ) : (
            items.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item._id}>
                <LostItemCard item={item} />
              </Grid>
            ))
          )}
        </Grid>

      </Box>
    </>
  );
};

export default StudentDashboard;
