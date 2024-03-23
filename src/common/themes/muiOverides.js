import { createTheme } from "@mui/material/styles";

const themeOverides = createTheme({
  palette: {
    primary: {
      main: "#F58220",
    },
    secondary: {
      main: "#C6C6C6",
    },
  },
});

export default createTheme(themeOverides);
