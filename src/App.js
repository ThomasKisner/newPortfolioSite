import * as React from "react";
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

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

function App() {
  const [mode, setMode] = React.useState(
    useMediaQuery("(prefers-color-scheme: dark)") ? "dark" : "light"
  ); //Sets users light/dark mode preference as colorMode

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        typography: {
          lineHeight: 4,
          body1: {
            lineHeight: 2,
            fontFamily: "VT323",
          },
        },
        palette: {
          mode: mode,
        },
      }),
    [mode]
  );

  console.log(theme.typography);

  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <CssBaseline />
          <Container
            maxWidth={false}
            disableGutters
            //inspiration project: https://reactjsexample.com/a-sleek-and-responsive-personal-portfolio-template-built-using-react/
            //inspiration deployed project: https://reactfolio.tharindu.dev/about
            //TO DO make sides slightly darker
            //TO DO add resume pdf like here: https://brittanychiang.com/
            // https://www.geeksforgeeks.org/how-to-download-pdf-file-in-reactjs/#
          >
            <Container disableGutters={isXs}>
              <Header />
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Patience />} />
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
