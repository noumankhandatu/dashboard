import { useState } from "react";
import { ThemeProvider, createTheme } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import Routing from "./router";
import "./App.css";
function App() {
  const [mode, setMode] = useState(true);
  const theme = createTheme({
    palette: {
      color: {
        main: mode ? "black" : "white",
      },
      backgroundColor: {
        main: mode ? "white" : "black",
      },
    },
    typography: {
      fontFamily: "Ubuntu",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Routing />
      <Switch
        checked={mode}
        onChange={() => {
          setMode(!mode);
        }}
      />
    </ThemeProvider>
  );
}

export default App;
// const dark = createTheme({
//   palette: {
//     color: "white",
//     backgroundColor: "black",
//   },
// });
// const light = createTheme({
//   palette: {
//     color: "black",
//     backgroundColor: "white",
//   },
// });
