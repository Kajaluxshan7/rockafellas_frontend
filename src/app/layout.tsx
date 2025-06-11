"use client";
import "./globals.css";
import { ReactNode, useContext } from "react";
import { ThemeProvider as MUIThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import { ThemeProvider, ThemeContext } from "../context/ThemeContext";

function InnerApp({ children }: { children: ReactNode }) {
  const { darkMode } = useContext(ThemeContext);
  return (
    <MUIThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <ThemeProvider>
          <InnerApp>{children}</InnerApp>
        </ThemeProvider>
      </body>
    </html>
  );
}
