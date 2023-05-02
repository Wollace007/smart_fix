import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Handyman } from "@mui/icons-material";
import '../components/home.css';
const pages = ["HOME", "ABOUT", "SERVICES","PAGES","CONTACT"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box sx={{ padding: 1 }}>
        <AppBar position="static" style={{background: 'transparent', boxShadow: 'none'}}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Handyman sx={{ display: { xs: "none", md: "flex" }, mr: 1,color:"#ffc107"}} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Smart Fix
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex",justifyContent:"center"} }}>
                {pages.map((page) => (
                  <Button
                  className="navbar" 
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              <Button variant="contained" size="small"style={{backgroundColor:"#fc8f00",padding:"4px 12px"}}>
                 Book Service
        </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
