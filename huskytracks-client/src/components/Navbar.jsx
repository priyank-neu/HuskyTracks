import React, { useState } from "react";
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Typography, 
  Box, 
  Container,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import SchoolIcon from '@mui/icons-material/School';
import huskyLogo from "../assets/HuskyLOGO.png"; // Make sure this path is correct

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  
  const handleNavigation = (path) => {
    navigate(path);
    handleMenuClose();
  };

  return (
    <AppBar position="static" sx={{ 
      backgroundColor: "#b00020",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
    }}>
      <Container>
        <Toolbar sx={{ px: { xs: 0, sm: 2 } }}>
          {/* Logo and Title */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              flexGrow: 1 
            }}
            onClick={() => navigate("/")}
          >
            <Box
              component="img"
              src={huskyLogo}
              alt="Husky Logo"
              sx={{ 
                height: '40px',
                mr: 1,
                filter: 'brightness(0) invert(1)',
                cursor: 'pointer'
              }}
            />
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 700,
                cursor: 'pointer',
                display: { xs: 'none', sm: 'block' }
              }}
            >
              HuskyTracks
            </Typography>
          </Box>
          
          {/* Desktop Navigation */}
          {!isMobile ? (
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button 
                color="inherit" 
                onClick={() => navigate("/about-us")}
                sx={{ fontWeight: 500 }}
              >
                About Us
              </Button>
              <Button 
                color="inherit" 
                onClick={() => navigate("/contact-us")}
                sx={{ fontWeight: 500 }}
              >
                Contact
              </Button>
              <Button 
                variant="contained"
                onClick={() => navigate("/login")}
                startIcon={<SchoolIcon />}
                sx={{
                  backgroundColor: 'white',
                  color: '#b00020',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#f8f8f8',
                  }
                }}
              >
                Sign In
              </Button>
            </Box>
          ) : (
            // Mobile Menu
            <>
              <IconButton 
                color="inherit" 
                edge="end" 
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem onClick={() => handleNavigation("/about-us")}>
                  About Us
                </MenuItem>
                <MenuItem onClick={() => handleNavigation("/contact-us")}>
                  Contact
                </MenuItem>
                <MenuItem 
                  onClick={() => handleNavigation("/login")}
                  sx={{ 
                    backgroundColor: '#f9e6e6',
                    color: '#b00020',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: '#f8d6d6',
                    }
                  }}
                >
                  Sign In
                </MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;