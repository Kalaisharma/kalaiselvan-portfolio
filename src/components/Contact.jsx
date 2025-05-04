import React from "react";
import {
  Typography,
  Box,
  IconButton,
  Stack,
  Link as MuiLink,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Contact() {
  const email = "kalaisharma05052003@gmail.com";
  const phone = "+91-9345794092";
  const location = "Tiruvannamalai, India";

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        backgroundColor: "#0f2027", // Dark gradient background
        color: "#ffffff", // White text
        textAlign: "center",
      }}
      id="contact"
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontWeight: 700, color: "#ffffff" }}
      >
        Contact
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

      <Stack
        spacing={1}
        alignItems="center"
        justifyContent="center"
        sx={{ mb: 2 }}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <EmailIcon sx={{ color: "#ffffff" }} />
          <MuiLink
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{ color: "#ffffff" }}
          >
            {email}
          </MuiLink>
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          <PhoneIcon sx={{ color: "#ffffff" }} />
          <Typography>{phone}</Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          <LocationOnIcon sx={{ color: "#ffffff" }} />
          <Typography>{location}</Typography>
        </Box>
      </Stack>

      <Stack direction="row" spacing={2} justifyContent="center">
        <IconButton
          component="a"
          href="https://github.com/Kalaisharma/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#ffffff",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/kalaiselvan-r-96a108219"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#ffffff",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
        >
          <LinkedInIcon />
        </IconButton>
      </Stack>

      <Typography variant="body2" sx={{ mt: 2 }} color="inherit">
        © {new Date().getFullYear()} Kalaiselvan. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Contact;
