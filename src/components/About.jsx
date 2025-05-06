import React from "react";
import { Typography, Box, Divider, Container, Button } from "@mui/material";

function About() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#f5f7fa", // Soft background to contrast with Home section
        py: 6,
        overflowX: "hidden",
          }}
          id="about"
    >
      <Container
        maxWidth="md"
        sx={{
          px: { xs: 2, sm: 3 },
          textAlign: "justify",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: "#203a43", // Matching dark tone
              mb: 1,
                  }}
          paddingTop={5}
          textAlign={"center"}
        >
          About Me
        </Typography>

        <Divider
          sx={{
            mb: 3,
            height: 4,
            width: 60,
            bgcolor: "#2c5364", // Accent underline color
            borderRadius: 2,
            mx: "auto", // Center the divider
          }}
        />

        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.9,
            fontSize: "1.05rem",
            color: "#333",
          }}
        >
          Hello! I’m Kalaiselvan, a passionate and driven Full Stack Developer
          with a solid foundation in modern web development technologies such as
          React, Node.js, Java, and MySQL. As a fresher, I have already
          showcased my abilities through hands-on projects, including a tour
          booking system, a weather application, and a file management backend
          using Go.
          <br />
          <br />I hold a B.Tech in Information Technology with a CGPA of{" "}
          <strong>9.05</strong>, reflecting my consistent academic performance
          and commitment to excellence. Being the sole supporter of my family, I
          carry a deep sense of responsibility and perseverance in everything I
          do.
          <br />
          <br />
          I’m constantly eager to learn new technologies, improve my skills, and
          contribute to meaningful projects. My strengths include adaptability,
          strong problem-solving skills, and a positive attitude towards
          teamwork and growth. I look forward to building impactful applications
          that create real value.
        </Typography>

        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#2c5364",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#1c3a42", // Darker shade on hover
              },
            }}
            href="https://drive.google.com/uc?export=download&id=1kepY3y-VE3NCn16gjQIKeVE92-zDa7yb" // Update the path to your resume
            download="Kalaiselvan_Resume.pdf" // Set the name of the downloaded file
          >
            Download Resume
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default About;
