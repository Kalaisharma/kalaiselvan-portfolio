import React from "react";
import { Typography, Box, Container } from "@mui/material";

function Home() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.default",
        overflowX: "hidden", // Prevents horizontal scroll
          }}
        id="home"
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          height: "60vh",
          width: "100%",
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 700,
            letterSpacing: 1.5,
            color: "#ffffff",
            textShadow: "1px 1px 8px rgba(0, 0, 0, 0.6)",
                  }}
                  paddingTop={5}
        >
          Hi, I'm Kalaiselvan
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 2,
            maxWidth: "800px",
            lineHeight: 1.8,
            letterSpacing: 0.4,
            fontSize: "1.05rem",
            color: "#e0e0e0",
            textShadow: "0px 1px 3px rgba(0, 0, 0, 0.3)",
          }}
        >
          I'm a dedicated and enthusiastic Full Stack Developer skilled in
          React, Node.js, Java, and MySQL. With hands-on experience through
          real-world projects like a tour booking system and a cloud-based file
          manager, I bring both technical and problem-solving abilities to the
          table. My academic background includes a B.Tech in Information
          Technology with a strong CGPA of 9.05. I’m passionate about learning,
          adaptable to challenges, and thrive in collaborative environments. I
          aim to build impactful solutions that add value to both users and
          organizations.
        </Typography>
      </Container>
    </Box>
  );
}

export default Home;
