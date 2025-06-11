import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#3b82f6" },
    secondary: { main: "#f59e0b" },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#60a5fa" }, 
    secondary: { main: "#fbbf24" }, 
    background: { default: "#121212", paper: "#1e1e1e" },
  },
});
