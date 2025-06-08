import React from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Link,
  Stack,
} from "@mui/material";
import ReactMarkdown from "react-markdown";

const experiences = [
  {
    title: "Trainee Engineer",
    company: "Avasoft",
    companyLogo:
      "https://mma.prnewswire.com/media/1859498/AVASOFT_Logo.jpg?p=facebook", // Add logo image URL here
    website: "https://www.avasoft.com/", // Add company website URL here
    duration: "Apr 2024 - Aug 2024",
    responsibilities: [
      "► Acquired strong expertise in full-stack development with technologies such as **JavaScript**, **TypeScript**, **ReactJS**, **Node.js**, **Express.js**, **Golang**, and **MSSQL** for building scalable web applications.",
      "► Developed **responsive** and **interactive UIs** using **ReactJS**, and built **robust backend services** and **RESTful APIs** with **Node.js**, **Express.js**, and **Golang**, focusing on **performance** and **maintainability**.",
      "► Designed and managed **relational databases** using **MSSQL**, writing **complex queries** and ensuring **data consistency**, **integrity**, and **scalability** across applications.",
      "► Contributed to **Avamigratron**, a **Microsoft 365 tenant-to-tenant data migration project**, by integrating **Microsoft Graph APIs** to securely transfer **mails**, **OneDrive files**, **calendars**, ensuring **accuracy** and handling **throttling**.",
      "► Utilized **Git** for **version control** and **Postman** for **API testing**, supporting **smooth team collaboration** and **efficient validation** across the development lifecycle.",
    ],
  },
];

function Experience() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#e8f0f2", // Soft background
        py: 6,
      }}
      id="experience"
    >
      <Box sx={{ textAlign: "center", mb: 4 }}>
        {/* Experience Heading */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: 700, color: "#203a43", mb: 1 }}
          paddingTop={5}
        >
          Experience
        </Typography>
        <Box
          sx={{
            height: 4,
            width: 60,
            bgcolor: "#2c5364", // Same color as used for the divider in Education
            borderRadius: 2,
            mx: "auto", // Center the divider
            mb: 4,
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            marginLeft: "15%",
          }}
        >
          {experiences.map((experience, index) => (
            <Card
              key={index}
              sx={{
                mb: 3,
                width: "80%",
                p: 2,
                background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              <CardContent>
                <Grid container spacing={2}>
                  {/* 00 - Company Logo */}
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={experience.companyLogo}
                      alt={experience.company}
                      style={{
                        width: "150px", // Fixed width for rectangle
                        height: "75px", // Fixed height for rectangle
                        objectFit: "contain", // Maintain aspect ratio within the set dimensions
                      }}
                    />
                  </Grid>

                  {/* 01 - Company Name, Role, Duration */}
                  <Grid item xs={9}>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      <Typography color="inherit">
                        {experience.title}
                      </Typography>
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      <Link
                        href={experience.website}
                        target="_blank"
                        color="inherit"
                        underline="hover"
                      >
                        {experience.company}
                      </Link>{" "}
                      | {experience.duration}
                    </Typography>
                  </Grid>

                  {/* 10 & 11 - Responsibilities */}
                  <Grid item xs={12}>
                    <Stack spacing={1} mt={2}>
                      {experience.responsibilities.map(
                        (responsibility, idx) => (
                          <Typography
                            key={idx}
                            variant="body2"
                            sx={{ color: "#203a43" }}
                            component="div"
                          >
                            <ReactMarkdown>{responsibility}</ReactMarkdown>
                          </Typography>
                        )
                      )}
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Experience;
