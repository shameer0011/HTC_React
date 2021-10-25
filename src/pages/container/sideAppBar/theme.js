// import { createMuiTheme } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
      nice:'#1976d2'
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    red: "red",
  },
  status: {
    danger: "orange",
  },
});
