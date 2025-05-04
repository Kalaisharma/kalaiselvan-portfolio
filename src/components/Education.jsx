import React from "react";
import { Typography, Box, Card, CardContent, Container } from "@mui/material";

const education = [
  {
    degree: "B.Tech in Information Technology",
    school: "Mahendra Institute of Technology",
    marks: "90.5%",
    duration: "2020 - 2024",
  },
  {
    degree: "HSC",
    school: "Mount Saint Joseph Matriculation Higher Secondary School",
    marks: "71.6%",
    duration: "2019 - 2020",
  },
  {
    degree: "SSLC",
    school: "Mount Saint Joseph Matriculation Higher Secondary School",
    marks: "83.4%",
    duration: "2017 - 2018",
  },
];

function Education() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#e8f0f2",
        py: 6,
      }}
      id="education"
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: 700, color: "#203a43", mb: 1 }}
          paddingTop={5}
        >
          Education
        </Typography>
        <Box
          sx={{
            height: 4,
            width: 60,
            bgcolor: "#2c5364",
            borderRadius: 2,
            mb: 4,
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
          }}
        >
          {education.map((edu, index) => (
            <Card
              key={index}
              sx={{
                flex: "1 1 250px", // allows wrapping smartly
                maxWidth: "300px", // prevents stretching too wide
                minWidth: "250px", // minimum size before wrapping
                background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ color: "#2c5364" }}>
                  {edu.degree}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{ mt: 0.5 }}
                >
                  {edu.school} | {edu.duration}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Percentage: <strong>{edu.marks}</strong>
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Education;
