import { useState } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@material-ui/core";
import Routing from "./router";
function App() {
  const mode = useSelector((state) => state.movies.selectedMovieShow);
  const theme = createTheme({
    palette: {
      color: {
        main: mode ? "#000000" : "#FFFFFF",
        primary: mode ? "#4C4C4C" : "#FFFFFF",
        secondary: mode ? "#9FA2B4" : "#FFFFFF",
        alpha: mode ? "#FFFFFF" : "#000000",
      },
      backgroundColor: {
        main: mode ? "#FFFFFF" : "#000000",
        iconbg1: mode ? "#21A365" : "#000000",
        iconbg2: mode ? "#F12B2C" : "#000000",
      },
      icon: {
        main: mode ? "#FFE9D" : "#FFFFFF",
        primary: mode ? "#D3EDE0" : "#FFFFFF",
        secondary: mode ? "#CFEEFF" : "#FFFFFF",
        alpha: mode ? "#F3E5F5" : "#FFFFFF",
        beta: mode ? "#FFFFC7" : "#FFFFFF",
        gamma: mode ? "#F7D8DE" : "#FFFFFF",
        hexa: mode ? "#FFE2E4" : "#FFFFFF",
      },
    },

    typography: {
      fontFamily: "Inter",
      h1: {
        fontSize: "30px",
        fontWeight: 600,
      },
      h2: {
        fontSize: "15px",
        fontWeight: 600,
      },
      h3: {
        fontSize: "14px",
        fontWeight: 700,
      },
    },
    border: {
      main: mode ? "#DFE0EB" : "#FFFFFF",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Routing />
    </ThemeProvider>
  );
}

export default App;
