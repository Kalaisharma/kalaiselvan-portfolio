import React, { useState } from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Modal,
  Backdrop,
  Fade,
  Chip,
  Divider,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import Tour_Agency from "../assets/Tour-Agency.png";
import weatherapp from "../assets/Weather-app.png";
import filemanage from "../assets/file-manage.png";

const projects = [
  {
    title: "Tour Agency Web App",
    image: Tour_Agency,
    shortDescription: "Search, book, and manage tours via an online portal.",
    fullDescription:
      "A full-stack web application built using React (with TypeScript) for the frontend and Node.js with Express and MySQL for the backend. It allows users to search for tour locations, view detailed tour information, and book tours efficiently. The platform includes user management, booking history, and is optimized for scalability.",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Rest API",
      "MySQL",
    ],
    link: "https://tour-agency-application.netlify.app/",
  },
  {
    title: "Bus Reservation System",
    image:
      "https://nimbus-screenshots.s3.amazonaws.com/s/8d438c76f2e2bc1848e7d0d81907c802.png",
    shortDescription: "Book, cancel, and track bus tickets using CLI app.",
    fullDescription:
      "A command-line based Java application using JDBC and MySQL. Users can book, cancel, and view bus reservations. Implements object-oriented principles and secure database interaction.",
    techStack: ["Java", "JDBC", "MySQL"],
    link: "https://github.com/Kalaisharma/BusReservationSystem",
  },
  {
    title: "Weather Web Application",
    image: weatherapp,
    shortDescription: "Real-time weather updates for any searched city.",
    fullDescription:
      "Built with ReactJS, this application uses the OpenWeather API to fetch and display weather details such as temperature, humidity, and conditions for searched cities in real time.",
    techStack: ["ReactJS", "OpenWeather API", "JavaScript", "HTML", "CSS"],
    link: "https://6817d4333041e800086d2ed1--liveweatherapplications.netlify.app/",
  },
  {
    title: "File Management Application",
    image: filemanage,
    shortDescription: "Upload, manage, and get notified on file actions.",
    fullDescription:
      "A backend-heavy file management application using Go (Gin), MySQL, and WebSocket. React is used for frontend. The system supports file upload, download, and real-time notifications. Supabase is optionally integrated for object storage.",
    techStack: ["Go","Gin", "ReactJS", "Typescript", "postgreSQL", "Redis", "Supabase"],
    link: "https://github.com/Kalaisharma/Kalaiselvan_Backend",
  },
];

function Projects() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <Box sx={{ px: 2, bgcolor: "background.default" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#203a43",
          textAlign: "center",
        }}
        id="projects"
        paddingTop={10}
      >
        Projects
      </Typography>

      <Divider
        sx={{
          bgcolor: "#203a43",
          mx: "auto",
          mb: 4,
          borderRadius: 2,
          height: 4,
          width: 60,
        }}
      />

      <Grid container spacing={3} justifyContent={"space-evenly"}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} key={index} mb={3}>
            <Card
              sx={{
                height: 300,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "pointer",
                transition: "0.3s",
                background: "linear-gradient(135deg, #203a43, #2c5364)",
                color: "#ffffff",
                "&:hover": {
                  boxShadow: 8,
                  background: "linear-gradient(135deg, #0f2027, #203a43)",
                },
              }}
              onClick={() => handleOpen(project)}
            >
              <CardMedia
                component="img"
                height="150"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  noWrap
                  sx={{
                    color: "#e0e0e0",
                    textOverflow: "ellipsis",
                  }}
                >
                  {project.shortDescription}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{ backdrop: { timeout: 500 } }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "auto",
              borderRadius: 2,
              boxShadow: 24,
              p: 4,
              maxHeight: "90vh",
              overflowY: "auto",
              background: "linear-gradient(to bottom right, #203a43, #2c5364)",
              color: "white",
            }}
          >
            {selectedProject && (
              <>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{ width: "100%", borderRadius: 8 }}
                />
                <Typography variant="h5" mt={2} sx={{ fontWeight: "bold" }}>
                  {selectedProject.title}
                </Typography>
                <Typography variant="body1" mt={2}>
                  {selectedProject.fullDescription}
                </Typography>
                <Box mt={2}>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 500, mb: 1 }}
                  >
                    Tech Stack:
                  </Typography>
                  {selectedProject.techStack.map((tech, idx) => (
                    <Chip
                      key={idx}
                      label={tech}
                      size="small"
                      sx={{
                        mr: 1,
                        mt: 1,
                        bgcolor: "white",
                        color: "#2c5364",
                        fontWeight: "bold",
                      }}
                    />
                  ))}
                </Box>
                {selectedProject.link && (
                  <Button
                    variant="contained"
                    sx={{
                      mt: 3,
                      color: "white",
                      background: "linear-gradient(to right, #2196f3, #1e88e5)",
                      "&:hover": {
                        background:
                              "linear-gradient(to right, #1976d2, #1565c0)",
                          color: "white",
                      },
                    }}
                    href={selectedProject.link}
                    target="_blank"
                    endIcon={<LaunchIcon />}
                  >
                    View Project
                  </Button>
                )}
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}

export default Projects;
