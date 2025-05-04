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

const experiences = [
  {
    title: "Talent Acquisition Executive",
    company: "Triad Square Infosec Pvt Ltd",
    companyLogo:
      "https://triadsquare.com/wp-content/uploads/2022/04/final-logo.png", // Add logo image URL here
    website: "https://triadsquare.com/", // Add company website URL here
    duration: "Oct 2024 - Apr 2024",
    responsibilities: [
      "► Responsible for sourcing and identifying top talent using platforms like Naukri and LinkedIn.",
      "► Delivered quality profiles tailored to meet the specific requirements of clients, ensuring alignment with organizational needs.",
      "► Built and maintained a strong pipeline of qualified candidates, fostering effective communication with clients and candidates alike.",
      "► Contributed to the recruitment process by prioritizing client satisfaction and delivering results in a timely manner.",
    ],
  },
  {
    title: "Trainee Engineer",
    company: "Avasoft",
    companyLogo:
      "https://mma.prnewswire.com/media/1859498/AVASOFT_Logo.jpg?p=facebook", // Add logo image URL here
    website: "https://www.avasoft.com/", // Add company website URL here
    duration: "Apr 2024 - Aug 2024",
    responsibilities: [
      "► Acquired expertise in full-stack development technologies including HTML, CSS, JavaScript, TypeScript, ReactJS, NodeJS, ExpressJS, Golang, MSSQL, Git, and Postman.",
      "► Completed extensive training, gaining proficiency in modern software development tools and methodologies.",
      "► Contributed to Avamigratron, a data migration project that utilized Microsoft APIs to transfer data seamlessly between tenants, ensuring data integrity and operational efficiency.",
      "► Collaborated with the team to troubleshoot issues, optimize processes, and enhance project outcomes.",
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
                            sx={{
                              color: "#203a43", // Matching text color
                            }}
                          >
                            {responsibility}
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
