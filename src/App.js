import React, { createContext, useState, useMemo, lazy, Suspense } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Header from "./Header";

import useMediaQuery from "@mui/material/useMediaQuery";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Patience from "./pages/Patience";
import Test from "./pages/Google";
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

function App() {
  const [mode, setMode] = useState(
    useMediaQuery("(prefers-color-scheme: dark)") ? "dark" : "light"
  ); //Sets users light/dark mode preference as colorMode

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          lineHeight: 4,
          body1: {
            lineHeight: 2,
          },
        },
        palette: {
          mode: mode,
        },
      }),
    [mode]
  );

  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <CssBaseline />
          <Container maxWidth={false} disableGutters>
            <Container disableGutters={isXs}>
              <Header />
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/playground" element={<Test />} />
                <Route path="/projects" element={<Patience />} />
              </Routes>

              {/* <Work /> */}
            </Container>
          </Container>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

//inspiration project: https://reactjsexample.com/a-sleek-and-responsive-personal-portfolio-template-built-using-react/
//inspiration deployed project: https://reactfolio.tharindu.dev/about
//TO DO make sides slightly darker
//TO DO add resume pdf like here: https://brittanychiang.com/
//TO DO - extract Box to HOC for pages so styling is shared and reused.
//TO DO - add transition to lazy loaded components.
// https://www.geeksforgeeks.org/how-to-download-pdf-file-in-reactjs/#
