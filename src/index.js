import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import themeOverides from "./common/themes/muiOverides";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    <ThemeProvider theme={themeOverides}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
