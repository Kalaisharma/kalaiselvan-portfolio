import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const sections = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Education",
  "Experience",
  "Contact",
];

function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => () => {
    setOpenDrawer(open);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        width: "100%",
        top: 0,
        zIndex: 1100,
      }}
    >
      <Container maxWidth="xl" disableGutters>
        <Toolbar sx={{ overflowX: "auto" }}>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              whiteSpace: "nowrap",
              fontWeight: "bold",
              color: "#ffffff",
              letterSpacing: 1,
              cursor: "pointer",
            }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            Kalaiselvan
          </Typography>

          {/* Mobile Hamburger */}
          <IconButton
            color="inherit"
            aria-label="open menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, flexWrap: "wrap" }}>
            {sections.map((text) => (
              <Button
                key={text}
                href={`#${text.toLowerCase()}`}
                sx={{
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                    transform: "translateY(-2px)",
                    transition: "transform 0.3s ease-in-out",
                    color: "#ffffff",
                  },
                  fontWeight: 500,
                  mx: 0.5,
                  textTransform: "none",
                  "&:focus": { outline: "none" },
                }}
              >
                {text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#203a43",
            color: "#ffffff",
            width: 250,
          },
        }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {sections.map((text) => (
              <ListItem
                button
                component="a"
                href={`#${text.toLowerCase()}`}
                key={text}
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
