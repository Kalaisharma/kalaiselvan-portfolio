import React from "react";
import { Typography, Box, Grid, Chip, Container } from "@mui/material";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGithub,
  FaDatabase,
  FaServer,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiPostman,
  SiSupabase,
} from "react-icons/si";
import { DiGit } from "react-icons/di";
import golangLogo from "../assets/golang.svg";
import vscodelogo from "../assets/vscode.svg";

function Skills() {
  const skills = [
    { icon: <FaHtml5 size={30} color="#E44D26" />, label: "HTML" },
    { icon: <FaCss3Alt size={30} color="#264de4" />, label: "CSS" },
    { icon: <FaJsSquare size={30} color="#F7DF1E" />, label: "JavaScript" },
    { icon: <FaReact size={30} color="#61dafb" />, label: "React" },
    { icon: <SiTypescript size={30} color="#3178C6" />, label: "TypeScript" },
    { icon: <FaNodeJs size={30} color="#8CC84B" />, label: "Node.js" },
    { icon: <SiExpress size={30} color="#000000" />, label: "Express" },
    { icon: <FaJava size={30} color="#f89820" />, label: "Java" },
    { icon: <FaDatabase size={30} color="#007bff" />, label: "JDBC" },
    { icon: <SiMysql size={30} color="#00618a" />, label: "MySQL" },
    { icon: <SiMongodb size={30} color="#4DB33D" />, label: "MongoDB" },
    { icon: <DiGit size={30} color="#F1502F" />, label: "Git" },
    { icon: <FaGithub size={30} color="#000" />, label: "GitHub" },
    {
      icon: (
        <img src={golangLogo} alt="Golang" style={{ width: 30, height: 30 }} />
      ),
      label: "Golang",
    },
    { icon: <SiRedis size={30} color="#D92D2C" />, label: "Redis" },
    { icon: <SiPostgresql size={30} color="#336791" />, label: "PostgreSQL" },
    { icon: <FaServer size={30} color="#FF5733" />, label: "REST API" },
    { icon: <SiPostman size={30} color="#FF6C37" />, label: "Postman" },
    {
      icon: (
        <img src={vscodelogo} alt="VSCode" style={{ width: 30, height: 30 }} />
      ),
      label: "VSCode",
    },
    { icon: <SiSupabase size={30} color="#3ECF8E" />, label: "Supabase" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        py: 6,
        color: "white",
          }}
          id="skills"
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          gutterBottom
                  sx={{ fontWeight: 700, color: "#ffffff", textAlign: "center" }}
                  paddingTop={5}
        >
          Skills
        </Typography>

        <Box
          sx={{
            height: 4,
            width: 60,
            bgcolor: "#ffffff",
            borderRadius: 2,
            mx: "auto",
            mb: 4,
          }}
        />

        <Grid container spacing={2}>
          {skills.map((skill, idx) => (
            <Grid item xs={6} sm={4} md={3} key={idx}>
              <Chip
                icon={skill.icon}
                label={skill.label}
                variant="filled"
                sx={{
                  width: "100%",
                  justifyContent: "flex-start",
                  fontSize: "1.1rem",
                  color: "#ffffff",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  padding: "6px 10px",
                  backdropFilter: "blur(3px)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Skills;
