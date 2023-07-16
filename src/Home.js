import * as React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "left",
  margin: "0 auto",
}));

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginTop: "20px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Item>
            <Typography variant="h4" align="left">
              Enthusiastic full stack developer with a passion for learning and
              applying new skills
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
              I am a full stack developer who has workedin the IT industry since
              2019. I primarily work in the Javascript stack (React/Node), and
              have used those skills (among others) to create, enhance, or fix a
              variety of enterprise-level applications. I am passionate about
              creating high-quality code that follows best practices and
              industry standards. I am always looking for new challenges and
              opportunities to grow as a developer.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} md={5}>
          <Item>
            <img
              src="computer.webp"
              alt="Old Computer"
              style={{
                width: "100%",
                maxWidth: "620px",
                borderRadius: "6%",
                textAlign: "center",
              }}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
