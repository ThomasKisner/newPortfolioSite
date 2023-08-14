import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Resume from "./Resume";
import useFetchIP from "../useFetchIP.js";

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "left",
  margin: "0 auto",
}));

const Google = () => {
  const ipAddr = useFetchIP();

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <Box style={{ marginTop: "28px" }}>
      <Grid container spacing={2}>
        <Item>
          <Typography variant="h4" align="left">
            Playground - A place to post work in progress code.
          </Typography>
          <br />
          <Typography variant="body1" gutterBottom>
            Below is "@react-oauth/google" Google login. The beginning of a
            process to log into youtube and extend playlist functionality (sort
            by video length & more)
          </Typography>
          <h2>Google Login</h2>
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          <br />
          <Typography variant="body1" gutterBottom>
            Learning how to trigger a pdf download.
          </Typography>
          <Resume />
          <br />
          <Typography variant="body1" gutterBottom>
            Custom hook practice - gets userIP address
          </Typography>

          <Typography variant="body1" gutterBottom>
            IP: {ipAddr ? ipAddr : "...Loading"}
          </Typography>
        </Item>
      </Grid>
    </Box>
  );
};

export default Google;
