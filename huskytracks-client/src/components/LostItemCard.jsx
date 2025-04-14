import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
} from "@mui/material";

const LostItemCard = ({ item }) => {
  const statusColor =
    item.status === "Returned"
      ? "#15803d" // more muted green
      : item.status === "Transferred to NUPD"
      ? "#374151" // consistent dark grey
      : "#facc15"; // soft yellow

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "12px",
        border: "1px solid #e5e7eb",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
        transition: "all 0.3s ease",
        height: "100%",
        width: "100%",
        maxWidth: 330,
        mx: "auto",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
        },
      }}
    >
      {item.imageUrl && (
        <CardMedia
          component="img"
          height="160"
          image={item.imageUrl}
          alt={item.title}
          sx={{
            objectFit: "cover",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
          }}
        />
      )}
      <CardContent sx={{ px: 2.5 }}>
        <Typography
          variant="h6"
          sx={{ fontSize: "1.1rem", fontWeight: 600, color: "#111827" }}
        >
          {item.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ mt: 1, color: "#4b5563", lineHeight: 1.6 }}
        >
          {item.description}
        </Typography>
        <Typography
          variant="body2"
          sx={{ mt: 1, color: "#1f2937", fontWeight: 500 }}
        >
          📍 {item.locationName}
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Chip
            label={item.status}
            sx={{
              fontWeight: 500,
              color: "#fff",
              backgroundColor: statusColor,
              borderRadius: "6px",
              px: 1.5,
              py: 0.5,
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default LostItemCard;
