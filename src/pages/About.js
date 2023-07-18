import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "left",
  margin: "0 auto",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: "#64B64F",
  fontFamily: "VT323",
  whiteSpace: "pre-line",
}));

function About() {
  const [prompt1, setPrompt1] = useState("|");
  const [prompt2, setPrompt2] = useState("|");
  const [prompt3, setPrompt3] = useState("|");

  const [startPrompt1, setStartPrompt1] = useState(false);
  const [startPrompt2, setStartPrompt2] = useState(false);
  const [startPrompt3, setStartPrompt3] = useState(false);

  const [paragraph1, setParagraph1] = useState("");
  const [paragraph2, setParagraph2] = useState("");
  const [paragraph3, setParagraph3] = useState("");

  const promptText1 = "tom_info.exe";
  const paragraph1Text =
    "NAME: Tom Kisner \n OCCUPATION: Full Stack Developer (React/Node) \n  CURRENT HOME: Galveston, TX \n HOMETOWN: Killingworth, CT  \n FORMER HOMES:   Killingworth, CT 🠊 Wheeling, WV 🠊 Savannah, GA 🠊 Jacksonville, FL 🠊 Meriden, CT 🠊 Austin, TX";

  const promptText2 = "tom_about.exe";
  const paragraph2Text =
    "Tom is big a fan of new places and experiences. He really enjoys learning new things. This manifests itself often in fixing or building things. Websites, computers, cars, appliances, whatever. Passion for learning new things is what led him to a career in tech. He has a B.A. in Economics. He decided to make a career change and tech was the perfect match for his interests and passions. He thinks talking in third person is weird, but it makes sense for this section.";

  const promptText3 = "tom_hobbies.exe";
  const paragraph3Text =
    "September to January: watching Chicago Bears lose games. \n February to August: beliving Chicago Bears will win this year. \n Hope Springs Eternal :) \nAnything Hartford Whalers. \nVintage video games: Wayne Gretzky Hockey, Ken Griffy Jr. Baseball, No One Lives Forever, NFL Street, and more.";

  //To do add button to skip typing effect that fades in after one or two seconds so someone can simply see text

  useEffect(() => {
    //Makes cursor blink where prompt will be typed to give appearance of typing.
    const startPrompt1 = setTimeout(() => {
      setStartPrompt1(true);
    }, 2100);
    return () => clearTimeout(startPrompt1);
  }, []);

  useEffect(() => {
    //Gives typing effect for program prompt text.
    if (startPrompt1 && prompt1.length !== promptText1.length) {
      const typing = setTimeout(() => {
        setPrompt1(promptText1.slice(0, prompt1.length + 1));
      }, 100);
      return () => clearTimeout(typing);
    }
  }, [startPrompt1, prompt1]);

  useEffect(() => {
    //Gives typing effect for response to program prompt
    if (
      prompt1.length === promptText1.length &&
      paragraph1.length !== paragraph1Text.length
    ) {
      const typing = setTimeout(() => {
        setParagraph1(paragraph1Text.slice(0, paragraph1.length + 1));
      }, 15);
      return () => clearTimeout(typing);
    }
  }, [prompt1, paragraph1]);

  useEffect(() => {
    //Makes cursor blink where prompt2 will be typed to give appearance of typing.
    if (paragraph1.length === paragraph1Text.length) {
      const startPrompt2 = setTimeout(() => {
        setStartPrompt2(true);
      }, 2100);
      return () => clearTimeout(startPrompt2);
    }
  }, [paragraph1]);

  useEffect(() => {
    //Gives typing effect for program second prompt text.
    if (startPrompt2) {
      const typing = setTimeout(() => {
        setPrompt2(promptText2.slice(0, prompt2.length + 1));
      }, 100);
      return () => clearTimeout(typing);
    }
  }, [prompt1, promptText1, prompt2, startPrompt2]);

  useEffect(() => {
    //Gives typing effect for response to program prompt
    if (
      prompt2.length === promptText2.length &&
      paragraph2.length !== paragraph2Text.length
    ) {
      const typing = setTimeout(() => {
        setParagraph2(paragraph2Text.slice(0, paragraph2.length + 1));
      }, 15);
      return () => clearTimeout(typing);
    }
  }, [paragraph1, paragraph2, prompt2, startPrompt2]);

  useEffect(() => {
    //Makes cursor blink where prompt will be typed to give appearance of typing.
    if (paragraph2.length === paragraph2Text.length) {
      const startPrompt3 = setTimeout(() => {
        setStartPrompt3(true);
      }, 2100);

      return () => clearTimeout(startPrompt3);
    }
  }, [paragraph2.length]);

  useEffect(() => {
    //Gives typing effect for third program prompt text.
    if (startPrompt3 && prompt2.length === promptText2.length) {
      const typing = setTimeout(() => {
        setPrompt3(promptText3.slice(0, prompt3.length + 1));
      }, 100);

      return () => clearTimeout(typing);
    }
  }, [startPrompt3, prompt2, promptText2, prompt3]);

  useEffect(() => {
    //Gives typing effect for response to program prompt
    if (
      prompt3.length === promptText3.length &&
      paragraph3.length !== paragraph3Text.length
    ) {
      const typing = setTimeout(() => {
        setParagraph3(paragraph3Text.slice(0, paragraph3.length + 1));
      }, 15);
      return () => clearTimeout(typing);
    }
  }, [paragraph2, paragraph3, prompt3]);

  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginTop: "20px" }}>
      <Grid item xs={12} md={7}>
        <Item>
          <StyledTypography variant="h4" align="left">
            C:\Users\tom\programs:
            <span className={startPrompt1 === false ? "blinking-cursor" : ""}>
              {prompt1}
            </span>
            <br />
            {`${paragraph1}`}
          </StyledTypography>
          <br />
          {paragraph1.length === paragraph1Text.length && (
            <StyledTypography variant="h4" align="left">
              C:\Users\tom\programs:
              <span className={startPrompt2 === false ? "blinking-cursor" : ""}>
                {prompt2}
              </span>
              <br />
              {`${paragraph2}`}
            </StyledTypography>
          )}
          <br />
          {paragraph2.length === paragraph2Text.length && (
            <StyledTypography variant="h4" align="left">
              C:\Users\tom\programs:
              <span className={startPrompt3 === false ? "blinking-cursor" : ""}>
                {prompt3}
              </span>
              <br />
              {`${paragraph3}`}
            </StyledTypography>
          )}
        </Item>
      </Grid>
    </Box>
  );
}

export default About;
