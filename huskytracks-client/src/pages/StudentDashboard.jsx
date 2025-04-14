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
          backgroundColor: "#fdfdfd",
          minHeight: "100vh",
        }}
      >
        {/* Spotlight Hero Section */}
        <HeroSpotlight userEmail={user.email} />

        {/* Section Title */}
        <Typography
          variant="h5"
          sx={{
            mb: 3,
            fontWeight: 600,
            color: "#333",
            textAlign: "center",
          }}
        >
          Your Lost Item Reports
        </Typography>

        <Grid container spacing={3}>
          {items.length === 0 ? (
            <Typography variant="body1" sx={{ color: "#666", pl: 2 }}>
              You haven't reported any lost items yet.
            </Typography>
          ) : (
            items.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item._id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderRadius: "12px",
                    border: "1px solid #e0e0e0",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  {item.imageUrl && (
                    <CardMedia
                      component="img"
                      height="180"
                      image={item.imageUrl}
                      alt={item.title}
                      sx={{ objectFit: "cover" }}
                    />
                  )}
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, color: "#444" }}>
                      {item.description}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, color: "#777" }}>
                      📍 <strong>{item.locationName}</strong>
                    </Typography>

                    <Chip
                      label={item.status}
                      sx={{
                        mt: 2,
                        fontWeight: 500,
                        color: "#fff",
                        backgroundColor:
                          item.status === "Returned"
                            ? "#22c55e"
                            : item.status === "Matched"
                            ? "#facc15"
                            : item.status === "Transferred to NUPD"
                            ? "#94a3b8"
                            : "#999",
                      }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </>
  );
};

export default StudentDashboard;
