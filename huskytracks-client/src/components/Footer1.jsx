import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ px: 0 }}>
            <Box
                sx={{
                    backgroundColor: "#111111",
                    color: "#f5f5f5",
                    py: 4,
                    px: { xs: 2, md: 6 },
                    mt: 10,
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                }}
            >
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" sx={{ color: "#ffffff", fontWeight: 600 }}>
                            HuskyTracks
                        </Typography>
                        <Typography sx={{ mt: 1, fontSize: "0.9rem", color: "#cccccc" }}>
                            Helping Northeastern students track and recover their lost items safely and efficiently.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="subtitle1" sx={{ color: "#ffffff", fontWeight: 500 }}>
                            Quick Links
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                            <Link href="/about" underline="hover" sx={{ display: "block", color: "#f87171", mb: 0.5 }}>
                                About Us
                            </Link>
                            <Link href="/contact" underline="hover" sx={{ display: "block", color: "#f87171", mb: 0.5 }}>
                                Contact Us
                            </Link>
                            <Link href="/report-lost-item" underline="hover" sx={{ display: "block", color: "#f87171" }}>
                                Report Item
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" sx={{ color: "#ffffff", fontWeight: 500 }}>
                            Contact Info
                        </Typography>
                        <Typography sx={{ fontSize: "0.9rem", color: "#cccccc", mt: 1 }}>
                            Boston, MA<br />
                            support@huskytracks.com
                        </Typography>
                    </Grid>
                </Grid>

                <Box sx={{ borderTop: "1px solid #333", mt: 4, pt: 2, textAlign: "center" }}>
                    <Typography variant="caption" sx={{ color: "#888" }}>
                        © {new Date().getFullYear()} HuskyTracks. All rights reserved.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
