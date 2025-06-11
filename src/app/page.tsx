"use client";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Button from "@mui/material/Button";

export default function HomePage() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <main className="p-8 min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-6">
        Welcome to Rockafellas Restaurant
      </h1>

      <Button variant="contained" onClick={toggleDarkMode}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </Button>

      <p className="mt-4">
        Enjoy the best food with the convenience of online ordering.
      </p>
    </main>
  );
}
