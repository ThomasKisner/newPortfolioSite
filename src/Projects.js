import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import JavascriptIcon from "@mui/icons-material/Javascript";
import Divider from "@mui/material/Divider";

//TO DO: DEFINE ITEMS BY TYPE INSTEAD OF BOX

// const Item = styled(Box)(({ theme }) => ({
//   padding: theme.spacing(1),
//   textAlign: "left",
//   margin: "0 auto",
//   display: "flex",
//   justifyContent: "space-between",
//   border: "1px solid blue",
// }));

const projects = [
  {
    icon: <JavascriptIcon fontSize="large" />,
    title: "TomKisner.com",
    stack: "React.js v18, Material UI v5, @emotion/styled v11, React Router v6",
    description:
      "Single page portfolio site displaying information about myself, some of my projects, and options to contact me.",
    img: "portfolioSiteDark.png",
    imgLight: "portfolioSiteLight.png",
    imgAlt: "Portfolio site image",
  },
  {
    icon: <JavascriptIcon fontSize="large" />,
    title: "Notes Back End",
    stack: "Node.js, Express v4, SQLite3 v4",
    description:
      " A backend created to interface with an existing note taking application backend enabling display, editing, and deletion of notes.",
    img: "notesCode.png",
    imgLight: "notesCodeLight.png",
    imgAlt: "Back-end project code",
  },
];

export default function Projects() {
  const theme = useTheme();
  const imgKey = theme.palette.mode === "dark" ? "img" : "imgLight";

  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginTop: "20px", padding: "10px" }}>
      <Divider variant="fullWidth" />
      <Typography variant="h4">Projects</Typography>
      <Box>
        {projects.map((project) => {
          return (
            <div key={project.title}>
              <Box
                key={project.title}
                sx={{
                  display: "flex",
                  padding: "10px 0",
                  flexDirection: { xs: "column-reverse", sm: "row" },
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", sm: "50%" },
                    paddingTop: { xs: "10px", sm: 0 },
                  }}
                >
                  <img
                    src={project[imgKey]}
                    alt={project.imgAlt}
                    style={{
                      height: "300px",
                      width: "100%",
                      objectFit: "cover",
                      objectPosition: "left top",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    width: { xs: "100%", sm: "50%" },

                    padding: { xs: 0, sm: "0 0 0 20px" },
                  }}
                >
                  <Typography variant="h6" align="left" nowrap="false">
                    <strong>{project.title}</strong>
                  </Typography>
                  <br />
                  <Typography variant="body1" gutterBottom nowrap="false">
                    <strong>Tech Stack:</strong> {project.stack}
                  </Typography>
                  <br />
                  {project.description}
                </Box>
              </Box>

              <Divider variant="fullWidth" />
            </div>
          );
        })}
      </Box>
    </Box>
  );
}
